import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './faq.css';

const FAQ = () => {
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  const faqs = [
   {
    question: "What is Insightful Rest?",
    answer: "Insightful Rest is a system designed to analyze and predict stress levels by examining sleep quality. The platform uses advanced machine learning algorithms to help users understand the relationship between their sleep patterns and stress. With Insightful Rest, you can gain insights into your mental well-being and make data-driven decisions to improve both your sleep and stress management."
   },
   {
    question: "What kind of data do I need to provide?",
    answer: "Insightful Rest requires data related to your sleep patterns, such as sleep duration, quality, and any disruptions. We may also ask for demographic information, as well as self assesment on your stress levels, to enhance the accuracy of our predictions. All data collected is securely stored and used solely for providing insights and improving our algorithms."
   },
   {
    question: "Is Insightful Rest suitable for all ages?",
    answer: "Insightful Rest is specifically designed with Gen Z in mind, focusing on the unique stressors and sleep patterns experienced by this age group. However, users outside this demographic may still find the insights and features helpful for understanding their own sleep and stress relationship."
   },
   {
    question: "Can Insightful Rest predict stress levels?",
    answer: "Yes, Insightful Rest predicts stress levels by analyzing sleep data, such as sleep quality, duration, and disruptions. Using advanced machine learning algorithms, the system provides insights into stress based on unique sleep patterns, helping users make informed decisions for better stress management."
   },
   {
    question: "How does Insightful Rest measure sleep quality?",
    answer: "Insightful Rest assesses sleep quality by analyzing factors such as total sleep time, frequency of disruptions, and consistency in sleep patterns. These indicators provide a comprehensive view of your sleep health and its impact on stress levels."
   },
  ];

  useEffect(() => {
    // Disable scroll while loading
    if (loading) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [loading]);

  // Simulate loading completion after 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="loading-overlay">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  const handleNavigation = (target) => {
    setLoading(true);
    setTimeout(() => {
      navigate(target);
    }, 1000);
  };

  return (
    <div>
      {/* Navbar */}
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
                <a className="nav-link">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {loading && <div className="loading-overlay"><div className="loading-spinner"></div></div>}

      {/* Header Section */}
      <div className="faq-header" style={{ color: 'black' }}>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <h1>Questions about the Insightful Rest?</h1>
      </div>


      {/* FAQ List */}
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => setIsOpen(!isOpen);

  return (
    <div className="faq-item">
      <div className="question" onClick={toggleAnswer}>
        <h2>{faq.question}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="answer"><p>{faq.answer}</p></div>}
    </div>
  );
};

export default FAQ;
