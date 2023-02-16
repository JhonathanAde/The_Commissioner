from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, FileField, DateField, BooleanField, DecimalField, FloatField
from wtforms.validators import DataRequired, ValidationError
from flask_wtf.file import FileAllowed
from app.Models import User


class BasicInfoForm(FlaskForm):
  profile_pic = StringField('Profile_pic')
  first_name = StringField('First_name')
  last_name = StringField('Last_name')
  website = StringField('Website')
  bio = TextAreaField('Bio')
  occupation = StringField('Occupation')
  show_name = BooleanField('Show_name')