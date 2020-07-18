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
        ).db.signers
        super(MongoDriver, self).__init__(client)

    def add_student(self, data: dict):
        _id = self.database_client.insert_one(data).inserted_id

        return _id

    def add_testimonial(self, data: dict):
        _id = self.database_client.insert_one(data).inserted_id

        return _id

    def update(self, identifier: dict, update: dict):
        result = self.database_client.update_one(
            identifier, {'$set': update},
        )

        return result.modified_count == 1

    def _set_verified(self, id_str: str):
        identifier = {'_id': ObjectId(id_str)}
        update = {'verified': True}
        self.update(identifier, update)

    def set_student_verified(self, id_str):
        return self._set_verified(id_str)

    def set_testimonial_verified(self, id_str):
        return self._set_verified(id_str)

    def count_records(self, identifier):
        return self.database_client.count_documents(identifier)

    def delete(self, data):
        self.database_client.delete_one(data)
