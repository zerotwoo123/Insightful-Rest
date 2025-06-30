import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { personalQuestions, bedtimeQuestions, weekendBedtimeQuestions, sleepHoursQuestions, sleepImpactQuestions, sleepDisruptionQuestions, stressLevelQuestions, tirednessFactorsQuestions, lifestyleImpactQuestions  } from './constants/questions';
import { api } from './config/api';
import "./questionnaire.css";
import { useGlobalContext } from './hooks/useGlobalContext';


const Questionnaire = () => {
    const [answers, setAnswers] = useState({});
    const [currentSet, setCurrentSet] = useState(1);
    const [loading, setLoading] = useState(false);
    const handleNavigation = useNavigate();
    const {setResult} = useGlobalContext();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [name]: value,
        }));
    };

    const questionSets = [personalQuestions, bedtimeQuestions, weekendBedtimeQuestions, sleepHoursQuestions, sleepImpactQuestions, sleepDisruptionQuestions, stressLevelQuestions, tirednessFactorsQuestions, lifestyleImpactQuestions ]

    // Check if all questions have been answered
    // Check if all questions in the current set have been answered
    const currentQuestions = questionSets[currentSet - 1]; // Get questions for current set
    const allAnswered = currentQuestions.every(
        (question) => answers[question.id] && answers[question.id] !== ''
    );

    const handlePrev = () => {
        if (currentSet < 9) {
            setCurrentSet(currentSet - 1);
        }
    };

    const handleNext = () => {
        if (currentSet < 9) {
            setCurrentSet(currentSet + 1);
        }
    };

    const handleSubmit = async() => {
        try {
            setLoading(true)
            const response = await api.post('/predict', answers)
            setResult(response)
            handleNavigation('/result')
        } catch (error) {
            throw error
        } finally {
            setLoading(false)
        }
    }

    const percentage = 100 / 9; // Divide 100% by 9 sets to get each set's percentage

    // Calculate the width of the progress bar based on the current set
    const progressWidth = percentage * currentSet;
   
    return (
        <div className="questionnaire-container">
            {/* NAVIGATION BAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" onClick={() => handleNavigation('/')}>
                        {loading ? (
                            <span className="loading-spinner"></span>
                        ) : (
                            <img src="/logobracket.png" width="200" height="70" alt="Logo" />
                        )}
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto d-flex align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleNavigation('/#KeyFeatures')}>
                                    {loading ? <span className="loading-spinner"></span> : 'Key Features'}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleNavigation('/#assessment')}>
                                    {loading ? <span className="loading-spinner"></span> : 'Self-Assessment'}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => handleNavigation('/#about')}>
                                    {loading ? <span className="loading-spinner"></span> : 'About'}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {loading && <div className="loading-overlay"><div className="loading-spinner"></div></div>}

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 mt-5">
                        <h1 className="text-center fw-bolder">Self-Assessment Questionnaire</h1>
                        <div className="title-underline"></div>
                        {currentSet === 1 ? (
                            <h2 className="text-center fw-bold">Personal Questions</h2>
                        ) : currentSet === 2 ? (
                            <h2 className="text-center fw-bold">Bed Time Questions (Weekdays)</h2>
                        ) : currentSet === 3 ? (
                            <h2 className="text-center fw-bold">Bed Time Questions (Weekend)</h2>
                        ) : currentSet === 4 ? (
                            <h2 className="text-center fw-bold">General Sleep Time and Schedule Questions</h2>
                        ) : (
                            <h2 className="text-center fw-bold">Factors of Sleep Disturbances Questions</h2>
                        )}

                        <div>
                            <div className="questionnaire-box">
                                <div className="progress" role="progressbar">
                                    <div class="progress-bar" style={{width: `${progressWidth}%`}}></div>
                                </div>

                                {/* Render the first set of questions */}
                                {currentSet === 1 && (
                                    <div className="personal-questions">
                                        {personalQuestions.map((question, index) => (
                                            <div className="mb-3 mt-3" key={index}>
                                                <label htmlFor={question.id} className="form-label fw-semibold">
                                                    {question.label}
                                                </label>
                                                <div className="d-flex align-items-center">
                                                    <select
                                                        id={question.id}
                                                        className="form-select"
                                                        value={answers[question.id] || ''}
                                                        onChange={handleInputChange}
                                                        name={question.id}
                                                        required
                                                    >
                                                        <option value="" hidden>Select an Answer</option>
                                                        {question.options.map((option, index) => (
                                                            <option key={index} value={option.value}>{option.label}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        ))}
                                        <div className='d-flex gap-2 justify-content-end'>
                                            <button className="btn btn-primary" onClick={handleNext} disabled={!allAnswered}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {currentSet === 2 && (
                                    <div className="bedtime-questions">
                                        {bedtimeQuestions.map((question, index) => (
                                            <div className="mb-3 mt-3" key={index}>
                                                <label htmlFor={question.id} className="form-label fw-semibold">
                                                    {question.label}
                                                </label>
                                                <div className="d-flex align-items-center">
                                                    <input
                                                        type={question.type}
                                                        id={question.id}
                                                        onChange={handleInputChange}
                                                        required
                                                        name={question.id}
                                                        value={answers[question.id] || ''}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <div className='d-flex gap-2 justify-content-end'>
                                            <button className="btn btn-secondary" onClick={handlePrev} >
                                                Back
                                            </button>
                                            <button className="btn btn-primary" onClick={handleNext} disabled={!allAnswered}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {currentSet === 3 && (
                                    <div className="weekend-bedtime-questions">
                                        {weekendBedtimeQuestions.map((question, index) => (
                                            <div className="mb-3 mt-3" key={index}>
                                                <label htmlFor={question.id} className="form-label fw-semibold">
                                                    {question.label}
                                                </label>
                                                <div className="d-flex align-items-center">
                                                    <input
                                                        type={question.type}
                                                        id={question.id}
                                                        onChange={handleInputChange}
                                                        required
                                                        name={question.id}
                                                        value={answers[question.id] || ''}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <div className='d-flex gap-2 justify-content-end'>
                                            <button className="btn btn-secondary" onClick={handlePrev} >
                                                Back
                                            </button>
                                            <button className="btn btn-primary" onClick={handleNext} disabled={!allAnswered}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {currentSet === 4 && (
                                    <div className="sleep-hours-questions">
                                        {sleepHoursQuestions.map((question, index) => (
                                            <div className="mb-3 mt-3" key={index}>
                                                <label htmlFor={question.id} className="form-label fw-semibold">
                                                    {question.label}
                                                </label>
                                                {question.options.map((option, index) => (
                                                    <div key={index}>
                                                        <input
                                                            type={question.type}
                                                            id={option.id}
                                                            name={question.id}
                                                            value={option.value}
                                                            onChange={handleInputChange}
                                                            checked={answers[question.id] == option.value}
                                                        />
                                                        <label htmlFor={option.id} className="radio-label">{option.label}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                        <div className='d-flex gap-2 justify-content-end'>
                                            <button className="btn btn-secondary" onClick={handlePrev} >
                                                Back
                                            </button>
                                            <button className="btn btn-primary" onClick={handleNext} disabled={!allAnswered}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {currentSet === 5 && (
                                    <div className="sleep-hours-questions">
                                        {sleepImpactQuestions.map((question, index) => (
                                            <div className="mb-3 mt-3" key={index}>
                                                <label htmlFor={question.id} className="form-label fw-semibold">
                                                    {question.label}
                                                </label>
                                                {question.options.map((option, index) => (
                                                    <div key={index}>
                                                        <input
                                                            type={question.type}
                                                            id={option.id}
                                                            name={question.id}
                                                            value={option.value}
                                                            onChange={handleInputChange}
                                                            checked={answers[question.id] == option.value}
                                                        />
                                                        <label htmlFor={option.id} className="radio-label">{option.label}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                        <div className='d-flex gap-2 justify-content-end'>
                                            <button className="btn btn-secondary" onClick={handlePrev} >
                                                Back
                                            </button>
                                            <button className="btn btn-primary" onClick={handleNext} disabled={!allAnswered}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {currentSet === 6 && (
                                    <div className="sleep-hours-questions">
                                        {sleepDisruptionQuestions.map((question, index) => (
                                            <div className="mb-3 mt-3" key={index}>
                                                <label htmlFor={question.id} className="form-label fw-semibold">
                                                    {question.label}
                                                </label>
                                                {question.options.map((option, index) => (
                                                    <div key={index}>
                                                        <input
                                                            type={question.type}
                                                            id={option.id}
                                                            name={question.id}
                                                            value={option.value}
                                                            onChange={handleInputChange}
                                                            checked={answers[question.id] == option.value}
                                                        />
                                                        <label htmlFor={option.id} className="radio-label">{option.label}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                        <div className='d-flex gap-2 justify-content-end'>
                                            <button className="btn btn-secondary" onClick={handlePrev} >
                                                Back
                                            </button>
                                            <button className="btn btn-primary" onClick={handleNext} disabled={!allAnswered}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {currentSet === 7 && (
                                    <div className="sleep-hours-questions">
                                        {stressLevelQuestions.map((question, index) => (
                                            <div className="mb-3 mt-3" key={index}>
                                                <label htmlFor={question.id} className="form-label fw-semibold">
                                                    {question.label}
                                                </label>
                                                {question.options.map((option, index) => (
                                                    <div key={index}>
                                                        <input
                                                            type={question.type}
                                                            id={option.id}
                                                            name={question.id}
                                                            value={option.value}
                                                            onChange={handleInputChange}
                                                            checked={answers[question.id] == option.value}
                                                        />
                                                        <label htmlFor={option.id} className="radio-label">{option.label}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                        <div className='d-flex gap-2 justify-content-end'>
                                            <button className="btn btn-secondary" onClick={handlePrev} >
                                                Back
                                            </button>
                                            <button className="btn btn-primary" onClick={handleNext} disabled={!allAnswered}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {currentSet === 8 && (
                                    <div className="sleep-hours-questions">
                                        {tirednessFactorsQuestions.map((question, index) => (
                                            <div className="mb-3 mt-3" key={index}>
                                                <label htmlFor={question.id} className="form-label fw-semibold">
                                                    {question.label}
                                                </label>
                                                {question.options.map((option, index) => (
                                                    <div key={index}>
                                                        <input
                                                            type={question.type}
                                                            id={option.id}
                                                            name={question.id}
                                                            value={option.value}
                                                            onChange={handleInputChange}
                                                            checked={answers[question.id] == option.value}
                                                        />
                                                        <label htmlFor={option.id} className="radio-label">{option.label}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                        <div className='d-flex gap-2 justify-content-end'>
                                            <button className="btn btn-secondary" onClick={handlePrev} >
                                                Back
                                            </button>
                                            <button className="btn btn-primary" onClick={handleNext} disabled={!allAnswered}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {currentSet === 9 && (
                                    <div className="sleep-hours-questions">
                                        {lifestyleImpactQuestions.map((question, index) => (
                                            <div className="mb-3 mt-3" key={index}>
                                                <label htmlFor={question.id} className="form-label fw-semibold">
                                                    {question.label}
                                                </label>
                                                {question.options.map((option, index) => (
                                                    <div key={index}>
                                                        <input
                                                            type={question.type}
                                                            id={option.id}
                                                            name={question.id}
                                                            value={option.value}
                                                            onChange={handleInputChange}
                                                            checked={answers[question.id] == option.value}
                                                        />
                                                        <label htmlFor={option.id} className="radio-label">{option.label}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                        <div className='d-flex gap-2 justify-content-end'>
                                            <button className="btn btn-secondary" onClick={handlePrev} >
                                                Back
                                            </button>
                                            <button className="btn btn-primary" onClick={handleSubmit} disabled={!allAnswered}>
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {/* <div className="d-flex justify-content-between mt-4">
                                {currentSet > 1 && (
                                    <button className="btn btn-secondary" onClick={handleBack}>Back</button>
                                )}
                                <button className="btn btn-primary" onClick={handleNext}>
                                    {currentSet === 9 ? 'Finish' : 'Next'}
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questionnaire;
