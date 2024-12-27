from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from mongodb_connection import test_connection
from auth.routes import register_bp
from auth.routes import login_bp
import os
import jwt

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "your_secret_key")
CORS(app)
CORS(register_bp)

# Test MongoDB connection
test_connection()

# Register blueprints
app.register_blueprint(register_bp)
app.register_blueprint(login_bp)

# Add this block to run the app when the script is executed
if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port)