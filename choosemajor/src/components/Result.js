// src/components/Result.js
import React from 'react';

const Result = ({ answers }) => {
    const getRecommendation = () => {
        // Example logic for recommendations based on answers
        if (answers.includes("Math") && answers.includes("High Salary")) {
            return "Consider majoring in Engineering or Computer Science.";
        } else if (answers.includes("Arts")) {
            return "Consider majoring in Fine Arts or Design.";
        } else {
            return "Explore majors that align with your interests.";
        }
    };

    return (
        <div>
            <h2>Your Recommendation:</h2>
            <p>{getRecommendation()}</p>
        </div>
    );
};

export default Result;
