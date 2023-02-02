from .db import db
from sqlalchemy.orm import relationship
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False)
  location = db.Column(db.String(40), nullable = True)
  artist = db.Column(db.Boolean, nullable = False)
  comm_status = db.Column(db.Boolean, nullable = True)
  profile_pic = db.Column(db.String(255), nullable = True)
  first_name = db.Column(db.String(130), nullable = True)
  last_name = db.Column(db.String(130), nullable = True)
  website = db.Column(db.String(130), nullable = True)
  bio = db.Column(db.String(500), nullable= True)

  commissions = db.relationship('Commission', back_populates='user', order_by='asc(Commission.id)')
  requests = db.relationship('Request', back_populates='users')
  ratings = db.relationship('Rating', back_populates='user', order_by='asc(Rating.user_id)')

  @property
  def password(self):
    return self.hashed_password
  
  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)

  def check_password(self, password):
    return check_password_hash(self.password, password)

  def to_dict(self):
    return {
      'id': self.id,
      'username': self.username,
      'email': self.email,
      'location': self.location,
      'artist': self.artist,
      'comm_status': self.comm_status,
      'profile_pic': self.profile_pic,
      'first_name': self.first_name,
      'last_name': self.last_name,
      'website': self.website,
      'bio': self.bio,
    }

  def to_safe_dict(self):
    return {
      'username': self.username,
      'profile_pic': self.profile_pic,
      'first_name': self.first_name,
      'last_name': self.last_name,
    }
