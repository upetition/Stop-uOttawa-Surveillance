from server.controllers.firestore import FirestoreDriver
from cryptography.fernet import Fernet
import hashlib
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

            bname = crypto.decrypt(name)
            bstudent_number = crypto.decrypt(student_number)
            bemail = crypto.decrypt(email)

            hname = hashlib.sha512(bname).digest()
            hnumber = hashlib.sha512(bstudent_number).digest()
            hemail = hashlib.sha512(bemail).digest()

            data['hash_name'] = hname
            data['hash_number'] = hnumber
            data['hash_email'] = hemail
            snapshot.reference.set(data)


if __name__ == "__main__":
    main()
