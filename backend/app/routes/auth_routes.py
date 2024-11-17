from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from app.models import UserModel
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/register', methods=['POST'])
def register():
    data = request.json
    if UserModel.find_user_by_email(data['email']):
        return jsonify({'message': 'Email already exists'}), 400
    
    hashed_password = generate_password_hash(data['password'])
    new_user = {
        "email": data['email'],
        "password": hashed_password,
        "name": data['name'],
    }
    UserModel.create_user(new_user)
    return jsonify({'message': 'User registered successfully'}), 201

@auth_blueprint.route('/login', methods=['POST'])
def login():
     data = request.json
     user = UserModel.find_user_by_email(data['email'])
     if not user or not check_password_hash(user['password'], data['password']):
         return jsonify({'message': 'Invalid email or password'}), 401
     
     access_token = create_access_token(identity=user['email'], expires_delta=datetime.timedelta(hours=24))
     return jsonify({'access_token': access_token}), 200