'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SENTENCES = [
  "practice with peers",
  "master your answers",
  "confidence through repetition",
  "real interviews, real feedback",
  "prepare for success",
  "every question matters",
  "ace your next interview"
];

// Path Definitions
const PATH_UP = "M 0 30 Q 50 10 100 30 T 200 30 T 300 30 T 400 30";
const PATH_DOWN = "M 0 30 Q 50 50 100 30 T 200 30 T 300 30 T 400 30";

export const DotWaveWordLoop: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Hide text first
      setShowText(false);
      // Wait a bit, then show next sentence
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % SENTENCES.length);
        setShowText(true);
      }, 400); // Gap between sentences
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col justify-start w-full h-25">
      {/* Sentence Area - Above wave */}
      <div className="absolute top-0 left-0 h-8 w-full flex items-end justify-start z-10 pointer-events-none">
        <AnimatePresence mode="wait">
          {showText && (
            <WordBubble 
              key={wordIndex} 
              text={SENTENCES[wordIndex]}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Wave Area - Fixed position */}
      <div className="absolute bottom-0 left-0 h-12 w-full flex items-center justify-start z-0">
        <svg width="400" height="60" viewBox="0 0 400 60" className="opacity-50">
          <motion.path
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeWidth={1.5}
            strokeOpacity={0.5}
            animate={{
              d: [PATH_UP, PATH_DOWN, PATH_UP],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.4, 0, 0.6, 1],
            }}
          />
        </svg>
      </div>
    </div>
  );
};

const WordBubble = ({ text }: { text: string }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
      }}
      animate={{ 
        opacity: 1,
        transition: { 
          duration: 0.3, 
          ease: "easeOut" 
        }
      }}
      exit={{ 
        opacity: 0,
        transition: { 
          duration: 0.2, 
          ease: "easeIn" 
        } 
      }}
      className="w-full"
    >
      <span className="text-base font-light text-gray-300 tracking-[0.02em] lowercase">
        {text}
      </span>
    </motion.div>
  );
};
