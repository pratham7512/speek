'use client';

import { motion } from 'framer-motion';

export const StartPracticeCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#211f1e] border border-[#2a2826] rounded-lg p-7"
    >
      <h2 className="text-2xl text-[#f6ebd9] leading-tight mb-6">
        Start New Practice
      </h2>
      
      <p className="text-sm text-[#f6ebd9]/60 leading-relaxed mb-6">
        Start practicing interviews with peers instantly. Securely connect with other users and practice real interview scenarios together.
      </p>
      
      <div className="flex gap-3">
        <button className="px-6 py-2.5 bg-[#f6ebd9] text-[#211f1e] rounded-md hover:bg-[#f6ebd9]/90 transition-colors duration-200 text-sm">
          Quick Start
        </button>
        <button className="px-6 py-2.5 bg-transparent border border-[#f6ebd9]/20 text-[#f6ebd9] rounded-md hover:bg-[#f6ebd9]/10 transition-colors duration-200 text-sm">
          Schedule Session
        </button>
      </div>
    </motion.div>
  );
};
