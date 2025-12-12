import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResultsScreen = ({ score, onStartAgain }) => {
  const [display, setDisplay] = useState(0);
  const stepTime = 35; // ms per increment step, slower for visibility
  useEffect(() => {
    setDisplay(0);
    if (score === 0) return;
    let current = 0;
    const increment = () => {
      current++;
      setDisplay(current);
      if (current >= Math.round(score)) {
        clearInterval(timer);
      }
    };
    const timer = setInterval(increment, stepTime);
    return () => clearInterval(timer);
  }, [score]);

  // cubic ease-out
  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{
      background: 'linear-gradient(107.96deg, #BECFEE 0%, #71C6E2 50%, #D9F4FA 75%, #BECFEE 100%)'
    }}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl"
      >
        <div className="bg-white rounded-3xl p-12 text-center">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
            className="inline-block bg-white px-6 py-2 rounded-full shadow-sm mb-8 text-gray-700 font-medium"
          >
            Keep Learning!
          </motion.div>

          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="text-4xl md:text-5xl font-serif italic text-teal-700 mb-6"
          >
            Your Final score is
          </motion.h2>

          <div className="mb-6 flex items-center justify-center">
            <div style={{ overflow: 'hidden', height: 140 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={display}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: -20, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{ duration: 0.10 }}
                  className="text-8xl md:text-9xl font-serif font-bold text-teal-800"
                >
                  {display}
                  <span className="text-6xl md:text-7xl">%</span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onStartAgain}
            className="mt-4 bg-cyan-200 hover:bg-cyan-300 text-gray-800 font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Start Again
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultsScreen;

