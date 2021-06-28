from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, FileField, DateField, BooleanField, DecimalField, FloatField
from wtforms.validators import DataRequired, ValidationError, InputRequired, Optional, NumberRange
from flask_wtf.file import FileAllowed

def my_input_check(form, field):
  if len(field.data) < 1:
    print(field.data)
    raise ValidationError('No input is found. Please input data.')

def my_num_check(form, field):
  print(field.data)
  if field.data <= 0:
    raise ValidationError('Please input a valid number')

class RatingForm(FlaskForm):
  rating = IntegerField('Rating', validators=[])
  comment = TextAreaField('Comment', validators=[])
  user_id = IntegerField('User_Id', validators=[InputRequired()])
  artist_id = IntegerField('Artist_id', validators=[InputRequired()])
  commission_id = IntegerField('Commission_id', validators=[InputRequired()])