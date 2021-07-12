from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, FileField, DateField, BooleanField, DecimalField, FloatField
from wtforms.validators import DataRequired, ValidationError
from flask_wtf.file import FileAllowed
from app.Models import User

def validate_username(form, field):
  new_username = field.data
  user = User.query.filter(User.username == new_username).first()

  if user:
    raise ValidationError("Username already exists. Please use a different username.")
  
  if len(new_username) == 0:
    raise ValidationError("Please insert a new username.")

class UserNameForm(FlaskForm):
  username = StringField('Username', validators=[validate_username])