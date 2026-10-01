'use client';

import { motion } from 'framer-motion';

export const StartAIInterviewCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#211f1e] border border-[#2a2826] rounded-lg p-5"
    >
      <h2 className="text-base text-[#f6ebd9] mb-2">Start AI Mock Interview</h2>
      
      <p className="text-sm text-[#f6ebd9]/50 mb-5 max-w-xl">
        Ready to practice? Start an on-demand AI mock interview and get instant feedback.
      </p>
      
      <button className="px-5 py-2.5 bg-[#f6ebd9] text-[#211f1e] rounded-md hover:bg-[#f6ebd9]/90 transition-colors duration-200 text-sm">
        Start AI Interview
      </button>
    </motion.div>
  );
};
