'use client';

import { motion } from 'framer-motion';
import { Flame, Coins } from 'lucide-react';

export const ProgressCard = () => {
  const currentStreak = 12;
  const longestStreak = 28;
  const totalStudyDays = 156;
  const xpEarned = 850;
  
  // Days of the week - true means completed
  const weekDays = [
    { day: 'Mon', completed: true },
    { day: 'Tue', completed: true },
    { day: 'Wed', completed: true },
    { day: 'Thu', completed: true },
    { day: 'Fri', completed: true },
    { day: 'Sat', completed: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#211f1e] border border-[#2a2826] rounded-lg p-7 h-full flex flex-col"
    >
      {/* Header */}
      <h2 className="text-2xl mb-6 text-[#f6ebd9]">Your Progress</h2>

      {/* Fire Icon and Streak */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f6ebd9' }}>
          <Flame className="w-6 h-6" style={{ color: '#211f1e' }} fill="#211f1e" />
        </div>
        <div>
          <span className="text-2xl font-medium" style={{ color: '#f6ebd9', fontFamily: "'EB Garamond', Georgia, serif" }}>{currentStreak} days</span>
          <p className="text-sm" style={{ color: '#f6ebd9' }}>current streak</p>
        </div>
      </div>

      {/* Week Days */}
      <div className="mb-6">
        <div className="flex gap-2">
          {weekDays.map((item, index) => (
            <div key={item.day} className="flex flex-col items-center gap-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="w-12 h-12 rounded-lg"
                style={{ 
                  backgroundColor: item.completed ? '#f6ebd9' : 'transparent',
                  border: item.completed ? 'none' : '1px solid #f6ebd9'
                }}
              />
              <span className="text-xs" style={{ color: '#f6ebd9' }}>{item.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 rounded-xl p-4 bg-[#f6ebd9]/10">
          <span className="text-2xl block text-[#f6ebd9]" style={{ fontFamily: "'EB Garamond', Georgia, serif" }}>{longestStreak} days</span>
          <span className="text-sm text-[#f6ebd9]/60">Longest Streak</span>
        </div>
        <div className="flex-1 rounded-xl p-4 bg-[#f6ebd9]/10">
          <span className="text-2xl block text-[#f6ebd9]" style={{ fontFamily: "'EB Garamond', Georgia, serif" }}>{totalStudyDays}</span>
          <span className="text-sm text-[#f6ebd9]/60">Total Study Days</span>
        </div>
      </div>

      {/* XP Progress Bar */}
      <div className="mt-auto pt-4">
        <div className="flex justify-between text-xs mb-2" style={{ color: '#f6ebd9' }}>
          <span>Level 12</span>
          <span>Level 13</span>
        </div>
        <div className="h-2 rounded-full" style={{ backgroundColor: 'rgba(246, 235, 217, 0.2)' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: '#f6ebd9' }}
            initial={{ width: 0 }}
            animate={{ width: '70%' }}
            transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          />
        </div>
      </div>

      {/* XP Earned */}
      <div className="flex items-center justify-center gap-2 pt-4">
        <Coins className="w-5 h-5" style={{ color: '#f6ebd9' }} />
        <span className="text-xl" style={{ color: '#f6ebd9' }}>+{xpEarned} XP Earned</span>
      </div>
    </motion.div>
  );
};
