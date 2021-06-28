from flask import Blueprint, jsonify, request, url_for
from werkzeug.utils import secure_filename

# MODELS
from app.Models import Rating, db
from app.Forms import RatingForm 

ratings_routes = Blueprint('ratings', __name__)

def validation_errors_to_errors_messages(validation_errors):
  errorMessages = []
  for field in validation_errors:
    for error in validation_errors[field]:
      errorMessages.append(f"*{field, error}")
  return errorMessages


#GET ALL RATINGS
@ratings_routes.route('/')
def get_all_ratings():
  ratings = Rating.query.all()
  print("ratings", ratings)
  return {"ratings": [ratings.to_dict() for rating in ratings]}

#GET ALL RATINGS BY COMMISSION ID
@ratings_routes.route('/<int:id>/rating', methods=['GET'])
def get_ratings(id):
  ratings = Rating.query.filter_by(commission_id = id).all()
  print("ratings", ratings)
  return {"ratings" : [rating.to_dict() for rating in ratings]}

#POST A RATING
@ratings_routes.route('/new', methods=['POST'])
def create_a_rating():
  form = RatingForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  print('before checking validations')

  if form.validate_on_submit():
    rating = Rating(
      rating = form.data['rating'],
      comment = form.data['comment'],
      user_id = form.data['user_id'],
      artist_id = form.data['artist_id'],
      commission_id = form.data['commission_id']
    )
    print('it gets to here')
    db.session.add(rating)
    db.session.commit()
    return rating.to_dict()
  else:
    return {'errors': validation_errors_to_errors_messages(form.errors)}, 401
