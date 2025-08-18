from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'default-password')
app.config['DEBUG'] = os.getenv('FLASK_DEBUG', 'False').lower() == 'true'

frontend_url = os.getenv('FRONTEND_URL', 'http://localhost:3000')
CORS(app, origins=[frontend_url])


@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({"msg": "¡Hola desde Flask con .env!"})

@app.route('/api/users', methods=['GET'])
def get_users():
    users = [
        {"id": 1, "name": "Ana"},
        {"id": 2, "name": "Carlos"}
    ]
    return jsonify(users)

@app.route('/api/config', methods=['GET'])
def get_config():
    """Endpoint para verificar configuración (sin datos sensibles)"""
    return jsonify({
        "environment": os.getenv('FLASK_ENV', 'production'),
        "debug": app.config['DEBUG'],
        "frontend_url": os.getenv('FRONTEND_URL'),
        "port": os.getenv('PORT', '5000')
    })

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    host = os.getenv('HOST', '127.0.0.1')
    debug = os.getenv('FLASK_DEBUG', 'False').lower() == 'true'
    
    app.run(host=host, port=port, debug=debug)

