// src/App.js
import React, { useState } from 'react';
import Questionnaire from './components/Questionnaire';
import Result from './components/Result';

const App = () => {
    const [answers, setAnswers] = useState(null);

    const handleComplete = (newAnswers) => {
        setAnswers(newAnswers);
    };

    return (
        <div className="App">
            <h1>Choose Your Major</h1>
            {answers === null ? (
                <Questionnaire onComplete={handleComplete} />
            ) : (
                <Result answers={answers} />
            )}
        </div>
    );
};

export default App;
