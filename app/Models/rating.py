from .db import db

class Rating(db.Model):
  __tablename__ = 'ratings'

  id = db.Column(db.Integer, primary_key = True)
  rating = db.Column(db.Integer, nullable = True)
  comment = db.Column(db.String(255), nullable = True)
  buyer_id = db.Column(db.Integer,  nullable = False)
  artist_id = db.Column(db.Integer, nullable = False)

  def to_dict(self):
    return {
      "id": self.id,
      "rating": self.rating,
      "comment": self.comment,
      "buyer_id": self.buyer_id,
      "artist_id": self.artist_id
    }