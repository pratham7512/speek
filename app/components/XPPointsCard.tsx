'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const XPPointsCard = () => {
  const currentXP = 2450;
  const targetXP = 3000;
  const level = 12;
  const progress = (currentXP / targetXP) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#211f1e] border border-[#2a2826] rounded-lg p-5"
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-lg bg-[#2a2826] flex items-center justify-center">
          <Zap className="w-6 h-6" style={{ color: '#00a0d9' }} fill="#00a0d9" />
        </div>
        <div>
          <span className="text-2xl text-[#f6ebd9] tracking-tight">{currentXP.toLocaleString()} XP</span>
          <p className="text-xs text-[#f6ebd9]/50">Level {level}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-5">
        <div className="flex justify-between text-xs text-[#f6ebd9]/50 mb-2">
          <span>Progress to Level {level + 1}</span>
          <span>{targetXP - currentXP} XP left</span>
        </div>
        <div className="h-2 bg-[#2a2826] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: '#00a0d9' }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-3">
        <div className="flex-1 bg-[#2a2826] rounded-lg p-3">
          <span className="text-xs text-[#f6ebd9]/50 block mb-1">Accuracy</span>
          <span className="text-lg text-[#f6ebd9]">85%</span>
        </div>
        <div className="flex-1 bg-[#2a2826] rounded-lg p-3">
          <span className="text-xs text-[#f6ebd9]/50 block mb-1">Badges</span>
          <span className="text-lg text-[#f6ebd9]">24</span>
        </div>
        <div className="flex-1 bg-[#2a2826] rounded-lg p-3">
          <span className="text-xs text-[#f6ebd9]/50 block mb-1">Today</span>
          <span className="text-lg text-[#f6ebd9]">+120</span>
        </div>
      </div>
    </motion.div>
  );
};
