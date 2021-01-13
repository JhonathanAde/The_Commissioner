from .db import db
from sqlalchemy.orm import relationship

class Commission(db.Model):
  __tablename__= 'commissions'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(130), nullable = False)
  description = db.Column(db.String(255), nullable = False)
  image_url = db.Column(db.String(255), nullable = False)
  price = db.Column(db.Integer, nullable = True)
  date_created = db.Column(db.Date, nullable = False)
  expired = db.Column(db.Boolean, nullable = False)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

  user = relationship('User')

  def to_dict(self):
    return{
      "id" : self.id,
      "title": self.title,
      "description": self.description,
      "image": self.image_url,
      "price": self.price,
      "date_created": self.date_created,
      "expired" : self.expired,
      "user_id" : self.user_id,
      "user": self.user.to_dict()
    }