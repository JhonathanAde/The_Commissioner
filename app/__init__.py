import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager

from .Models import db, User
from .api.user_routes import user_routes
from .api.auth_routes import auth_routes
from .api.commission_routes import commission_routes
from .api.request_routes import request_routes
from .api.ratings_routes import ratings_routes

from .seeds import seed_commands

from .config import Config 

app = Flask(__name__)


login = LoginManager(app)
login.login_view = 'auth.unauthorized'

@login.user_loader
def load_user(id):
  return User.query.get(int(id))

app.cli.add_command(seed_commands)

app.config.from_object(Config)
app.register_blueprint(user_routes, url_prefix='/api/users')
app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(commission_routes, url_prefix='/api/commissions')
app.register_blueprint(request_routes, url_prefix='/api/requests')
app.register_blueprint(ratings_routes, url_prefix='/api/ratings')
db.init_app(app)
Migrate(app, db)

CORS(app) # This is for application security

@app.before_request
def https_redirect():
  if os.environ.get('FLASK_DEBUG') == 'production':
    if request.headers.get('X-Forwarded-Proto') == 'http':
      url = request.url.replace('http://', 'https://', 1)
      code = 301
      return redirect(url, code=code)

@app.after_request
def inject_csrf_token(response):
  response.set_cookie('csrf_token',
                      generate_csrf(),
                      secure=True if os.environ.get(
                        'FLASK_DEBUG') == 'production' else False,
                      samesite='Strict' if os.environ.get(
                        'FLASK_DEBUG') == 'production' else None,
                      httponly=True)
  return response

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
  print("path", path)
  if path == 'favicon.ico':
    return app.send_static_file('favicon.ico')
  return app.send_static_file('index.html')


