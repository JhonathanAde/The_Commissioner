from flask import Blueprint, jsonify, request, url_for

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

# GET A COMMISSION 
@commission_routes.route('/<int:id>/commission', methods=['GET'])
def get_commissions(id):
  commissions = Commission.query.filter_by(user_id = id).all()
  print("commissions!!!", commissions)
  return {"commissions" : [commission.to_dict() for commission in commissions]}
  # return {"commissions" : [commission.to_dict() for commission in commissions]}
  


# POST A COMMISSION (CREATE A COMMISSION)
@commission_routes.route('/new', methods=['POST'])
def create_a_commission():
  form = CommissionForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  print("it stops here!")
  if form.validate_on_submit():
    commission = Commission(
      title=form.data['title'],
      description=form.data['description'],
      image_url=form.data['image'],
      price=form.data['price'],
      requests=form.data['requests'],
      date_created=form.data['date_created'],
      duration=form.data['duration'],
      expired=form.data['expired'],
      user_id=form.data['user_id']
    )
    print(commission)

    db.session.add(commission)
    db.session.commit()
    return commission.to_dict()
  else:
    return {'errors': validation_errors_to_errors_messages(form.errors)}, 401
    
