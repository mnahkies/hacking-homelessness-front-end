from flask import Flask, jsonify
from start import mock_db

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False


@app.route('/')
def hello_world():
    return 'Hello World!'


@app.route('/achievements')
def get_achievement():
    return jsonify(mock_db.get('achievement', dict()))


@app.route('/questions')
def get_question():
    data = mock_db.get('question', dict())
    response = _get_kvp_response(data)
    return jsonify(response)


@app.route('/languages')
def get_language():
    return jsonify(mock_db.get('language', dict()))


@app.route('/lesson/bank')
def get_lesson():
    lessons = mock_db.get('lessons', dict())
    if not lessons:
        return jsonify(dict())

    data = lessons.get("bank", dict())
    response = _get_kvp_response(data)
    return jsonify(response)


def _get_kvp_response(data):
    response = dict()
    for i in range(len(data)):
        response[str(i + 1)] = data[i]
    return response


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=False)
