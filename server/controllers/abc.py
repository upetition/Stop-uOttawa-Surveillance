'''Abstract base classes'''


class DatabaseDriver:
    def get(self, key):
        raise NotImplementedError()

    def add(self, key):
        raise NotImplementedError()

    def delete(self, key):
        raise NotImplementedError()

    def update(self, key, update):
        raise NotImplementedError()
