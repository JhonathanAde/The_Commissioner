from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, FileField, DateField, BooleanField, DecimalField, FloatField
from wtforms.validators import DataRequired, ValidationError, InputRequired, Optional, NumberRange
from flask_wtf.file import FileAllowed

def check_title(form, field):
  title = field.data
  if not len(title):
    raise ValidationError("Please enter a title")
  elif len(title) < 6:
    raise ValidationError("Your title must be between 6 and 30 characters max")
  elif len(title) > 30:
    raise ValidationError("Title exceeds the maximum of 30 characters")

def check_description(form, field):
  description = field.data
  if not len(description):
    raise ValidationError("Please enter a description")
  elif len(description) > 230:
    raise ValidationError("Description exceeds 230 characters maximum")

def check_price(form, field):
  price = field.data
  if price < 0:
    raise ValidationError("Please enter a valid price")

def check_requests(form, field):
  request = field.data
  if not request or request == None:
    raise ValidationError("Please enter the desired amount of requests")
  elif request < 0:
    raise ValidationError("Please enter a valid number of requests")


class CommissionForm(FlaskForm):
  title = StringField('Title', validators=[check_title])
  description = TextAreaField('Description', validators=[check_description])
  image = FileField('Image', validators=[FileAllowed(['jpg', 'jpeg', 'png'], 'jpg, jpeg, and png only!')])
  price = FloatField('Price', validators=[check_price])
  request_amt = IntegerField('Number of Requests', validators=[NumberRange(min=0), check_requests])
  date_created = DateField('Date Created')
  duration = DateField('Duration', validators=[Optional()])
  expired = BooleanField('Expired')
  user_id = IntegerField('User_id', validators=[DataRequired()])