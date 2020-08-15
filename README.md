[![ci](https://github.com/FabienArcellier/blueprint-webapp-flask/actions/workflows/main.yml/badge.svg)](https://github.com/FabienArcellier/blueprint-webapp-flask/actions/workflows/main.yml)

## Motivation

blueprint to implement a flask application and use frontend a framework as bootstrap. This application may be used to:

* build MVC application as multipage web application using bootstrap as css framework
* build API application
* build application using scss and javascript framework build with webpack
* watch and compile python and javascript framework when they are changed in development mode
* run in production with gunicorn
* ...

## Getting started

### System requirements

The following requirements has to be setup on your host before running the command
from this repository.

* `python 3.8` at least
* [pipenv](https://pipenv.pypa.io/en/latest/)
* `node` and `npm`

### Install the python dependencies

```bash
make install_requirements_dev
```

## The latest version

You can find the latest version to ...

```bash
git clone git@github.com:FabienArcellier/blueprint-webapp-flask.git
```

## Usage in production mode

This blueprint use ``gunicorn`` as wsgi server for production configuration.
The command is set in the Procfile to be available on PaaS environment as ``Heroku`` or ``Scalingo``.

```bash
make prod
```

## Usage in development mode

Flask internal webserver is used to host the application. It will :

```bash
* watch changes on python files and reload server automatically
* watch changes on javascript and scss files and regenerate assets automatically

```python
make start
```

## Contributing

### Install development environment

Use make to instanciate a python virtual environment in ./venv3 and install the
python dependencies.

```bash
make install_requirements_dev
```

### Freeze the library requirements

If you want to freeze all the packages, use
this procedure

```bash
make freeze_requirements
```

### Activate the python environment

When you setup the requirements, a `venv3` directory on python 3 is created.
To activate the venv, you have to execute /

```bash
make activate
```

### Run the linter and the unit tests

Before commit or send a pull request, you have to execute pylint to check the syntax
of your code and run the unit tests to validate the behavior.

```bash
make ci
```

## Contributors

* Fabien Arcellier
*

## License

MIT License

Copyright (c) 2021 Fabien Arcellier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
