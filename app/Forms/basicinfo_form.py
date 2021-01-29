from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, FileField, DateField, BooleanField, DecimalField, FloatField
from wtforms.validators import DataRequired, ValidationError
from flask_wtf.file import FileAllowed


class BasicInfoForm(FlaskForm):
  profile_pic = FileField('Profile_pic', validators=[FileAllowed(['jpg', 'jpeg', 'png'], 'jpg, jpeg, and png only!')])
  first_name = StringField('First_name')
  last_name = StringField('Last_name')
  website = StringField('Website')
  bio = TextAreaField('Bio')