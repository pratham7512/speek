'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface StatCardProps {
  label: string;
  value: number | string;
  suffix?: string;
  delay?: number;
  icon?: React.ReactNode;
}

export const StatCard = ({ label, value, suffix = '', delay = 0, icon }: StatCardProps) => {
  const [displayValue, setDisplayValue] = useState<number | string>(typeof value === 'number' ? 0 : value);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      if (typeof value === 'number') {
        const duration = 1000;
        const steps = 30;
        const increment = value / steps;
        const stepDuration = duration / steps;
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= value) {
            setDisplayValue(value);
            clearInterval(counter);
          } else {
            setDisplayValue(Math.floor(current));
          }
        }, stepDuration);
        
        return () => clearInterval(counter);
      } else {
        setDisplayValue(value);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#141414] border border-[#1f2020] rounded-lg p-6 backdrop-blur-sm"
    >
      <div className="flex items-start justify-between mb-3">
        <p className="text-xs font-medium text-white/45 tracking-[0.08em] uppercase">
          {label}
        </p>
        {icon && <div className="text-white/35">{icon}</div>}
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl text-white tracking-[-0.03em]">
          {displayValue}
        </span>
        {suffix && (
          <span className="text-base font-light text-white/55 tracking-[0.01em]">
            {suffix}
          </span>
        )}
      </div>
    </motion.div>
  );
};

