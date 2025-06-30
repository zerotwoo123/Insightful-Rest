import React from 'react';
import { useGlobalContext } from '../hooks/useGlobalContext';

const Details = () => {
  const { result } = useGlobalContext(); // Assuming `result` contains the prediction data

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Detailed Insights:</h3>
      
      {/* Loop through prediction data to create progress bars */}
      {result.prediction.map((item, index) => (
        <div key={index} className="mb-3">
          <label className="form-label d-flex">{item.class}</label>
          <div className="progress">
            <div
              className="progress-bar fw-semibold"
              role="progressbar"
              style={{ width: `${item.score * 100}%` }}  // Convert score to percentage
              aria-valuenow={item.score * 100}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {`${(item.score * 100).toFixed(0)}%`}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
