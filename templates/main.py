from flask import Flask,render_template

app = Flask(__name__)

app.route("/")
def home():
    return render_template("index.html")

app.route("/my_task")
def my_task():
    return render_template("my_task.html")

app.route("/itax")
def itax():
    return render_template("itax.html")

app.run(debug=True)