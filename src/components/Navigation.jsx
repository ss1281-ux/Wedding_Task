import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Navigation = ({ 
  currentQuestion, 
  totalQuestions, 
  isAnswerSelected,
  onPrevious, 
  onNext, 
  onSubmit 
}) => {
  const isLastQuestion = currentQuestion === totalQuestions - 1;

  return (
    <div className="flex justify-end gap-3 mt-8">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrevious}
        disabled={currentQuestion === 0}
        className={`p-3 rounded-xl transition-colors ${
          currentQuestion === 0
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-cyan-100 hover:bg-cyan-200 text-gray-700"
        }`}
      >
        <ChevronLeft size={24} />
      </motion.button>

      {!isLastQuestion ? (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="p-3 rounded-xl bg-cyan-100 hover:bg-cyan-200 text-gray-700 transition-colors"
        >
          <ChevronRight size={24} />
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onSubmit}
          disabled={!isAnswerSelected}
          className={`px-8 py-3 rounded-xl font-semibold transition-all ${
            isAnswerSelected
              ? "bg-cyan-200 hover:bg-cyan-300 text-gray-800"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Submit
        </motion.button>
      )}
    </div>
  );
};

export default Navigation;