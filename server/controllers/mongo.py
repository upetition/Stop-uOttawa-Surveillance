from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from server.controllers.abc import DatabaseDriver


class MongoDriver(DatabaseDriver):
    def __init__(self, app, host, port, user, pssw):
        client = PyMongo(
            app,
            uri=f'mongodb://{host}:{port}/stopUOttawasurveillance',
            username=user,
            password=pssw,
            authSource='admin'
        ).db
        self.testimonials = client.testimonials
        super(MongoDriver, self).__init__(client.signers)

    def add_student(self, data: dict):
        _id = self.database_client.insert_one(data).inserted_id

        return _id

    def add_testimonial(self, data: dict):
        _id = self.testimonials.insert_one(data).inserted_id

        return _id

    def get_testimonials(self):
        items = []
        for item in self.testimonials.find({'verified': True}):
            items.append({
                'name': item['name'],
                'year': item['year'],
                'program': item['program'],
                'testimonial': item['testimonial']
            })
        return items

    def _update(self, identifier: dict, update: dict, client):
        result = client.update_one(
            identifier, {'$set': update},
        )

        return result.modified_count == 1

    def _set_verified(self, id_str: str, client):
        identifier = {'_id': ObjectId(id_str)}
        update = {'verified': True}
        self.update(identifier, update, client)

    def set_student_verified(self, id_str):
        return self._set_verified(id_str, self.database_client)

    def set_testimonial_verified(self, id_str):
        return self._set_verified(id_str, self.testimonials)

    def count_records(self, identifier):
        return self.database_client.count_documents(identifier)

    def delete(self, data):
        self.database_client.delete_one(data)

    def set_all_testimonials_verified(self):
        identifier = {}
        self.testimonials.update_many(identifier, {'$set': {'verified': True}})
