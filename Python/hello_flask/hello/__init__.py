from flask import Flask
app = Flask(__name__)

from hello import views
# app.config.from_pyfile('config.py')

# app.run()
if __name__ == "__main__":
    app.run(debug=True,host='0.0.0.0', port=8080)
