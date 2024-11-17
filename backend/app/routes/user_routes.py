from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required
from app.services.user_analysis import analyze_users

user_blueprint = Blueprint('users', __name__)

@user_blueprint.route('/analyze', methods=['GET'])
@jwt_required()
def analyze():
    analysis = analyze_users()
    return jsonify(analysis), 200
