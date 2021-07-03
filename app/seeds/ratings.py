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

  demo_work2_rating1 = Rating (
    rating = 3,
    comment = "I really like the characters that this artist makes, but I wasn’t really satisfied with how he made my OCs (original characters)",
    user_id = 12,
    artist_id = 1 ,
    commission_id = 2,
)

  demo_work2_rating2 = Rating (
    rating = 4,
    comment = "I love the unique take that this artist had on my characters. He’s definitely very unique and creative! ",
    user_id =7,
    artist_id = 1 ,
    commission_id = 2,
  )

  demo_work2_rating3 = Rating (
    rating = 4,
    comment = "Awesome work, I love it.",
    user_id = 8,
    artist_id = 1 ,
    commission_id = 2,
  )

  demo_work3_rating1 = Rating (
    rating = 5,
    comment = "Yesss! Thanks for blessing me with this Queen Bee commission – I love it!!",
    user_id =9,
    artist_id = 1 ,
    commission_id = 3,
  )

  demo_work3_rating2 = Rating (
    rating = 4,
    comment = "I requested a commission of Kanye from this artist and it came out amazing! I definitely recommend commissioning from him.",
    user_id = 11,
    artist_id = 1,
    commission_id = 3,
  )

  demo_work3_rating3 = Rating (
    rating = 4,
    comment = "Awesome commission, keep it up!",
    user_id = 9,
    artist_id = 1 ,
    commission_id = 3,
  )

  #JamesJean

  Jamesjean_work1_rating1 = Rating (
    rating = 5,
    comment = "You absolutely can never go wrong getting work from the one of a kind James Jean. My wife love the commission he made for us. Excellent work!",
    user_id = 7,
    artist_id = 2,
    commission_id = 4,
  )

  Jamesjean_work1_rating2= Rating (
    rating = 5,
    comment = "The colors for the commission I requested came out beautifully and I sits perfectly on my wall =).",
    user_id = 10,
    artist_id = 2,
    commission_id = 4,
  )

  Jamesjean_work1_rating3= Rating (
    rating = 3,
    comment = "This commission was great and all, but it was a little too pricey for what I got.",
    user_id = 12,
    artist_id = 2,
    commission_id = 4,
  )


  Jamesjean_work2_rating1 = Rating (
    rating = 5,
    comment = "Everything about James Jean’s work is amazing! Im absolutely honored to have one of his works, now at my office. ",
    user_id = 8,
    artist_id = 2,
    commission_id = 5
  )

  Jamesjean_work2_rating2 = Rating (
    rating = 4,
    comment = "I absolutely loved getting a commission done by James Jean. He is an absolute beast at his work and would definitely recommend his work to everyone seeking an amazing commission.",
    user_id = 3,
    artist_id = 2,
    commission_id = 5
  )

  Jamesjean_work2_rating3 = Rating (
    rating = 4,
    comment = "The colors! I really love James Jean’s color choices. Must commission from him again!",
    user_id = 4,
    artist_id = 2,
    commission_id = 5
  )

  Jamesjean_work2_rating4 = Rating (
    rating = 2,
    comment = "Wasn’t really a fan of how abstract the commission was. I just wanted a regular picture of Batman… I’m just a hater.",
    user_id = 7,
    artist_id = 2,
    commission_id = 5
  )

  Jamesjean_work2_rating5 = Rating (
    rating = 4,
    comment = "As a soon to be mother I really loved how this commission came out!",
    user_id = 5,
    artist_id = 2,
    commission_id = 5
  )

  Jamesjean_work3_rating1 = Rating (
    rating = 4,
    comment =  "I love how James Jean creates these very beautiful abstract characters!",
    user_id = 8,
    artist_id = 2,
    commission_id = 6,
  )

  Jamesjean_work3_rating2= Rating (
    rating = 4,
    comment = "This work is great! I would love to get a commission from him again!",
    user_id = 10,
    artist_id = 2,
    commission_id = 6,
  )

  Jamesjean_work3_rating3= Rating (
    rating = 5,
    comment = "Superb! This was a gift to my brother and I cant stop looking at it!",
    user_id = 7,
    artist_id = 2,
    commission_id  = 6,
  )

  #Murakami

  Murakami_work1_rating1 = Rating (
    rating = 4,
    comment = "I think Murakami always has dope work, but this one yo, phenomenal! I will definitely get a commission from him again",
    user_id = 11,
    artist_id = 3,
    commission_id = 7,
  )

  Murakami_work1_rating2= Rating (
    rating = 3,
    comment = "This commission is really cool to have, but there’s too much going on for me.",
    user_id = 12,
    artist_id = 3,
    commission_id = 7,
  )

  Murakami_work1_rating3= Rating (
    rating = 4,
    comment = "This was really cool to receive as a commission! The chaos is real!",
    user_id =8,
    artist_id = 3,
    commission_id = 7,
  )

  Murakami_work2_rating1 = Rating (
    rating = 4,
    comment = "I’ve been wanting a work from Murakami for years. I’m so glad I was finally able to get this commission from him.",
    user_id = 2,
    artist_id = 3,
    commission_id = 8,
  )

  Murakami_work2_rating2= Rating (
    rating =2,
    comment = "The portrait that I got for my girlfriend was a too abstract and she said I spent too much money.. We decided to split… Thanks Murakami.",
    user_id = 11,
    artist_id = 3,
    commission_id = 8,
  )

  Murakami_work2_rating3= Rating (
    rating =5,
    comment = "Insane! Nothing beats this commission from Murakami!",
    user_id = 4,
    artist_id = 3,
    commission_id = 8,
  )

  Murakami_work3_rating1 = Rating (
    rating = 5,
    comment = "The way that Murakami creates his monks is  so cool. I would highly recommend getting one made from this master.",
    user_id = 4,
    artist_id = 3,
    commission_id = 9,
  )

  Murakami_work3_rating2= Rating (
    rating = 4,
    comment = "This definitely was an interesting take on how monks are designed. Great work Murakami!",
    user_id = 9,
    artist_id = 3,
    commission_id = 9,
  )

  Murakami_work3_rating3= Rating (
    rating = 5,
    comment = "The materials used to make this commission are amazing! Never have I seen such a work made with platinum and gold leaf. Definitely worth every penny!",
    user_id = 12,
    artist_id = 3,
    commission_id = 9,
  )

#KinKinSella

  KinKinsella_work1_rating1 = Rating (
    rating = 4,
    comment = "I love the dark and grainy illustrations that Knisella creates!",
    user_id = 3,
    artist_id = 4,
    commission_id = 10,
  )

  KinKinsella_work1_rating2 = Rating (
    rating = 4,
    comment = "This is a must buy for someone who is a fan of Stephen King’s book ‘The Shining’.",
    user_id = 1,
    artist_id = 4,
    commission_id = 10,
  )

  #KinKinsella

  KinKinsella_work1_rating3 = Rating (
    rating = 5,
    comment = "BIG FAN OF THE SHINING HERE, EXCELLENT COMMISSION!!!",
    user_id = 6,
    artist_id = 4,
    commission_id = 10,
  )

  KinKinsella_work2_rating1 = Rating (
    rating = 5,
    comment = "Just got this work commissioned by Kinsella the other day for my café and I love it! The conversation definitely brings a vintage vibe.",
    user_id = 12,
    artist_id = 4,
    commission_id = 11,
  )

  KinKinsella_work2_rating2 = Rating (
    rating = 5,
    comment = "This commission was really cool. Thanks for the awesome work Kinsella.",
    user_id = 9,
    artist_id = 4,
    commission_id = 11,
  )

  KinKinsella_work2_rating3 = Rating (
    rating = 3,
    comment = "Kinsella’s commission was alright. It wasn’t exactly what I was looking for but, but I’s good.",
    user_id = 10,
    artist_id = 4,
    commission_id = 11,
  )

  KinKinsella_work3_rating1 = Rating (
    rating = 3.5,
    comment = " This was very creepy to me. I thought I was gonna get something a little more shiny.",
    user_id = 12,
    artist_id = 4,
    commission_id = 12,
  )

  KinKinsella_work3_rating2 = Rating (
    rating = 4.5,
    comment = "Dark Lords was definitely one of the coolest commissions I received in a while.",
    user_id = 2,
    artist_id = 4,
    commission_id = 12,
  )

  KinKinsella_work3_rating3 = Rating (
    rating = 4,
    comment = " A super cool grim commission!",
    user_id = 8,
    artist_id = 4,
    commission_id = 12,
  )

  #IvaTheDragon

  IvaTheDragon_work2_rating1 = Rating (
    rating = 4,
    comment = "I love It! Im so glad I was able to get my hands on a MerMay commission by IvaThe Dragon.",
    user_id = 7,
    artist_id = 5,
    commission_id = 14,
  )

  IvaTheDragon_work2_rating2 = Rating (
    rating = 4,
    comment = "Yesss, so happy to celebrate MerMay with a print from Iva!!",
    user_id = 12,
    artist_id = 5,
    commission_id = 14,
  )

  IvaTheDragon_work2_rating3 = Rating (
    rating = 4.5,
    comment = "This is exactly what I needed for my room. Thanks a lot Iva! Great work!!",
    user_id = 10,
    artist_id = 5,
    commission_id = 14,
  )

  IvaTheDragon_work3_rating1 = Rating (
    rating = 4,
    comment = "Who would’ve thought I needed more potion bottles in my life? This is a great addition to my collection of posters!",
    user_id = 4,
    artist_id = 5,
    commission_id = 15,
  )

  IvaTheDragon_work3_rating2 = Rating (
    rating = 3,
    comment = "The potion bottles were okay, but I wanted something more than what looks like a simple pattern.",
    user_id = 7,
    artist_id = 5,
    commission_id = 15,
  )


  IvaTheDragon_work3_rating3 = Rating (
    rating = 5,
    comment = "This was absolutely not just a simple pattern. It was very creative and awesome. Iva makes great work!",
    user_id = 12,
    artist_id = 5,
    commission_id = 15,
  )

  #Kainonaut

  kainonaut_work1_rating1 = Rating (
    rating = 5,
    comment = "JET SET RADIOOOOO!! I would love this on a t-shirt! Kainonaut is a beast!",
    user_id = 1,
    artist_id = 6,
    commission_id = 16,
  )

  kainonaut_work1_rating2 = Rating (
    rating = 4.5,
    comment = "This commission was sickkk. Please keep it coming Kainonaut!!",
    user_id = 11,
    artist_id = 6,
    commission_id = 16,
  )

  kainonaut_work1_rating3 = Rating (
    rating = 4,
    comment = "Bro, if you haven’t played this game stop what you’re doing and play it!!! Thanks Kainonaut for bringing awareness to this gem! I love the commission!!",
    user_id = 8,
    artist_id = 6,
    commission_id = 16,
  )

  kainonaut_work2_rating1 = Rating (
    rating = 4,
    comment = "Geez, im such a huge fan of Metroid and this was too good. Thanks for saving my life Kainonaut! ",
    user_id = 2,
    artist_id = 6,
    commission_id = 17,
  )

  kainonaut_work2_rating2 = Rating (
    rating = 3,
    comment = "I wish Ridley was included… This was pretty dope though.",
    user_id = 9,
    artist_id = 6,
    commission_id = 17,
  )

  kainonaut_work2_rating3 = Rating (
    rating = 4.5,
    comment = "Ughh, Samus is an absolute beast!! It was a big pleasure receiving this commission from Kainonaut.",
    user_id = 12,
    artist_id = 6,
    commission_id = 17,
  )

  kainonaut_work3_rating1 = Rating (
    rating = 5,
    comment = "Omg!! The commission that Kainonaut did for me was incredible! I love how he drew Luffy!",
    user_id = 10,
    artist_id = 6,
    commission_id = 18,
  )

  kainonaut_work3_rating2 = Rating (
    rating = 4.5,
    comment = "Gotta have another one of your One Piece prints. They are absolute fireeee!! ",
    user_id = 1,
    artist_id = 6,
    commission_id = 18,
  )

  kainonaut_work3_rating3 = Rating (
    rating = 3.5,
    comment = "Cool commission!",
    user_id = 11,
    artist_id = 6,
    commission_id = 18,
  )


  



  db.session.add(demo_rating1)
  db.session.add(demo_rating2)
  db.session.add(demo_rating3)
  db.session.add(demo_work2_rating1)
  db.session.add(demo_work2_rating2)
  db.session.add(demo_work2_rating3)
  db.session.add(demo_work3_rating1)
  db.session.add(demo_work3_rating2)
  db.session.add(demo_work3_rating3)
  db.session.add(Jamesjean_work1_rating1)
  db.session.add(Jamesjean_work1_rating2)
  db.session.add(Jamesjean_work1_rating3)
  db.session.add(Jamesjean_work2_rating1)
  db.session.add(Jamesjean_work2_rating2)
  db.session.add(Jamesjean_work2_rating3)
  db.session.add(Jamesjean_work2_rating4)
  db.session.add(Jamesjean_work2_rating5)
  db.session.add(Jamesjean_work3_rating1)
  db.session.add(Jamesjean_work3_rating2)
  db.session.add(Jamesjean_work3_rating3)
  db.session.add(Murakami_work1_rating1)
  db.session.add(Murakami_work1_rating2)
  db.session.add(Murakami_work1_rating3)
  db.session.add(Murakami_work2_rating1)
  db.session.add(Murakami_work2_rating2)
  db.session.add(Murakami_work2_rating3)
  db.session.add(Murakami_work3_rating1)
  db.session.add(Murakami_work3_rating2)
  db.session.add(Murakami_work3_rating3)
  db.session.add(KinKinsella_work1_rating1)
  db.session.add(KinKinsella_work1_rating2)
  db.session.add(KinKinsella_work1_rating3)
  db.session.add(KinKinsella_work2_rating1)
  db.session.add(KinKinsella_work2_rating2)
  db.session.add(KinKinsella_work2_rating3)
  db.session.add(KinKinsella_work3_rating1)
  db.session.add(KinKinsella_work3_rating2)
  db.session.add(KinKinsella_work3_rating3)
  db.session.add(IvaTheDragon_work2_rating1)
  db.session.add(IvaTheDragon_work2_rating2)
  db.session.add(IvaTheDragon_work2_rating3)
  db.session.add(IvaTheDragon_work3_rating1)
  db.session.add(IvaTheDragon_work3_rating2)
  db.session.add(IvaTheDragon_work3_rating3)
  db.session.add(kainonaut_work1_rating1)
  db.session.add(kainonaut_work1_rating2)
  db.session.add(kainonaut_work1_rating3)
  db.session.add(kainonaut_work2_rating1)
  db.session.add(kainonaut_work2_rating2)
  db.session.add(kainonaut_work2_rating3)
  db.session.add(kainonaut_work3_rating1)
  db.session.add(kainonaut_work3_rating2)
  db.session.add(kainonaut_work3_rating3)

  db.session.commit()




def undo_ratings():
  db.session.execute('TRUNCATE Ratings;')
  db.session.commit()