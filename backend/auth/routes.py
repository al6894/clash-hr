from flask import Blueprint, request, jsonify, current_app
from mongodb_connection import db
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime

register_bp = Blueprint('register_bp', __name__)
collection_name = "users"

@register_bp.route('/register', methods=['POST', 'OPTIONS'])
def register():
    if request.method == 'OPTIONS':
        # Handle CORS preflight request
        return '', 204
    
    data = request.json
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400

    # Check if username already exists
    existing_user = db[collection_name].find_one({"_id": username})
    if existing_user:
        return jsonify({"error": "Username already exists"}), 409
    
    # Hash the password for security
    hashed_password = generate_password_hash(password)
    
    # Insert new user
    db[collection_name].insert_one({
        "_id": username,
        "password": hashed_password
    })
    return jsonify({"message": "User registered successfully"}), 201

login_bp = Blueprint('login_bp', __name__)

@login_bp.route('/login', methods=['POST', 'OPTIONS'])
def login():
    if request.method == 'OPTIONS':
        return '', 204  # Handle preflight requests
    
    data = request.json
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400
    
    user = db[collection_name].find_one({"_id":username})

    if not user:
        return jsonify({"error":"Username or password is incorrect"})

    # Verify the password
    if not check_password_hash(user["password"], password):
        return jsonify({"error": "Invalid username or password"}), 401
    
    # Generate JWT
    token = jwt.encode(
        {
            "user_id": username,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1),  # Token expires in 1 hour
        },
        current_app.config["SECRET_KEY"],
        algorithm="HS256"
    )

    # Success: User is authenticated
    return jsonify({"token": token}), 200
