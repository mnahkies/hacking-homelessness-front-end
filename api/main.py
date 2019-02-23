from flask import Flask

from lesson.views import lesson

app = Flask(__name__)
app.register_blueprint(lesson)


@app.route('/')
def hello_world():
    return 'Hello World!'


#
# @app.route('/user/<username>')
# def get_user_profile(username: str) -> json:
#     pass
#
# @app.route('/lesson')
# def get_lessons() -> json:
#     return jsonify(["1", "2", "3"])
#
# @app.route('/languages')
# def get_languages() -> json:
#

import json
from flask import Blueprint, app

from lesson.model.language import all

lesson = Blueprint('lesson', __name__)


@lesson.route("/")
def get_lesson():
    data = all()
    response = lesson.response_class(
        response=json.dumps(data),
        status=200,
        mimetype='application/json'
    )
    return response


if __name__ == '__main__':
    app.run(debug=True)
