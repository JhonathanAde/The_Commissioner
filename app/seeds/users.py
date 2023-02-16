from werkzeug.security import generate_password_hash
from app.Models import db, User

def seed_users():

  demo = User(
    username='Demo', 
    email='demo@adesko.com', 
    password='password', 
    location='New Jersey', 
    artist=True, 
    comm_status=True, 
    profile_pic='https://commissioner-profilepics.s3.amazonaws.com/tako_profile.jpeg', 
    first_name='Terrence', 
    last_name='Ntsako', 
    website="https://thetakouniverse.tumblr.com/?fbclid=IwAR0gjig7rGvepvDbZbUmXt_e2cGTbQyuOEiAvZJp1zwy86Oqd5mjnakfSbo", 
    bio="I'm a South African artist that focuses on both traditional and digital media. My previous clients were Warner Bro’s, Sony, Netflix, Bluesky, and Cartoon Network.",
    show_name=False,
    )

  artist1 =  User (
    username = 'JamesJean', 
    email='aritist@jamesjeanart.com', 
    password='Jean1234', 
    location='California', 
    artist=True, 
    comm_status=True, 
    profile_pic='https://commissioner-profilepics.s3.amazonaws.com/JamesJean_profile.jpeg', 
    first_name='James', 
    last_name='Jean', 
    website="http://www.jamesjean.com/", 
    bio="I'm a Taiwanese-American artists that fuses contemporary subjects with aesthetic techniques inspired by traditional Chinese scroll paintings, Japanese woodblock prints, and Renaissance portraiture. ",
    show_name=False,
    )

  artist2 = User(
    username= 'Murakami92', 
    email='artist@murakami.com', 
    password='Muramura24', 
    location='California', 
    artist=True, 
    comm_status=True, 
    profile_pic='https://commissioner-profilepics.s3.amazonaws.com/Murakami_profile.jpeg', 
    first_name='Takashi', 
    last_name='Murakami', 
    website="https://www.instagram.com/takashipom/?hl=en", 
    bio="Im a Japanese artist that fuses traditional Japanese painting with Western influences, the realm of fine art with otaku lifestyle (juvenile culture obsessed with toys, anime, and video games), and commercial retail spaces with museums and other public venues. My work is recognized for its ambition, polish, and fine execution.",
    show_name=False,
    )

  artist3 = User(
    username='KinKinSella', 
    email='artist@eddy.com', 
    password='Edkinsellqwerty', 
    location='New York', 
    artist=True, 
    comm_status=True, 
    profile_pic='https://commissioner-profilepics.s3.amazonaws.com/Kinsella_profile.jpeg', 
    first_name='Ed', 
    last_name='Kinsella', 
    website="https://www.edwardkinsellaillustration.com/", 
    bio="Im an artist that graduated with honors from Ringling School of Art and Design in 2006, and my work has since been commissioned by a variety of prestigious magazines and publishers. I've also shown my fine art and illustration in a number of gallery exhibitions.",
    show_name=False,
    )

  artist4 = User(
    username='ivaTheDragon', 
    email='Iva@snapdragon.com', 
    password='Harlequin2417', 
    location='New Jersey', 
    artist=True, 
    comm_status=True, 
    profile_pic='https://commissioner-profilepics.s3.amazonaws.com/Iwona_profile.jpg', 
    first_name='Iwona', 
    last_name='Skiba', 
    website="https://iwonaskibaart.wixsite.com/iwonaskiba", 
    bio="Im a New Jersey based artist that love to draw fantasy like landscapes and I love drawing plants!",
    show_name=False,
    )

  artist5 = User(
    username='Kainonaut', 
    email='Kanokane24@kaino.com', 
    password='Jet_set284', 
    location='Georgia', 
    artist=True, 
    comm_status=True, 
    profile_pic='https://commissioner-profilepics.s3.amazonaws.com/Kainonaut_profile.jpeg', 
    first_name='Kai', 
    last_name='Valentine', 
    website="https://kainonaut.com/", 
    bio="Illustrator, Gamedev, Guitarist, Spaceman.",
    show_name=False,
    )

  fan1 = User(
    username='SinaSila182', 
    email='sila82@loveart.com', 
    password='Passpass123', 
    location='Pennsylvania', 
    artist=False, 
    comm_status=False, 
    profile_pic=None, 
    first_name='Mia', 
    last_name='Campos', 
    website=None, 
    bio=None,
    show_name=False,
    )

  fan2 = User(
    username='Tetsuo_Otomo', 
    email='tesuo@akira.com', 
    password='Katsuhiro1982', 
    location='Texas', 
    artist=False, 
    comm_status=False, 
    profile_pic=None, 
    first_name='Otomo', 
    last_name='Katsuhiro', 
    website=None, 
    bio=None,
    show_name=False,
    )

  fan3 = User (
    username='TaBLENZA',
    email='inFushor@adesko.com',
    password='uniUni245', 
    location='Maryland',
    artist=False,
    comm_status=False,
    profile_pic='',
    first_name= 'Jane',
    last_name= 'Doe',
    website= '',
    bio= '',
    show_name=False,
  )


  fan4 = User (
    username='nAndoo652',
    email='nani284@adesko.com',
    password='ECEhEZhc', 
    location='Ohio',
    artist=True,
    comm_status=False,
    profile_pic='',
    first_name= 'Nando',
    last_name= 'Peri-peri',
    website='',
    bio='',
    show_name=False,
  )

  fan5 = User (
    username='Shoryouskann25',
    email='ryuxken946@adesko.com',
    password='StreetFighter94', 
    location='California',
    artist=False,
    comm_status=False,
    profile_pic='',
    first_name= 'Ryu',
    last_name='Hoshi',
    website='',
    bio='',
    show_name=False,
  )

  fan6 = User (
    username='StellaTheFan',
    email='Stellasell124@adesko.com',
    password='wqBrKsjQ', 
    location='Wisconsin',
    artist=False,
    comm_status=False,
    profile_pic='',
    first_name= 'Stella',
    last_name= 'Reynolds',
    website= '',
    bio= '',
    show_name=False,
  )


  db.session.add(demo)
  db.session.add(artist1)
  db.session.add(artist2)
  db.session.add(artist3)
  db.session.add(artist4)
  db.session.add(artist5)
  db.session.add(fan1)
  db.session.add(fan2)
  db.session.add(fan3)
  db.session.add(fan4)
  db.session.add(fan5)
  db.session.add(fan6)

  db.session.commit()

def undo_users():
  db.session.execute('TRUNCATE users;')
  db.session.commit()