from .db import db
from sqlalchemy.orm import relationship


class Request(db.Model):
  __tablename__ = 'requests'

  id = db.Column(db.Integer, primary_key = True)
  title = db.Column(db.String(130), nullable = False)
  details = db.Column(db.Text, nullable = False)
  references = db.Column(db.String(255), nullable = True)
  urgency = db.Column(db.Boolean(130), nullable = False)
  date = db.Column(db.Date, nullable = True)
  commission_id = db.Column(db.Integer, db.ForeignKey('commissions.id'), nullable = True)
  price = db.Column(db.Integer, nullable = True)
  user_id = db.Column(db.Integer, nullable = False)
  buyer_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = False)
  image_url = db.Column(db.String, nullable = False)

  commissions = relationship('Commission', back_populates="requests", order_by='asc(Request.id)')
  users = relationship('User', back_populates='requests', order_by='asc(User.id)')

  def to_dict(self):
    return {
      "id" : self.id,
      "title": self.title,
      "details": self.details,
      "references": self.references,
      "urgency": self.urgency,
      "date": self.date,
      "commission_id": self.commission_id,
      "price": self.price,
      "user_id": self.user_id,
      "buyer_id": self.buyer_id,
      "image_url": self.image_url,
      "users": self.users.to_dict(),
      }