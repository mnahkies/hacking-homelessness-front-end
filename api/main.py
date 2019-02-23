from flask import Flask, jsonify
from . import mock_db

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
    response = dict()
    for i in range(len(data)):
        response[str(i+1)] = data[i]
    return jsonify(response)


@app.route('/languages')
def get_language():
    return jsonify(mock_db.get('language', dict()))


if __name__ == '__main__':
    app.run(debug=True)
