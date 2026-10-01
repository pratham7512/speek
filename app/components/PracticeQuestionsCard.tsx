'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface QuestionCategory {
  name: string;
  count: number;
}

const categories: QuestionCategory[] = [
  { name: 'Behavioral', count: 24 },
  { name: 'Technical', count: 18 },
  { name: 'Situational', count: 15 },
  { name: 'General', count: 20 },
];

export const PracticeQuestionsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#141414] border border-[#1f2020] rounded-lg p-7 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[17px] text-white leading-tight">
          Practice Questions
        </h2>
        <Link href="#" className="text-sm font-medium text-white/70 hover:text-white/90 transition-colors">
          View all &gt;
        </Link>
      </div>

      <div className="space-y-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
            className="bg-[#141414] border border-[#1f2020] rounded-lg p-5 flex items-center justify-between cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <p className="text-sm font-medium text-white leading-normal">{category.name}</p>
              <p className="text-sm text-white/70 font-medium">({category.count} questions)</p>
            </div>
            <svg
              className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

