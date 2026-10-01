'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const ProfileCompletionCard = () => {
  const completionPercentage = 65;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#141414] border border-[#1f2020] rounded-lg p-6 backdrop-blur-sm"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg text-white tracking-[-0.02em] mb-1.5">
            complete your profile
          </h3>
          <p className="text-sm font-light text-white/50 tracking-[0.02em]">
            {completionPercentage}% complete
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completionPercentage}%` }}
            transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="h-full bg-gradient-to-r from-white/90 to-white/70 rounded-full"
          />
        </div>
      </div>

      <Link
        href="#"
        className="inline-block text-sm font-medium text-white/90 hover:text-white transition-colors duration-200 tracking-[0.02em] uppercase"
      >
        complete now →
      </Link>
    </motion.div>
  );
};

