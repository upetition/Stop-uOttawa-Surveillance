from server.controllers.firestore import FirestoreDriver
from server.utils import int_to_bytes
from cryptography.fernet import Fernet
import os


def main():
    db = FirestoreDriver()
    client = db.database_client
    crypto = Fernet(os.environ.get('SECRET_KEY').encode('utf-8'))

    documents = client.stream()

    for snapshot in documents:
        data = snapshot.to_dict()
        if 'verified' in data:  # not metadata
            name = data.get('name')
            student_number = data.get('student_number')
            email = data.get('email')

            bname = name.encode('utf-8')
            bemail = email.encode('utf-8')
            bstudent_number = int_to_bytes(student_number)

            data['name'] = crypto.encrypt(bname)
            data['student_number'] = crypto.encrypt(bstudent_number)
            data['email'] = crypto.encrypt(bemail)
            snapshot.reference.set(data)


if __name__ == "__main__":
    main()
