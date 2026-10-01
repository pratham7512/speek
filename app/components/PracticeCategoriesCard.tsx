'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Users, MessageCircle } from 'lucide-react';

interface Category {
  name: string;
  count: number;
  icon: React.ElementType;
}

const categories: Category[] = [
  { name: 'Behavioral', count: 24, icon: Brain },
  { name: 'Technical', count: 20, icon: Code },
  { name: 'Situational', count: 18, icon: Users },
  { name: 'General', count: 20, icon: MessageCircle },
];

export const PracticeCategoriesCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#141414] border border-[#1f2020] rounded-lg p-5"
    >
      <h2 className="text-base text-white font-medium mb-4">Practice Categories</h2>

      <div className="space-y-3">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-between p-3.5 bg-[#1a1a1a] border border-[#252525] rounded-lg cursor-pointer hover:bg-[#1f1f1f] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-[#252525] flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white/60" />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">{category.name}</p>
                  <p className="text-xs text-white/40">{category.count} questions</p>
                </div>
              </div>
              <svg
                className="w-4 h-4 text-white/30 group-hover:text-white/50 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
