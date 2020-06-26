from server.controllers.firestore import FirestoreDriver
import json


def main():
    db = FirestoreDriver()
    result = {}
    client = db.database_client
    documents = client.stream()
    for snapshot in documents:
        result[snapshot.id] = snapshot.to_dict()

    with open('db_backup.json', 'r') as f:
        json.dump(result, f)


if __name__ == "__main__":
    main()
