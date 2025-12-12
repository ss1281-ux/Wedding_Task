import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CatMascot from './CatMascot';
import ProgressBar from './ProgressBar';
import QuestionDisplay from './QuestionDisplay';
import Navigation from './Navigation';

const QuizCard = ({
  currentQuestion,
  selectedAnswers,
  direction,
  onAnswerSelect,
  onNext,
  onPrevious,
  onSubmit,
  quizData,
}) => {
  const isAnswerSelected = selectedAnswers[currentQuestion] !== undefined;

  return (
    <div className="w-full max-w-4xl relative pt-40">
      {/* Cat mascot - only on first question */}
      <CatMascot show={currentQuestion === 0} />

      {/* Main card with gradient border */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="rounded-3xl p-4 shadow-2xl"
        style={{
          width: 'calc(100% + 10px)',
          background: 'linear-gradient(107.96deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)'
        }}
      >
        <div className="bg-white rounded-3xl p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-12 mt-16">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-serif italic font-extrabold bg-clip-text text-transparent mb-3"
            style={{
              fontWeight: 900,
              background: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Test Your Knowledge
          </motion.h1>
          <p className="text-gray-600 text-sm md:text-base">
            Answer all questions to see your results
          </p>
        </div>

        {/* Progress bars */}
        <ProgressBar total={quizData.length} current={currentQuestion} />

        {/* Question and answers */}
        <AnimatePresence mode="wait" custom={direction}>
          <QuestionDisplay
            key={currentQuestion}
            question={quizData[currentQuestion].question}
            options={quizData[currentQuestion].options}
            questionNumber={currentQuestion + 1}
            selectedAnswer={selectedAnswers[currentQuestion]}
            onAnswerSelect={onAnswerSelect}
            direction={direction}
          />
        </AnimatePresence>

        {/* Navigation */}
        <Navigation
          currentQuestion={currentQuestion}
          totalQuestions={quizData.length}
          isAnswerSelected={isAnswerSelected}
          onPrevious={onPrevious}
          onNext={onNext}
          onSubmit={onSubmit}
        />
        </div>
      </motion.div>
    </div>
  );
};

export default QuizCard;