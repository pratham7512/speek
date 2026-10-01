'use client';

import { motion } from 'framer-motion';

export const QuickActionsCard = () => {
  const actions = [
    { label: 'practice questions', icon: '📝', color: 'from-blue-500/20 to-blue-500/10' },
    { label: 'mock interviews', icon: '🎯', color: 'from-purple-500/20 to-purple-500/10' },
    { label: 'resources', icon: '📚', color: 'from-green-500/20 to-green-500/10' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#141414] border border-[#1f2020] rounded-lg p-6 backdrop-blur-sm"
    >
      <h2 className="text-xl text-white tracking-[-0.02em] mb-6">
        quick actions
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {actions.map((action, index) => (
          <motion.button
            key={action.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            className={`bg-gradient-to-br ${action.color} rounded-md p-4 transition-all duration-300 text-left group`}
          >
            <div className="text-2xl mb-2">{action.icon}</div>
            <p className="text-xs font-medium text-white/80 group-hover:text-white/95 tracking-[0.02em] uppercase">
              {action.label}
            </p>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

