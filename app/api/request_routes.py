from flask import Blueprint, jsonify, request, url_for
from werkzeug.utils import secure_filename
import boto3
import mimetypes

from app.Models import Request, db
from app.Forms import RequestForm



request_routes = Blueprint('requests', __name__)

def validation_errors_to_errors_messages(validation_errors):
  errorMessages = []
  for field in validation_errors:
    for error in validation_errors[field]:
      errorMessages.append(f"*{error}")
  return errorMessages


# GET ALL REQUESTS
@request_routes.route('/', methods=['GET'])
def get_all_requests():
  requests = Request.query.all()
  return {"requests": [request.to_dict() for request in requests]}

# GET ALL REQUESTS BY ID
@request_routes.route('/<int:id>/request')
def get_requests_id(id):
  requests = Request.query.filter_by(buyer_id=id).all()
  print("requests", requests)
  return {"requests": [request.to_dict() for request in requests]}


# CREATE A REQUEST
@request_routes.route('/new-request', methods=['POST'])
def create_request():
  form = RequestForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  image = ''
  image_path = ''
  if form.validate_on_submit():
    if request.files:
      image = request.files['references']
      print('went here')
      image_name = secure_filename(image.filename)

      mime_type = mimetypes.guess_type(image_name)

      s3 = boto3.resource('s3')
      uploaded_image = s3.Bucket('commissioner-requests').put_object(Key=image_name, Body=image, ACL='public-read', ContentType=mime_type[0])

      image_path = f"https://commissioner-requests.s3.amazonaws.com/{image_name}"
    else:
      print("Files weren't sent!!")

    com_request = Request(
      title=form.data['title'],
      details=form.data['details'],
      references=image_path,
      urgency=form.data['urgency'],
      date=form.data['date'],
      commission_id=form.data['commission_id'],
      price=form.data['price'],
      user_id=form.data['user_id'],
      buyer_id=form.data['buyer_id'],
      image_url=form.data['image_url']
    )

    db.session.add(com_request)
    db.session.commit()
    return com_request.to_dict()

  else:
    return {'errors': validation_errors_to_errors_messages(form.errors)}, 401
