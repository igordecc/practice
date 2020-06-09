from bottle import route, run
from bottle import get, post, request # or route
from bottle import *

USERS = {}


@route('/')
def hello():
    # user render
    hello_page = ""
    for user in USERS.keys():
        hello_page += (f"<li><a href='/{user}'>{user}</a></li>")
    hello_page = f"<ul>{hello_page}</ul>"
    # greetings render
    hello_page = f"<h2>WELLCOME TO HOMEPAGE</h2><br>{hello_page}"
    return hello_page


@get('/login') # or @route('/login')
def login():
    return '''
        <form action="/login" method="post">
            Username: <input name="username" type="text" />
            Password: <input name="password" type="password" />
            <input value="Login" type="submit" />
        </form>
    '''


@route('/<username>')
def route_user(username):
    return f"THERE WILL BE {username} DATA"


@post('/login') # or @route('/login', method='POST')
def do_login():
    username = request.forms.get('username')
    password = request.forms.get('password')

    def check_login(username, password):
        return True

    if check_login(username, password):
        USERS.update({username: password})

        route_user(username)
        return "<p>Your login information was correct.</p>"
    else:
        return "<p>Login failed.</p>"


app.config["UPLOAD_FOLDER"] = "uploads"

@app.route("/sendfile", methods=["POST"])
def send_file():
    fileob = request.files["file2upload"]
    filename = secure_filename(fileob.filename)
    save_path = "{}/{}".format(app.config["UPLOAD_FOLDER"], filename)
    fileob.save(save_path)
    return "successful_upload"

@route("/sendfile", methods=["POST"])
def send_file():
    fileob = request.files["file2upload"]

    def secure_filename(filename:str):
        assert filename is not None
        return filename
    filename = secure_filename(fileob.filename)
    save_path = "{}/{}".format(app.config["UPLOAD_FOLDER"], filename)
    fileob.save(save_path)
    return "successful_upload"

def main():
    run(host='localhost', port=8080, debug=True)


if __name__ == '__main__':
    main()