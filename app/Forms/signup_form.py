from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, SelectField
from wtforms.validators import DataRequired, Email, ValidationError
from app.Models import User

def user_exists(form, field):
  print("Checking if user exists", field.data)
  email = field.data
  user = User.query.filter(User.email == email).first()
  if user:
    raise ValidationError("User is already registered.")

def validate_password(form, field):
  if len(field.data) < 6:
    raise ValidationError('Please input a password longer than 6 characters.')

class SignUpForm(FlaskForm):
  username = StringField('username', validators=[DataRequired()])
  email = StringField('email', validators=[DataRequired(), user_exists])
  password = StringField('password', validators=[DataRequired(), validate_password])
  location = StringField('location', [DataRequired()])
  artist = BooleanField('artist', false_values=(False, 'false'))
