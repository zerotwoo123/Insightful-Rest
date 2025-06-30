from flask import Blueprint, request, jsonify
from server.controllers.stress_level import predict_stress_level, preprocess_data

prediction = Blueprint('predict', __name__)

@prediction.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the data payload from the client
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        # Pass the data to the predict_stress_level function
        processed_data = preprocess_data(data)
        prediction_result = predict_stress_level(processed_data)
        
        # Return the prediction result to the client
        return jsonify(prediction_result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500