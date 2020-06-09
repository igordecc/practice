from flask import *
import flask
import os
import uuid

app = flask.Flask(__name__)


def secure_filename(filename: str) -> str:
    if not filename:
        return str(uuid.uuid4())
    filename = os.path.split(filename)[-1]
    return filename


@app.route("/sendfile", methods=["POST"])
def send_file():
    path = app.config['UPLOAD_FOLDER']
    fileob = request.files["file2upload"]
    filename = secure_filename(fileob.filename)
    fileob.save(os.path.join(path, filename))
    return ""


@app.route("/filenames", methods=["GET"])
def get_filenames():
    path = app.config['UPLOAD_FOLDER']
    filenames = sorted(
        os.listdir(path),
        key=lambda f: os.stat(os.path.join(path, f)).st_atime
    )
    return {
        "filenames": filenames
    }



if __name__ == '__main__':
    path = "uploads/"
    if not os.path.exists(path):
        os.mkdir(path)
    app.config["UPLOAD_FOLDER"] = path

    app.run()