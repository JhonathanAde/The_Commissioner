from flask import Blueprint, jsonify, request, url_for
from werkzeug.utils import secure_filename

import boto3
import mimetypes

# MODELS
from app.Models import Commission, db
from app.Forms import CommissionForm

commission_routes = Blueprint('commissions', __name__)


def validation_errors_to_errors_messages(validation_errors):
  errorMessages = []
  for field in validation_errors:
    for error in validation_errors:
      errorMessages.append(f"{field} : {error}")
  return errorMessages

# GET ALL COMMISSIONS
@commission_routes.route('/')
def get_all_commissions():
  commissions = Commission.query.all()
  print("commissions", commissions)
  return {"commissions": [commission.to_dict() for commission in commissions] }

# GET A COMMISSION ALL COMMISSIONS BY USER ID 
@commission_routes.route('/<int:id>/commission', methods=['GET'])
def get_commissions(id):
  commissions = Commission.query.filter_by(user_id = id).all()
  print("commissions!!!", commissions)
  return {"commissions" : [commission.to_dict() for commission in commissions]}
  # return {"commissions" : [commission.to_dict() for commission in commissions]}

# GET ONE COMMISSION
@commission_routes.route('/request/<int:id>', methods=['GET'])
def get_a_commission(id):
  commission = Commission.query.get(id)
  return commission.to_dict()


# POST A COMMISSION (CREATE A COMMISSION)
@commission_routes.route('/new', methods=['POST'])
def create_a_commission():
  form = CommissionForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  image = ''
  image_path = '' 
  if form.validate_on_submit():
    if request.files:
      image = request.files['image']
      image_name = secure_filename(image.filename)

      mime_type = mimetypes.guess_type(image_name)

      s3 = boto3.resource('s3')
      print(s3)
      uploaded_image = s3.Bucket('commissioner-commissions').put_object(Key=image_name, Body=image, ACL='public-read', ContentType=mime_type[0])

      image_path = f"https://commissioner-commissions.s3.amazonaws.com/{image_name}"
    else:
        print("Files weren't sent!!")

    commission = Commission(
      title=form.data['title'],
      description=form.data['description'],
      image_url=image_path,
      price=form.data['price'],
      request_amt=form.data['request_amt'],
      date_created=form.data['date_created'],
      duration=form.data['duration'],
      expired=form.data['expired'],
      user_id=form.data['user_id']
    )
    print('it gets to here')
    db.session.add(commission)
    db.session.commit()
    return commission.to_dict()
  else:
      return {'errors': validation_errors_to_errors_messages(form.errors)}, 401
    
