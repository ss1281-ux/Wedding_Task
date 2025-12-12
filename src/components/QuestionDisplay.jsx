import React from 'react';
import { motion } from 'framer-motion';
import AnswerOption from './AnswerOption';

const QuestionDisplay = ({ 
  question, 
  options, 
  questionNumber, 
  selectedAnswer, 
  onAnswerSelect,
  direction 
}) => {
  const variants = {
    // Simple fade-only variants for enter/center/exit
    enter: () => ({ opacity: 0 }),
    center: { opacity: 1 },
    exit: () => ({ opacity: 0 }),
  };

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        opacity: { duration: 0.35, ease: 'easeInOut' },
      }}
    >
      {/* Question */}
      <div className="rounded-2xl p-6 mb-6 text-center" style={{ background: 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)' }}>
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          {questionNumber}. {question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            index={index}
            isSelected={selectedAnswer === index}
            onSelect={onAnswerSelect}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default QuestionDisplay;