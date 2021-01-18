from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, FileField, DateField, BooleanField
from wtforms.validators import DataRequired, ValidationError
from flask_wtf.file import FileAllowed

class RequestForm(FlaskForm):
  title = StringField('Title', validators=[DataRequired()])
  details = TextAreaField('Details', validators=[DataRequired()])
  references = FileField('References', validators=[FileAllowed(['jpg', 'jpeg', 'png'], 'jpg, jpeg and png only!')])
  urgency = BooleanField('Urgency',validators=[DataRequired()])
  date = DateField('Date')
  commission_id = IntegerField('CommissionId')
  price = IntegerField('Price')
  user_id = IntegerField('UserId', validators=[DataRequired()])
  buyer_id = IntegerField('BuyerId', validators=[DataRequired()])
  image_url = StringField('Image_url', validators=[DataRequired()])