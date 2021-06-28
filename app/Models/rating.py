from .db import db
from sqlalchemy.orm import relationship

class Rating(db.Model):
  __tablename__ = 'ratings'

  id = db.Column(db.Integer, primary_key = True)
  rating = db.Column(db.Integer, nullable = True)
  comment = db.Column(db.String(255), nullable = True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'),  nullable = False)
  artist_id = db.Column(db.Integer, nullable = False)
  commission_id = db.Column(db.Integer, nullable = False)

  user = relationship('User', back_populates="ratings")

  def to_dict(self):
    return {
      "id": self.id,
      "rating": self.rating,
      "comment": self.comment,
      "user_id": self.user_id,
      "artist_id": self.artist_id,
      "commission_id": self.commission_id,
      "user": self.user.to_dict()
    }