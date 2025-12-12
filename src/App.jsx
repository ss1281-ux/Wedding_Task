import React, { useState } from 'react';
import QuizCard from './components/QuizCard';
import ResultsScreen from './components/ResultsScreen';
import { quizData } from './data/quizData';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [direction, setDirection] = useState(0);

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: optionIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setDirection(1);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleStartAgain = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setDirection(0);
  };

  const calculateScore = () => {
    let correct = 0;
    quizData.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quizData.length) * 100);
  };

  if (showResults) {
    return (
      <ResultsScreen 
        score={calculateScore()} 
        onStartAgain={handleStartAgain} 
      />
    );
  }

  return (
    <div 
      className="flex items-center justify-center p-4"
      style={{
        width: '100vw',
        height: '100vh',
        maxWidth: '100vw',
        maxHeight: '100vh',
        overflow: 'auto',
        background: 'linear-gradient(107.96deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)'
      }}
    >
      <QuizCard
        currentQuestion={currentQuestion}
        selectedAnswers={selectedAnswers}
        direction={direction}
        onAnswerSelect={handleAnswerSelect}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onSubmit={handleSubmit}
        quizData={quizData}
      />
    </div>
  );
}

export default App;