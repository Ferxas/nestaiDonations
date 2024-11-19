from flask import Blueprint, jsonify, request
from backend.models.user_models import get_db

donation_blueprint = Blueprint('donations', __name__)

@donation_blueprint.route('/', methods=['GET'])
def create_donation():
    db = get_db()
    donations = list(db.donations.find())
    return jsonify(donations), 200