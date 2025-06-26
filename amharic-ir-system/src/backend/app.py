from flask import Flask, request, jsonify, send_from_directory
from ir_engine import search_documents
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query')
    if not query:
        return jsonify({'error': 'Query parameter is required.'}), 400
    results = search_documents(query)
    return jsonify(results)

@app.route('/documents/<path:filename>')
def serve_document(filename):
    documents_dir = os.path.join(os.path.dirname(__file__), '../data/documents')
    return send_from_directory(documents_dir, filename)

if __name__ == '__main__':
    app.run(debug=True)