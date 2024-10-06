// src/components/Questionnaire.js
import React, { useState } from 'react';

const questions = [
    {
        question: "What subjects do you enjoy the most?",
        options: ["Math", "Science", "Arts", "Literature"],
    },
    {
        question: "What type of work environment do you prefer?",
        options: ["Office", "Outdoor", "Remote", "Laboratory"],
    },
    {
        question: "What is your career goal?",
        options: ["High Salary", "Job Security", "Creativity", "Making an Impact"],
    },
];

const Questionnaire = ({ onComplete }) => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleAnswer = (answer) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = answer;
        setAnswers(newAnswers);

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            onComplete(newAnswers);
        }
    };

    return (
        <div>
            <h2>{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].options.map((option) => (
                <button key={option} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Questionnaire;
