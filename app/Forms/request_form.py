from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, FileField, DateField, BooleanField
from wtforms.validators import DataRequired, ValidationError, Optional
from flask_wtf.file import FileAllowed

def check_title(form, field):
  title = field.data
  if not len(title):
    raise ValidationError("Please enter a title")
  if len(title) < 6:
    raise ValidationError("Title must have at least 6 characters long")

def check_details(form, field):
  details = field.data
  if not len(details):
    raise ValidationError("Please enter the details of your request")
  if len(details) > 230:
    raise ValidationError("Details must be less than 230 characters long")




class RequestForm(FlaskForm):
  title = StringField('Title', validators=[check_title])
  details = TextAreaField('Details', validators=[check_details])
  references = FileField('References', validators=[FileAllowed(['jpg', 'jpeg', 'png'], 'jpg, jpeg and png only!')])
  urgency = BooleanField('Urgency',validators=[Optional()])
  date = DateField('Date', validators=[Optional()])
  commission_id = IntegerField('CommissionId')
  price = IntegerField('Price')
  user_id = IntegerField('UserId', validators=[DataRequired()])
  buyer_id = IntegerField('BuyerId', validators=[DataRequired()])
  image_url = StringField('Image_url', validators=[DataRequired()])