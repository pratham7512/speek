'use client';

import { motion } from 'framer-motion';
import { FileText, Play } from 'lucide-react';

interface Resource {
  title: string;
  subtitle: string;
  type: 'article' | 'video';
}

const resources: Resource[] = [
  {
    title: '50 Most Common Interview...',
    subtitle: 'Updated 1 week ago',
    type: 'article',
  },
  {
    title: 'How to Master the STAR In...',
    subtitle: 'Updated 2 days ago',
    type: 'video',
  },
];

export const AIInterviewTipsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#211f1e] border border-[#2a2826] rounded-lg p-5"
    >
      <div className="mb-4">
        <h2 className="text-base text-[#f6ebd9]">Resources</h2>
        <p className="text-xs text-[#f6ebd9]/40 mt-1">Familiarize with common questions</p>
      </div>

      <div className="space-y-3">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            className="flex items-center gap-3 p-3 bg-[#2a2826] rounded-lg cursor-pointer hover:bg-[#333130] transition-colors group"
          >
            <div className="w-8 h-8 rounded-md bg-[#3a3836] flex items-center justify-center flex-shrink-0">
              {resource.type === 'article' ? (
                <FileText className="w-4 h-4 text-[#f6ebd9]/50" />
              ) : (
                <Play className="w-4 h-4 text-[#f6ebd9]/50" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-[#f6ebd9]/80 truncate">{resource.title}</p>
              <p className="text-xs text-[#f6ebd9]/40">{resource.subtitle}</p>
            </div>
            <svg
              className="w-4 h-4 text-[#f6ebd9]/30 group-hover:text-[#f6ebd9]/50 transition-colors flex-shrink-0"
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
