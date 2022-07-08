Create Virtual Env and install dependency packages
```
python3 -m venv venv
. venv/bin/activate
pip install -r requirements.txt
```

Run app
```
python3 app.py
flask run -host 0.0.0.0 -p 8080
```

Create requirements.txt
```
pip freeze > requirements.txt
```

Deactive  Virtual Env
```
deactivate
```

[File Structure](https://stackoverflow.com/questions/14415500/common-folder-file-structure-in-flask-app)