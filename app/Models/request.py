from .db import db


class Request(db.Model):
  __tablename__ = 'requests'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(130), nullable = False)
  details = db.Column(db.Text, nullable = False)
  references = db.Column(db.String(255), nullable = True)
  urgency = db.Column(db.String(130), nullable = False)
  commission_id = db.Column(db.Integer, db.ForeignKey('commission.id'), nullable = False)
  price = db.Column(db.Integer, nullable = False)
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
  buyer_id = db.Column(db.Integer, nullable = False)
  image_url = db.Column(db.String, nullable = True)