from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from mongodb_connection import test_connection
from auth.routes import register_bp
import os


# Load environment variables
load_dotenv()

app = Flask(__name__)
#CORS(app)
CORS(app)
CORS(register_bp)

# Set secret key for the Flask app
#app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
# Test MongoDB connection
test_connection()
# Register blueprints
app.register_blueprint(register_bp)

# Add this block to run the app when the script is executed
if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    app.run(host="0.0.0.0", port=port)