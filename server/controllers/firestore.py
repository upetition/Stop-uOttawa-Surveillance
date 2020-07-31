from google.cloud import firestore
from server.controllers.abc import DatabaseDriver
from pydeepmerge import deep_merge


class FirestoreDriver(DatabaseDriver):
    valid_counts = {'verified', 'total'},

    def __init__(self, project_id=None, oauth2_credentials=None):
        db = firestore.Client(
            project=project_id,
            credentials=oauth2_credentials
        )
        client = db.collection('students')
        self.metadata = client.document('metadata')
        self.testimonials = db.collection('testimonials')
        self.testimonials_metadata = self.testimonials.document('metadata')
        super(FirestoreDriver, self).__init__(client)

    def _add(
        self,
        data,
        *,
        validating_data=None,
        validation_fields=None,
        client,
        metadata,
        check_unique=False,
        check_exists=False,
        validation_client=None
    ):
        found_item = None
        if validating_data is not None:
            validate_against = deep_merge(data, validating_data)
        else:
            validate_against = data
        if validation_fields is not None:
            for field in validation_fields:
                found_item = self._find({field: validate_against[field]}, validation_client)

                if check_unique and found_item is not None:
                    return None
                if check_exists and found_item is None:
                    return None

        _, doc_ref = client.add(data)
        metadata.update({
            'total_documents': firestore.Increment(1)
        })

        return doc_ref.id

    def _find(self, identifier, query=None):
        if query is None:
            query = self.database_client

        search_fields = identifier.keys()
        for field in search_fields:
            query = query.where(field, '==', identifier[field])
        document = None
        try:
            document = next(query.stream())
        except StopIteration:
            document = None

        return document

    def _verify(self, id_str, *, client, metadata):
        document = client.document(id_str)

        if document.get().to_dict()['verified'] is True:
            return False

        document.update({'verified': True})
        metadata.update({
            'total_verified': firestore.Increment(1)
        })

        return True

    def _update(self, identifier, update, *, client):
        document = self._find(identifier, client)
        document.update(update)

    def add_student(self, data):
        return self._add(
            data,
            validation_fields=['hash_email', 'hash_number'],
            client=self.database_client,
            metadata=self.metadata,
            check_unique=True,
            validation_client=self.database_client
        )

    def add_testimonial(self, data):
        stored_data = {
            'testimonial': data['testimonial'],
            'program': data['program'],
            'year': data['year'],
            'first_name': data['name'],
            'verified': data['verified']
        }

        return self._add(
            stored_data,
            client=self.testimonials,
            metadata=self.testimonials_metadata,
            check_exists=True,
            validation_client=self.database_client
        )

    def get_testimonials(self):
        result = []
        testimonials = self.testimonials.where('verified', '==', True)
        for item in testimonials.stream():
            testimonial = item.get().to_dict()
            relevant_data = {
                'name': testimonial['first_name'],
                'program': testimonial['program'],
                'year': testimonial['year'],
                'testimonial': testimonial['testimonial']
            }
            result.append(relevant_data)

        return result

    def delete(self, identifier):
        document = self._find(identifier)
        doc_data = document.get().to_dict()
        if doc_data['verified']:
            self.metadata.update({
                'total_verified': firestore.Increment(-1),
                'total_documents': firestore.Increment(-1)
            })
        document.delete()

    def set_student_verified(self, id_str):
        return self._verify(
            id_str,
            client=self.database_client,
            metadata=self.metadata
        )

    def set_testimonial_verified(self, id_str):
        return self._verify(
            id_str,
            client=self.testimonials,
            metadata=self.testimonials_metadata
        )

    def count_records(self, identifier):
        if 'total' in identifier:
            return self.metadata.get().to_dict()['total_documents']

        if 'verified' in identifier and identifier['verified']:
            return self.metadata.get().to_dict()['total_verified']

        if 'verified' in identifier and not identifier['verified']:
            doc = self.metadata.get().to_dict()
            not_verified = doc['total_documents'] - doc['total_verified']
            return not_verified
