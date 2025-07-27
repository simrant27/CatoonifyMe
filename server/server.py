from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from utils.cartoonify import cartoonify_image
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
OUTPUT_FOLDER = "outputs"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

@app.route("/upload", methods=["POST"])
def upload():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    image = request.files['image']
    path = os.path.join(UPLOAD_FOLDER, image.filename)
    image.save(path)

    output_path = cartoonify_image(path, image.filename)
    return send_file(output_path, mimetype='image/jpeg')

if __name__ == "__main__":
    app.run(debug=True)
