from flask import Flask

app = Flask(__name__)


@app.route('/')
def index():
    return "Index page, ladies!"


@app.route('/hello')
def hello_world():
    return 'Hello World!'


@app.route('/hello/continue')
def hello_world_extension():
    return 'Hello World Extension!'


if __name__ == '__main__':
    app.run()
