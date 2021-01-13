from app.Models import db, Commission

def seed_commissions():

  demo = Commission(
    title='Cool painting', 
    description='how I feel when it rains', 
    image_url='https://duckduckgo.com/?q=rain+illustrations&atb=v235-1&iax=images&ia=images&iai=https%3A%2F%2Fmedia.gettyimages.com%2Fillustrations%2Fillustration-of-children-enjoying-in-rain-illustration-id494330739', 
    price=5.00, 
    requests=5,
    date_created='01-11-21',
    duration='2021-01-25',
    expired=False, 
    user_id=1)

  db.session.add(demo)

  db.session.commit()

def undo_commissions():
  db.session.execute('TRUNCATE commissions;')
  db.session.commit()