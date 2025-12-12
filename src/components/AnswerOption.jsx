import React, { useState } from 'react';
import { motion } from 'framer-motion';

const gradient = 'linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)';

const AnswerOption = ({ option, index, isSelected, onSelect }) => {
  const [hovered, setHovered] = useState(false);
  const useGradient = isSelected || hovered;

  const baseClasses = 'w-full p-5 rounded-2xl text-center font-medium transition-all';
  const selectedClasses = 'text-gray-800 shadow-md';
  const defaultClasses = 'bg-gray-50 text-gray-700 hover:bg-gray-100';

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(index)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-pressed={isSelected}
      className={`${baseClasses} ${isSelected ? selectedClasses : defaultClasses}`}
      style={useGradient ? { background: gradient } : undefined}
    >
      {option}
    </motion.button>
  );
};

export default AnswerOption;