import React from 'react';
import { motion } from 'framer-motion';

const ProgressBar = ({ total, current }) => {
  return (
    <div className="flex gap-2 mb-8">
      {Array.from({ length: total }).map((_, index) => (
        <motion.div
          key={index}
          className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: index <= current ? "100%" : "0%",
            }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gray-800 rounded-full"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProgressBar;