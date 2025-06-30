import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './result.css';
import { useGlobalContext } from './hooks/useGlobalContext';
import Details from './components/detailed_insight';

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // State for loading animation
    const [showDetails, setShowDetails] = useState(false)
    const {result} = useGlobalContext()


    useEffect(() => {
        // Simulate a delay for loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 10000); // 10 seconds (10,000 ms)
    },[])

    // Recommendations by category
    const recommendationsByCategory = {
        "Not Stressed": [
            "<strong>Maintain healthy habits</strong>: Continue with regular physical activity (e.g., walking, jogging, or cycling). Maintain a balanced diet rich in fruits, vegetables, proteins, and whole grains. Incorporate mindfulness practices such as deep breathing or meditation into your daily routine to enhance emotional well-being.",
            "<strong>Practice gratitude</strong>: Write in a gratitude journal each day. List three things you are thankful for, which helps shift focus away from negativity and promotes positive thinking.",
            "<strong>Foster relationships</strong>: Dedicate quality time to connect with family and friends. Engage in meaningful conversations, attend social gatherings, or even schedule regular catchups over coffee to strengthen bonds and maintain a strong support system.",
            "<strong>Engage in hobbies</strong>: Explore activities that bring you joy or relaxation, such as reading, gardening, painting, or crafting. Hobbies can provide an outlet for stress and stimulate creativity.",
            "<strong>Prepare for challenges</strong>: Build resilience by developing coping strategies. Learn stress management techniques, such as time management or positive self-talk, to proactively deal with potential challenges."
        ],
        "Stressed": [
            "<strong>Time management</strong>: Use a planner or digital tool to organize daily tasks. Prioritize high-importance items and break larger tasks into smaller, manageable chunks to avoid procrastination and overwhelm.",
            "<strong>Take short breaks</strong>: Schedule regular breaks to recharge during work or study sessions. A 5–10 minute walk or a few minutes of meditation can refresh the mind and help maintain focus.",
            "<strong>Deep breathing</strong>: Set aside 5–10 minutes each day to practice deep breathing exercises, such as inhaling slowly through the nose, holding for a few seconds, and exhaling through the mouth. This technique reduces stress hormones and promotes relaxation.",
            "<strong>Reduce stimulants</strong>: Limit intake of substances like caffeine, alcohol, and nicotine, which can increase anxiety or disrupt sleep. Have herbal teas or water instead of energy drinks or excessive coffee.",
            "<strong>Spend time in nature</strong>: Regularly engage in outdoor activities such as walking, cycling, or hiking in parks or natural environments. Exposure to nature can help lower stress levels and improve mental clarity."
        ],
        "Moderate": [
            "<strong>Physical activity</strong>: Incorporate 30 minutes of exercise at least 3–4 times per week. Options include running, swimming, or engaging in fitness classes. Regular exercise releases endorphins that improve mood and reduce stress.",
            "<strong>Mindfulness practice</strong>: Dedicate 10 minutes each day to mindfulness exercises, such as guided imagery, focusing on your breath, or body scan meditation. These practices help cultivate present-moment awareness and reduce stress.",
            "<strong>Seek social support</strong>: Reach out to friends, family, or support groups to share concerns and receive emotional support. Connecting with others helps process feelings and provides comfort.",
            "<strong>Identify triggers</strong>: Keep a stress journal to track situations or thoughts that trigger stress. Once identified, brainstorm potential solutions or coping strategies. For example, if work deadlines cause anxiety, learn to delegate or break tasks into smaller parts.",
            "<strong>Improve sleep hygiene</strong>: Set a consistent bedtime and wake-up time, even on weekends, to regulate your sleep cycle. Limit exposure to screens (phone, TV, computer) at least 30 minutes before bed to avoid disrupting sleep patterns."
        ],
        "Severe": [
            "<strong>Professional help</strong>: Seek therapy or counseling with a licensed mental health professional to help process emotions, develop coping mechanisms, and address any underlying issues contributing to stress.",
            "<strong>Structured relaxation</strong>: Practice progressive muscle relaxation (PMR), where you systematically tense and then relax different muscle groups in your body. This technique helps reduce physical tension and calms the mind.",
            "<strong>Set boundaries</strong>: Learn to say no to overwhelming commitments. It’s crucial to set limits on what you can handle, both in professional and personal life, to avoid burnout.",
            "<strong>Lifestyle adjustments</strong>: Make lifestyle changes, such as eating a healthier diet, reducing alcohol intake, and cutting back on work hours or responsibilities when possible. These changes can lessen the strain on your body and mind.",
            "<strong>Stress diary</strong>: Keep a log of your symptoms and emotional responses throughout the day. This practice can help identify patterns, enabling you to recognize when stress is reaching critical levels and when additional support may be needed."
        ],
        "Very Severe": [
            "<strong>Emergency intervention</strong>: If you are feeling suicidal or in immediate distress, reach out to local crisis hotlines or go to the nearest emergency room for urgent care. It’s essential to act quickly in moments of extreme distress.",
            "<strong>Intensive therapy</strong>: Engage in long-term therapy programs with a mental health professional. Cognitive Behavioral Therapy (CBT) or Dialectical Behavior Therapy (DBT) can help restructure negative thought patterns and teach better emotional regulation.",
            "<strong>Mindfulness retreats</strong>: Consider enrolling in stress-relief programs or mindfulness retreats that focus on deep relaxation, emotional healing, and self-care. These retreats provide immersive environments for reflection and recovery.",
            "<strong>Crisis planning</strong>: Develop a stress management action plan with professional guidance. This plan should include steps for immediate relief and longer-term strategies for managing stress in the future.",
            "<strong>Avoid self-isolation</strong>: Even though it may feel easier to withdraw, staying connected with loved ones, friends, or support groups is crucial. Isolation can increase stress levels, so prioritize regular social interaction to stay grounded."
        ]
    };

    // Find the class with the highest score
    const highest = result.prediction.reduce((prev, current) =>
        prev.score > current.score ? prev : current
    );


    // // Generate a random recommendation for the determined stress level
    const generateRandomRecommendation = (highestClass) => {
        const categoryRecommendations = recommendationsByCategory[highestClass];
        const randomIndex = Math.floor(Math.random() * categoryRecommendations.length);
        return categoryRecommendations[randomIndex];
    };

    const randomRecommendation = generateRandomRecommendation(highest.class);

    // Loading screen
    if (loading) {
        return (
            <div className="result-component-loading-screen">
                <div className="result-component-loading-spinner"></div>
                <p className="result-component-loading-text">Analyzing your answers...</p>
            </div>
        );
    }

    
    // Result display
    return (
        <div className="result-component-container">
            <h1 className="result-title">Your Stress Level</h1>
            <div className="result-component-stress-level">
                <h2>Predicted Stress Level: {highest.class}</h2>
                <p>Total Stress Score: {`${(highest.score * 100).toFixed(0)}%`}</p>
                <button className='btn btn-link' onClick={() => setShowDetails(prev => !prev)}>
                    {showDetails ? 'Hide Detailed Insights' : 'Show Detailed Insights'}
                </button>
            </div>
            {showDetails && <Details/>}
            <div className="result-component-recommendations">
                <h2>Recommendation</h2>
                <p dangerouslySetInnerHTML={{ __html: randomRecommendation }}></p>
            </div>
            <button
                className="result-component-back-btn"
                onClick={() => navigate("/")}
            >
                Back to Homepage
            </button>
        </div>
    );
};

export default Result;
