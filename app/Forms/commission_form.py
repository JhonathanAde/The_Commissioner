from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, FileField, DateField, BooleanField, DecimalField, FloatField
from wtforms.validators import DataRequired, ValidationError
from flask_wtf.file import FileAllowed


class CommissionForm(FlaskForm):
  title = StringField('Title', validators=[DataRequired()])
  description = TextAreaField('Description', validators=[DataRequired()])
  image = FileField('Image', validators=[FileAllowed(['jpg', 'jpeg', 'png'], 'jpg, jpeg, and png only!')])
  price = FloatField('Price', validators=[DataRequired()])
  request_amt = IntegerField('Number of Requests', validators=[DataRequired()])
  date_created = DateField('Date Created', validators=[DataRequired()])
  duration = DateField('Duration')
  expired = BooleanField('Expired')
  user_id = IntegerField('User_id', validators=[DataRequired()])