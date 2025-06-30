import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './homepage';
import Questionnaire from './questionnaire';
import FAQ from './faq';  // Import FAQ component
import Result from './result'; // Import Result component
import ProtectedLayout from './layout/protected_layout';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/questionnaire" element={<Questionnaire />} />
                <Route path="/faq" element={<FAQ />} /> {/* Add FAQ route */}
                <Route element={<ProtectedLayout/>}>
                    <Route path="/result" element={<Result />} />     
                </Route>{/* Add Result route */}
            </Routes>
        </Router>
    );
};

export default App;
