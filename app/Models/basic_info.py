# from .db import db
# from sqlalchemy.orm import relationship

# class BasicInfo (db.Model):
#   __tablename__ = 'basic_info'

#   id = db.Column(db.Integer, primary_key = True)
#   profile_pic = db.Column(db.String(255), nullable = True)
#   first_name = db.Column(db.String(130), nullable = True)
#   last_name = db.Column(db.String(130), nullable = True)
#   website = db.Column(db.String(130), nullable = True)
#   bio = db.Column(db.Text(255), nullable= True)
#   user_id = db.Column(db.Integer, ForeignKey('user.id'), nullable = False)

#   user = relationship("User", backref=backref("basic_info", uselist=False))
#   def to_dict(self):
#     return {
#       "id": self.id,
#       "profile_pic": self.profile_pic,
#       "first_name" : self.first_name,
#       "last_name" : self.last_name,
#       "website" : self.website,
#       "bio" : self.bio,
#       "user": self.user,
#     }