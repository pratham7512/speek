'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { DocumentIcon, BookIcon } from './Icons';

interface Resource {
  title: string;
  timeAgo: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const resources: Resource[] = [
  { title: 'How to Master the STAR Method', timeAgo: '2-days ago', Icon: DocumentIcon },
  { title: '50 Most Common Interview Questions', timeAgo: '1 week ago', Icon: BookIcon },
];

export const ResourcesCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#141414] border border-[#1f2020] rounded-lg p-7 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[17px] text-white leading-tight">
          Interview Tips & Resources
        </h2>
        <Link href="#" className="text-sm font-medium text-white/70 hover:text-white/90 transition-colors">
          View all &gt;
        </Link>
      </div>

      <div className="space-y-4">
        {resources.map((resource, index) => {
          const Icon = resource.Icon;
          return (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-5 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-md flex items-center justify-center text-white/60 flex-shrink-0">
                <Icon />
              </div>
              <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white group-hover:text-white/90 transition-colors mb-1 truncate leading-normal">
                      {resource.title}
                    </p>
                    <p className="text-sm text-white/70 font-medium leading-normal">
                  {resource.timeAgo}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

