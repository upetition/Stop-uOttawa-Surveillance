from setuptools import setup, find_packages

setup(
    name="stop_uottawa_survaillance_backend",
    packages=find_packages(),
    version='0.1',
    install_requires=['flask', 'python-dotenv', 'gunicorn'],
)
