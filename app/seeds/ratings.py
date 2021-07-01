from app.Models import db, Rating

def seed_ratings():

  # DEMO
  demo_rating1 = Rating(
    rating = 4,
    comment = "This is an awesome work of art! Keep it up!",
    user_id = 4,
    artist_id = 1,
    commission_id = 1
  )

  demo_rating2 = Rating (
    rating = 4,
    comment = "Yo, the work I commissioned from this artist was amazing! I would definitely get work from him again",
    user_id = 6,
    artist_id = 1,
    commission_id = 1
  )

  demo_rating3 = Rating (
    rating = 3,
    comment = "Great work, but the drawing came out a little smaller than I expected..",
    user_id = 7,
    artist_id = 1,
    commission_id = 1
  )

  demo_rating4 = Rating (
    rating = 5,
    comment = "Absolutely fantastic! Definitely one of my most favorite commissioners out there!",
    user_id = 3,
    artist_id = 1,
    commission_id = 1
  )

  # James Jean
  JamesJean_rating1 = Rating (
    rating = 5,
    comment = "Everything about James Jean’s work is amazing! Im absolutely honored to have one of his works, now at my office. ",
    user_id = 8,
    artist_id = 2,
    commission_id = 4
  )

  JamesJean_rating2 = Rating (
    rating = 4,
    comment = "I absolutely loved getting a commission done by James Jean. He is an absolute beast at his work and would definitely recommend his work to everyone seeking an amazing commission.",
    user_id = 3,
    artist_id = 2,
    commission_id = 4
  )

  JamesJean_rating3 = Rating (
    rating = 4,
    comment = "The colors! I really love James Jean’s color choices. Must commission from him again!",
    user_id = 4,
    artist_id = 2,
    commission_id = 4
  )

  JamesJean_rating4 = Rating (
    rating = 2,
    comment = "Wasn’t really a fan of how abstract the commission was. I just wanted a regular picture of Batman… I’m just a hater.",
    user_id = 7,
    artist_id = 2,
    commission_id = 4
  )


  JamesJean_rating5 = Rating (
    rating = 4,
    comment = "As a soon to be mother I really loved how this commission came out!",
    user_id = 5,
    artist_id = 2,
    commission_id = 5
  )



  db.session.add(demo_rating1)
  db.session.add(demo_rating2)
  db.session.add(demo_rating3)
  db.session.add(demo_rating4)
  db.session.add(JamesJean_rating1)
  db.session.add(JamesJean_rating2)
  db.session.add(JamesJean_rating3)
  db.session.add(JamesJean_rating4)
  db.session.add(JamesJean_rating5)

  db.session.commit()




def undo_ratings():
  db.session.execute('TRUNCATE Ratings;')
  db.session.commit()