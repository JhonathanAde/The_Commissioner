from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField, FileField, DateField, BooleanField, DecimalField, FloatField
from wtforms.validators import DataRequired, ValidationError, InputRequired, Optional, NumberRange
from flask_wtf.file import FileAllowed

class UploadForm(FlaskForm):
  file_path = FileField('File_path', validators=[FileAllowed(['jpg', 'jpeg', 'png'], 'jpg, jpeg, and png only!')])