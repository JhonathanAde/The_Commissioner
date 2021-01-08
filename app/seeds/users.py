from werkzeug.security import generate_password_hash
from app.Models import db, User

def seed_users():

  demo = User(username='Demo', email='demo@adesko.com', password='password', location='NJ', artist=True, comm_status=True)

  db.session.add(demo)

  db.session.commit()

def undo_users():
  db.session.execute('TRUNCATE users;')
  db.session.commit()