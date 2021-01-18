from .db import db
from sqlalchemy.orm import relationship

class Commission(db.Model):
  __tablename__= 'commissions'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(130), nullable = False)
  description = db.Column(db.String(255), nullable = False)
  image_url = db.Column(db.String(255), nullable = False)
  price = db.Column(db.Integer, nullable = True)
  request_amt = db.Column(db.Integer, nullable = False)
  date_created = db.Column(db.Date, nullable = False)
  duration = db.Column(db.Date, nullable = True)
  expired = db.Column(db.Boolean, nullable = True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)

  user = relationship('User', back_populates="commissions")
  requests = relationship('Request', back_populates="commissions")
  
  def to_dict(self):
    return {"commission": {
      "id" : self.id,
      "title": self.title,
      "description": self.description,
      "image_url": self.image_url,
      "price": self.price,
      "request_amt": self.request_amt,
      "date_created": self.date_created,
      "duration": self.duration,
      "expired" : self.expired,
      "user_id" : self.user_id,
      "user": self.user.to_dict(),
      "requests": [request.to_dict() for request in self.requests],
     }
    }