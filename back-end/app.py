from flask import Flask, abort, request

app = Flask(__name__)

database = {}


@app.route("/")
def home():
    return "Hello World"


@app.route("/echo", methods=["POST"])
def hello():
    print(request.data)
    return "olá, Tera!"


@app.route("/user", methods=["POST"])
def create_user():
    data = request.json
    name = data.pop("nome")
    database[name] = data
    return "olá, Tera!"


@app.route("/user/<string:name>", methods=["GET"])
def read_user(name):
    if name not in database:
        abort(404)

    data["nome"] = name
    data = database[name]
    return data


@app.route("/user/<string:name>", methods=["PUT"])
def update_user(name):
    if name not in database:
        abort(404)

    data = request.json
    database[name] = data
    return data


@app.route("/user/<string:name>", methods=["DELETE"])
def delete_user(name):
    if name not in database:
        abort(404)

    del database[name]
    return "ok", 200


if __name__ == "__main__":  # se esse arquivo estiver sendo executado diretamente
    app.run(debug=True)
