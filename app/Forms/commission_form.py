from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, FileField, DateField
from wtforms.validators import DataRequired, ValidationError
from flask_wtf.file import FileAllowed


class CommissionForm(FlaskForm):
  title = StringField('Title', validators=[DataRequired()])
  description = TextAreaField('Description', validators=[DataRequired()])
  image = FileField('Image', validators=[FileAllowed(['jpg', 'jpeg', 'png'], 'jpg, jpeg, and png files only!')])
  price = IntegerField('Price', validators=[DataRequired()])
  requests = IntegerField('Number of Requests', validators=[DataRequired()])
  duration = DateField('Duration', validators=[DataRequired()])