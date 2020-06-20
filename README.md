## Status
[![python](https://github.com/DudeRandom21/Stop-uOttawa-Surveillance/workflows/python/badge.svg)](https://github.com/DudeRandom21/Stop-uOttawa-Surveillance/actions?query=workflow%3Apython)

## Getting Started

Run the installation script with the optional hooks

```bash
$ ./install --hooks
```

Make sure you add `stopuottawa.local` to your `/etc/hosts` file so it routes you correctly.

## Running with docker
To run the full application with docker, you must start the frontend, backend, and router containers.

First, copy the `.flaskenv.example` and `.env.example` files to `.flaskenv` and `.env` respectively. Set the variables in those files as you need them.

> **NOTE** The `PORT` variable needs to match the port that is being proxied for the frontend server. Similarly, the `FLASK_RUN_PORT` variable needs to match for the port that is being proxied for the backend server

Next, build the containers with docker. You can build the containers individually or use the Make commands that have been added for this

```bash
$ docker-compose -f docker/docker-compose.yml build  # builds all of them
$ docker-compose -f docker/docker-compose.yml build frontend backend router # same as above
$ docker-compose -f docker/docker-compose.yml build frontend # build just the frontend container
```

Finally, run the containers. It is recommended if you are debugging the Python application that you start up the backend container individually with `docker-compose -f docker/docker-compose.yml run frontend` so any breakpoints in the code allow you to interact with it on the terminal.

```bash
$ docker-compose -f docker/docker-compose.yml up frontend router # Either run in a different terminal or run with -d
$ docker-compose -f docker/docker-compose.yml run backend
```

Finally, open your browser and go to `stopuottawa.local` to see the website!

## Next Steps


### Adding a New Page

1. Create a folder in `/src/components` with your react components.
2. Add a route for your page to `/src/App.js`.
3. Add a button to the navigation bar in `/src/components/NavBar/index.js`.


## File Structure

The front-end is based on [create-react-app](https://github.com/facebook/create-react-app).

The back-end is based on [Flask](https://github.com/pallets/flask).


## Additional Documentation


- React - https://reactjs.org/
- React Router - https://reacttraining.com/react-router/

- Bootstrap CSS - https://getbootstrap.com/
- Flask - http://flask.pocoo.org/


  This project was created using [Microsoft Web Template Studio](https://github.com/Microsoft/WebTemplateStudio).
