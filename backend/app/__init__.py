from flask import Flask
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)

# Configure CORS
CORS(app, resources={
    r"/api/*": {
        "origins": "*",
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Import routes after app initialization to avoid circular imports
from app import routes

# Register blueprint
app.register_blueprint(routes.bp)