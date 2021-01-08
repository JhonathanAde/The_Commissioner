from .db import db

class Rating(db.Model):
  __tablename__ = 'ratings'

  id = db.Column(db.Integer, primary_key = True)
  rating = db.Column(db.Integer, nullable = True)
  comment = db.Column(db.Text(255), nullable = True)
  buyer_id = db.Column(db.Integer, nullable = False)
  artist_id = db.Column(db.Integer, nullable = False)