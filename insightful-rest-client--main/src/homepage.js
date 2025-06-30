import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => {
    const [loading, setLoading] = useState(false);
    const [showTeamModal, setShowTeamModal] = useState(false); // State for the team modal
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Scroll to the section if there's a hash in the URL
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1)); // Remove the "#" from the hash
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly to the element
            }
        }
    }, [location]);

    const handleGetStarted = () => {
        setLoading(true);
        setTimeout(() => {
            navigate('/questionnaire');
        }, 2000);
    };

    return (
        <div>
            {/* NAVIGATION BAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/logobracket.png" width="200" height="70" alt="Logo" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto d-flex align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#KeyFeatures">Key Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#assessment">Self-Assessment</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faq">FAQ</Link> {/* Link to FAQ page */}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="insightful-rest-container">
                <div className="insightful-rest-content">
                    <div className="moon-star-icon">
                        <img src="/Logo.png" alt="Moon and Star" />
                    </div>
                    <div className="insightful-rest-text">
                        <h1>Insightful Rest</h1>
                        <p>
                            Insightful Rest is designed to empower individuals to understand and improve their sleep quality
                            through comprehensive data analysis. By collecting and analyzing sleep patterns and stress levels,
                            we provide personalized insights that help users identify factors affecting their rest. Our mission
                            is to promote mental well-being and overall health by offering actionable recommendations for better
                            sleep. With Insightful Rest, users can take control of their sleep journey and achieve a more
                            peaceful, rejuvenating rest.
                        </p>
                        <button className="btn btn-success" onClick={handleGetStarted}>
                            {loading ? 'Loading...' : 'Get Started'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Loading Animation */}
            {loading && (
                <div className="loading-overlay">
                    <div className="loading-spinner"></div>
                </div>
            )}

            {/* Key Features Section */}
            <section id="KeyFeatures" className="section-padding">
                <div className="container">
                    <div className="row mb-4">
                        <div className="section-title-key">
                            <h1>Key Features</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        {[
                            { title: "Self-Assessment", description: "Users can complete a guided self-assessment to evaluate their sleep quality and stress levels.", imgSrc: "/card.png" },
                            { title: "User Dashboard", description: "A user-friendly dashboard provides an at-a-glance view of sleep statistics.", imgSrc: "/Pie-chart-removebg-preview.png" },
                            { title: "Insights and Analysis", description: "The system conducts a thorough analysis of user data.", imgSrc: "/book.png" },
                            { title: "Personalized Recommendations", description: "Users receive actionable recommendations.", imgSrc: "/Flower.png" },
                        ].map((feature, index) => (
                            <div className="col-10" key={index}>
                                <div className="feature-wrapper">
                                    <div className="iconbox">
                                        <img src={feature.imgSrc} alt={`${feature.title} Icon`} className="feature-icon" />
                                    </div>
                                    <div className={`feature-box-${index + 1}`}>
                                        <h5>{feature.title}</h5>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPLORE Section */}
            <section id="assessment" className="section-padding border-top">
                <div className="container-x">
                    <div className="row justify-content-center text-center mt-5 mb-5">
                        <div className="col-lg-8 col-md-10">
                            <div className="assessment-card theme-shadow p-5">
                                <h1 className="header-title">Explore Stress and Sleep Quality Correlations</h1>
                                <p className="description mt-3">
                                    Begin your journey by completing our guided self-assessment.
                                </p>
                                <button className="btn btn-success" onClick={handleGetStarted}>
                                    {loading ? 'Loading...' : 'Start Your Self-Assessment'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer bg-light py-4 mt-5">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-3">
                            <a href="#" className="footer-brand d-flex align-items-center">
                                <img src="/Logo.png" alt="Logo" className="footer-logo" />
                                <span className="ms-2">Insightful Rest</span>
                            </a>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <div className="footer-links-wrapper">
                                <div className="footer-column">
                                    <ul className="footer-links list-unstyled">
                                        <li><Link to="/faq">Frequently Asked Questions</Link></li> {/* Link to FAQ */}
                                        <li><a href="#">Contact Information</a></li>
                                    </ul>
                                </div>
                                <div className="footer-column">
                                    <ul className="footer-links list-unstyled">
                                        <li>
                                            <button
                                                className="btn team-info-btn p-0"
                                                onClick={() => setShowTeamModal(true)}
                                            >
                                                Team Information
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Team Information Modal */}
            {showTeamModal && (
    <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Our Team</h5>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShowTeamModal(false)}
                    ></button>
                </div>
                <div className="modal-body">
                    <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna.
                    </p>
                    <div className="row">
                        {/* Team Member 1 */}
                        <div className="col-md-3 mb-4">
                            <div className="card team-card shadow-sm">
                                <div className="card-body text-center">
                                    <img
                                        src="/tope.jpeg"
                                        alt="Team Member 1"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <h5 className="card-title mt-3">Christopher Montaño</h5>
                                    <p className="card-subtitle text-success">Role Title</p>
                                    <p className="card-text mt-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 2 */}
                        <div className="col-md-3 mb-4">
                            <div className="card team-card shadow-sm">
                                <div className="card-body text-center">
                                    <img
                                        src="/jeco.jpg"
                                        alt="Team Member 2"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <h5 className="card-title mt-3">Jerico Arzadon</h5>
                                    <p className="card-subtitle text-success">Role Title</p>
                                    <p className="card-text mt-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 3 */}
                        <div className="col-md-3 mb-4">
                            <div className="card team-card shadow-sm">
                                <div className="card-body text-center">
                                    <img
                                        src="/bea.jpg"
                                        alt="Team Member 3"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <h5 className="card-title mt-3">Beatrice Ydelle Martinez</h5>
                                    <p className="card-subtitle text-success">Role Title</p>
                                    <p className="card-text mt-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Team Member 4 */}
                        <div className="col-md-3 mb-4">
                            <div className="card team-card shadow-sm">
                                <div className="card-body text-center">
                                    <img
                                        src="/danica.jpg"
                                        alt="Team Member 4"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <h5 className="card-title mt-3">Danica Marie Untalan</h5>
                                    <p className="card-subtitle text-success">Role Title</p>
                                    <p className="card-text mt-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => setShowTeamModal(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
            )}
        </div>
    );
};

export default Homepage;
