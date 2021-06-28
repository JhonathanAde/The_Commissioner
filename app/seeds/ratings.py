from app.Models import db, Rating

def seed_ratings():

  demo_rating1 = Rating(
    rating = None,
    comment = "This is an awesome work of art! Keep it up!",
    user_id = 4,
    artist_id = 1,
    commission_id = 1
  )


  db.session.add(demo_rating1)

  db.session.commit()




def undo_ratings():
  db.session.execute('TRUNCATE Ratings;')
  db.session.commit()