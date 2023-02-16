from flask import Blueprint, jsonify
from flask_login import login_required
from app.Models import User

user_routes = Blueprint('user', __name__)


@user_routes.route('/')
@login_required
def users():
  users = User.query.all()
  return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
  user = User.query.get(id)
  return user.to_dict()

@user_routes.route('/getuser')
def getUsers():
  users = User.query.all()
  return [user.to_safe_dict() for user in users]

@user_routes.route('/user/<int:id>')
def usersById(id):
  users = User.query.get(id)

  print(users)
  return {"userId": users.id,"username": users.username, "firstName": users.first_name, "lastName": users.last_name, "website": users.website, 
  "bio": users.bio, 
  "profilePic": users.profile_pic, "location": users.location,
  "occupation": users.occupation,
  "showName": users.show_name,
   }