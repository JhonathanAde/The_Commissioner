# from flask import Blueprint, jsonify, request, url_for
# from werkzeug.utils import secure_filename

# import boto3
# import mimetypes

# # MODELS
# from app.Models import BasicInfo, db

# basic_info_routes = Blueprint('basic_info', __name__)

# def validation_errors_to_errors_messages(validation_errors):
#   errorMessages = []
#   for field in validation_errors:
#     for error in validation_errors:
#       errorMessages.append(f"*Please enter {error}")
#   return errorMessages

# # GET BASIC INFO BY ID
# @basic_info_routes.route('/', methods=['GET'])
# def get_basic_info(id):
#   basic_info = BasicInfo.query.get(id)
#   print("basic_info", basic_info)
#   return basic_info.to_dict()