from setuptools import setup

setup(
    name="stop_uottawa_survaillance_backend",
    packages=['server'],
    version='0.1.dev0',
    install_requires=['flask', 'python-dotenv', 'gunicorn'],
)
