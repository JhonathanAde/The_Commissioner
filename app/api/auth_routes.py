from flask import Blueprint, jsonify, session, request, url_for
from app.Models import User, db
from app.Forms import LoginForm
from app.Forms import SignUpForm
from app.Forms import BasicInfoForm 
from app.Forms import UserNameForm
from flask_login import current_user, login_user, logout_user, login_required
from werkzeug.utils import secure_filename

import boto3
import mimetypes

auth_routes = Blueprint('auth', __name__)

def validation_errors_to_error_messages(validation_errors):
  """
  Simple function that turns the WTForms validation errors into a simple list
  """

  errorMessages = []
  for field in validation_errors:
    for error in validation_errors[field]:
      errorMessages.append(f"{field} : {error}")
  return errorMessages


@auth_routes.route('/')
def authenticate():
  """
  Authenticates a user.
  """
  if current_user.is_authenticated:
    return current_user.to_dict()
  return {'errors': ['Unauthorized']}, 401


@auth_routes.route('/login', methods=['POST'])
def login():
  """
  Logs a user in
  """
  form = LoginForm()
  print(request.get_json())
  form['csrf_token'].data = request.cookies ['csrf_token']
  if form.validate_on_submit():
    # This adds user to the session and logs them in.
    user = User.query.filter(User.email == form.data['email']).first()
    login_user(user)
    return user.to_dict()
  return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}



@auth_routes.route('/signup', methods=['POST'])
def sign_up():
  """
  Creates a new user and logs them in
  """
  form = SignUpForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    user = User(
      username=form.data['username'],
      email=form.data['email'],
      password=form.data['password'],
      location=form.data['location'],
      artist=form.data['artist'],
    )
    db.session.add(user)
    db.session.commit()
    login_user(user)
    return user.to_dict()
  return {'errors':
    validation_errors_to_error_messages(form.errors)
    }


@auth_routes.route('/basicinfo/<int:id>', methods=['PATCH'])
def edit_basic_info(id):
  form = BasicInfoForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    
    basic_info = User.query.get(id)

    basic_info.first_name = form.data['first_name']
    basic_info.last_name = form.data['last_name']
    basic_info.website = form.data['website']
    basic_info.bio = form.data['bio']

    db.session.add(basic_info)
    db.session.commit()

    return basic_info.to_dict()
  else:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/basicinfo/username/<int:id>', methods=['PATCH'])
def edit_username(id):
  form = UserNameForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():

    user = User.query.get(id)

    user.username = form.data['username']

    db.session.add(user)
    db.session.commit()

    return user.to_dict()
  else:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/basicinfo/profile_pic/<int:id>', methods=['PATCH'])
def edit_profile_pic():
  form = BasicInfoForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  image = ''
  image_path = '' 
  if form.validate_on_submit():
    if request.files:
      image = request.files['image']
      image_name = secure_filename(image.filename)

      mime_type = mimetypes.guess_type(image_name)

      s3 = boto3.resource('s3')
      print(s3)
      uploaded_image = s3.Bucket('commissioner-profilepics').put_object(Key=image_name, Body=image, ACL='public-read', ContentType=mime_type[0])

      image_path = f"https://commissioner-profilepics.s3.amazonaws.com/{image_name}"
    else:
        print("Files weren't sent!!")
    
    basic_info = User.query.get(id)

    basic_info.profile_pic = image_path

    db.session.add(basic_info)
    db.session.commit()

    return basic_info.to_dict()
  else:
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401




# @auth_routes.route('/basicinfo/username/<int:id>', method=['PATCH'])
# def edit_username():
#   form = BasicInfoForm()
#   form['csrf_token'].data = request.cookies['csrf_token']

#   basic_info = User.query.get(id)
#   basic_info.username =




@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401