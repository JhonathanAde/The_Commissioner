from .db import db

class Commission(db.Model):
  __tablename__= 'commisions'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(130), nullable = False)
  description = db.Column(db.Text(255), nullable = False)
  image_url = db.Column(db.String(255), nullable = False)
  price = db.Column(db.Integer, nullable = True)
  availability = db.Column(db.Boolean, nullable = False)
  user_id = db.Column(db.Integer, nullable = False)