'use client';

import { motion } from 'framer-motion';

interface Interview {
  id: string;
  title: string;
  interviewer: string;
  date: string;
  time: string;
  type: string;
}

const upcomingInterviews: Interview[] = [
  {
    id: '1',
    title: 'Software Engineer - Frontend',
    interviewer: 'Sarah Chen',
    date: 'Dec 24',
    time: '2:00 PM',
    type: 'Technical',
  },
  {
    id: '2',
    title: 'Product Manager',
    interviewer: 'Michael Park',
    date: 'Dec 26',
    time: '10:00 AM',
    type: 'Behavioral',
  },
];

export const UpcomingInterviewCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="bg-white/3 border border-white/8 rounded-sm p-6 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl text-white tracking-[-0.02em]">
          upcoming interviews
        </h2>
        <span className="text-[10px] font-medium text-white/35 tracking-[0.08em] uppercase bg-white/5 px-2 py-1 rounded-sm">
          {upcomingInterviews.length}
        </span>
      </div>

      <div className="space-y-4">
        {upcomingInterviews.map((interview, index) => (
          <motion.div
            key={interview.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            className="border-t border-white/5 pt-4 first:border-t-0 first:pt-0"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="text-base font-medium text-white/95 tracking-[-0.01em] mb-1.5">
                  {interview.title}
                </h3>
                <p className="text-xs font-light text-white/50 tracking-[0.02em]">
                  with {interview.interviewer}
                </p>
              </div>
              <span className="text-[10px] font-medium text-white/50 bg-white/8 px-2.5 py-1 rounded-sm tracking-[0.05em] uppercase">
                {interview.type}
              </span>
            </div>
            <div className="flex items-center gap-4 mt-3">
              <span className="text-xs font-light text-white/55 tracking-[0.02em]">
                {interview.date}
              </span>
              <span className="text-xs font-light text-white/55 tracking-[0.02em]">
                {interview.time}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

