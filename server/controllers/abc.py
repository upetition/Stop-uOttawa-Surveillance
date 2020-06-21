'''Abstract base classes'''


class DatabaseDriver:
    def __init__(self, database_client=None):
        self.client = database_client

    def add(self, data):
        raise NotImplementedError()

    def delete(self, data):
        raise NotImplementedError()

    def update(self, identifier, update):
        raise NotImplementedError()

    def set_verified(self, id_str):
        raise NotImplementedError()

    def count_records(self, identifier):
        raise NotImplementedError()
