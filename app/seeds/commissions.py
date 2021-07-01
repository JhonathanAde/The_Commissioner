from app.Models import db, Commission

def seed_commissions():
 
  demo_comm1 = Commission(
    title='B&W Characters (digital)', 
    description='Black and white character commissions are open. I will do OC’s or any character in black and white (digitally only)', 
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/tako_1.jpeg', 
    price=40, 
    request_amt=10, 
    date_created='2020-12-11', 
    duration='2021-01-29', 
    expired=False, 
    user_id=1)

  demo_comm2 = Commission(
    title='Tribal Characters (colored)', 
    description='Colored tribal character commissions are open!! Characters will be colored digitally and I will also add special masks to them.', 
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/tako_2.jpeg', 
    price=60, 
    request_amt=5, 
    date_created='2021-01-12', 
    duration='2021-03-25', 
    expired=False, 
    user_id=1)

  demo_comm3 = Commission(
    title='Celebrity Bust Portraits!', 
    description='Want a portrait of your favorite celebrity? Here I’m opening commissions for colored digital paintings of your favorite celebrities!(busts only!)', 
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/tako_3.jpeg', 
    price=60, 
    request_amt=15, 
    date_created='2021-01-15', 
    duration='2021-04-01', 
    expired=False, user_id=1)

  artist1_comm1 = Commission(
    title='Floral Paintings Style 1', 
    description='Floral painted characters open for commissions!! These commissions will be painted in acrylic.', 
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/James_jean1.jpg', 
    price=2500, 
    request_amt=5, 
    date_created='2021-01-05', 
    duration='2021-01-24', 
    expired=False, 
    user_id=2)

  artist1_comm2 = Commission(
    title='Mother With Child', 
    description='I’m taking requests for paintings of mothers and their new born in the style of the image shown. All work is done in acrylic.', 
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/James_jean2.jpg', 
    price=2800, 
    request_amt=10, 
    date_created='2020-11-18', 
    duration='2021-02-14', 
    expired=False, 
    user_id=2)

  artist1_comm3 = Commission(
    title='B&W Mystic Figures', 
    description='Black and white figure paintings available for commission. All work done in acrylic.', 
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/James_jean5.jpg', 
    price=2500, 
    request_amt=5, 
    date_created='2020-10-15', 
    duration='2021-03-01', 
    expired=False, 
    user_id=2)
  
  artist2_comm1 = Commission ( 
    title='Chaos', 
    description='A painting in the style of my famous work “Chaos”.',
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/', 
    price= 25000, 
    request_amt= 5,
    date_created='2021-06-01', 
    duration='2021-06-24',
    expired=False, 
    user_id=3
  )

  artist2_comm2 = Commission (
    title='Francis Bacon',
    description='I’m doing portrait paintings in the style of my famous work “Francis Bacon”.', 
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/',
    price= 50000,
    request_amt= 10,
    date_created='2021-03-05', 
    duration='2021-08-15', 
    expired=False,
    user_id=3
  )

  artist2_comm3 = Commission (
    title='Arhat Cycle Part 2', 
    description='Paintings of monks in the style of my “Arhat Cycle part 2”.',
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/', 
    price= 5,
    request_amt= 60000,
    date_created='2021-04-19',
    duration='2021-07-12', 
    expired=False, 
    user_id=3
  )

  artist3_comm1 = Commission ( 
    title='The Shining',
    description='I’m doing portraits in the style of Stephen King’s “The Shining”. Please include any specific details in your request.',
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/', 
    price= 500,
    request_amt= 600,
    date_created='2021-05-09',
    duration='2021-07-22', 
    expired=False,
    user_id=4
  )

  artist3_comm2 = Commission ( 
    title='The Conversation',
    description='This is a limited edition work of art and there are only 5 prints left.', 
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/',
    price= 1000,
    request_amt= 5,
    date_created='2021-06-05', 
    duration='2021-07-15', 
    expired=False, 
    user_id=4
  )

  artist3_comm3 = Commission (
    title='Dark Lords', 
    description='Im doing a series of Dark Lord illustrations. All illustrations will be in black and white.',
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/',
    price= 300, 
    request_amt= 150,
    date_created='2020-01-24', 
    duration='2021-08-09', 
    expired=False, 
    user_id=4
  )

  artist4_comm1 = Commission ( 
    title='Loreland spread', 
    description='Explore Loreland with your own characters! I’ll draw and paint your character in my Loreland landscapes.', 
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/',
    price= 150, 
    request_amt= 5,
    date_created='2021-04-16', 
    duration='2021-05-15', 
    expired=True,
    user_id=5
  )

  artist4_comm2 = Commission ( 
    title='MerMay',
    description='It is MerMay and I will be taking requests for mermaid illustrations! All llustrations will be in color.', 
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/', 
    price= 60,
    request_amt= 10, 
    date_created='2020-03-15', 
    duration='2020-08-05', 
    expired=True,
    user_id=5
  )

  artist4_comm3 = Commission (
    title='Potion Bottles', 
    description='I will design a set of potion bottles as a print. All prints will be in color.',
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/',
    price= 30, 
    request_amt= 15, 
    date_created='2021-01-29', 
    duration='2021-07-27',
    expired=False, 
    user_id=5
  )

  artist5_comm1 = Commission(
    title='Jet-Set-Commission', 
    description='Im taking commission requests of your favorite Jet Set Radio charatcers!! All work will be done digitally for print', 
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/kainonaut_1.jpg', 
    price=40, 
    request_amt=15, 
    date_created='2020-12-25', 
    duration='2021-05-01', 
    expired=False, user_id=6)

  artist5_comm2 = Commission(
    title='Metroid Prints', 
    description='Get an awesome digital painting from yours truly! All prints are done digitally.', 
    image_url= 'https://commissioner-commissions.s3.amazonaws.com/kainonaut_2.jpg', 
    price=50, 
    request_amt=8, 
    date_created='2021-01-19', 
    duration='2021-06-01',
    expired=False, 
    user_id=6)

  artist5_comm3 = Commission(
    title='One Piece Print', 
    description='I’m accepting any requests of your favorite One Piece charatcers for prints like the image shown. All prints are done digitally.', 
    image_url='https://commissioner-commissions.s3.amazonaws.com/kainonaut_4.jpeg', 
    price=60, 
    request_amt=10, 
    date_created='2021-01-01',
    duration='2021-04-19', 
    expired=False, 
    user_id=6)





  db.session.add(demo_comm1)
  db.session.add(demo_comm2)
  db.session.add(demo_comm3)
  db.session.add(artist1_comm1)
  db.session.add(artist1_comm2)
  db.session.add(artist1_comm3)
  db.session.add(artist2_comm1)
  db.session.add(artist2_comm2)
  db.session.add(artist2_comm3)
  db.session.add(artist3_comm1)
  db.session.add(artist3_comm2)
  db.session.add(artist3_comm3)
  db.session.add(artist4_comm1)
  db.session.add(artist4_comm2)
  db.session.add(artist4_comm3)
  db.session.add(artist5_comm1)
  db.session.add(artist5_comm2)
  db.session.add(artist5_comm3)

  db.session.commit()

def undo_commissions():
  db.session.execute('TRUNCATE commissions;')
  db.session.commit()