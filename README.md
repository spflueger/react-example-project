# react-example-project
Example react app project

The project includes a python django backend and a react frontend.

## Installation

vscode is highly recommended. python3, node and yarn are required. Note that on some linux distributions the python3 venv module comes in a separate package and also has to be downloaded. It is also highly recommended to use a virtual environment for the python setup.

### backend

Change into the project directory first.

1. Create environment `python3 -m venv pyvenv`
2. Activate the env `. ./pyvenv/bin/activate`
3. Install all requirements `pip install -r dev-requirements.txt`
4. Run db migrations `cd backend && python manage.py makemigrations && python manage.py migrate`

### frontend

Change into the frontend project directory.

1. Install dependencies `yarn install` (use `--immutable` to ensure to use the lockfile dependencies)

## Running

### backend

`cd backend && python manage.py runserver`

### frontend

`cd frontend && yarn start`

## VSCode

This project was setup and includes a dev setup for vscode, hence its recommended to use vscode. It also include a couple of recommend extensions that can be installed during opening of the project.
