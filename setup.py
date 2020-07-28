from setuptools import setup

setup(
    name="stop_uottawa_surveillance_backend",
    packages=['server', 'server.controllers', 'server.strings'],
    version='0.9',
    install_requires=[
        'flask',
        'python-dotenv',
        'gunicorn',
        'flask-pymongo',
        'google-cloud-firestore',
        'cryptography',
        'flask-json-schema',
        'beautifulsoup4',
        'pydeepmerge',
    ],
)
