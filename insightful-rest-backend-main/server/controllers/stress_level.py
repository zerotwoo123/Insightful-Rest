import pandas as pd
import joblib
from datetime import datetime
import sklearn

def preprocess_data(data):
    time_fields = [
        'EarliestBedtimeWeekDays',
        'LatestBedtimeWeekDays',
        'UsualBedtimeWeekDays',
        'EarliestBedtimeWeekend',
        'LatestBedtimeWeekend',
        'UsualBedtimeWeekend'
    ]  

    for field in time_fields:
        if field in data:
            if isinstance(data[field], str):  
                try:
                    time_obj = datetime.strptime(data[field], '%H:%M')
                    data[field] = time_obj.hour
                except ValueError:
                    print(f"Invalid time format for {field}: {data[field]}")
                    data[field] = 0 
            elif isinstance(data[field], int):
                pass

    return data

import numpy as np
import pandas as pd
import joblib

def predict_stress_level(user_input):
    # Load the saved files
    scaler = joblib.load('./scaler.pkl')
    feature_columns = joblib.load('./feature_columns.pkl')
    model = joblib.load('./rf.pkl')
    
    # Extract the class labels directly from the model
    class_labels = model.classes_
    
    # Convert user input into a DataFrame for consistency
    user_df = pd.DataFrame([user_input], columns=feature_columns).fillna(0)  # Fill missing values with 0
    
    # Ensure that all expected columns are present
    for col in feature_columns:
        if col not in user_df.columns:
            user_df[col] = 0  # Add missing columns with default value 0
    
    # Standardize the user input
    user_scaled = scaler.transform(user_df)
    
    # Predict using the trained model
    prediction = model.predict(user_scaled)[0]
    probabilities = model.predict_proba(user_scaled)[0]  # Get probabilities for all classes
    
    # Build the JSON response
    result = {
        "prediction": [
            {"class": class_labels[i], "score": float(probabilities[i])} 
            for i in range(len(class_labels))
        ]
    }
    
    return result