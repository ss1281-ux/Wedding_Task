import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CatMascot = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute left-8 bottom-4 z-10"
        >
          <div className="relative">
            <img src="/best_of_luck.svg" alt="Best of luck" className="absolute -top-10 -left-12 z-20" style={{ width: '120px', height: 'auto' }} />
            <img src="/cat-mascot.gif" alt="Cat mascot" className="w-24 h-24" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CatMascot;