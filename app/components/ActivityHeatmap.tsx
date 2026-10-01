'use client';

import { motion } from 'framer-motion';

export const ActivityHeatmap = () => {
  // Generate mock data for 52 weeks x 7 days
  const generateHeatmapData = () => {
    const data = [];
    for (let week = 0; week < 52; week++) {
      const weekData = [];
      for (let day = 0; day < 7; day++) {
        // Random activity level: 0 = none, 1 = low, 2 = medium, 3 = high, 4 = very high
        const level = Math.random() > 0.3 ? Math.floor(Math.random() * 5) : 0;
        weekData.push(level);
      }
      data.push(weekData);
    }
    return data;
  };

  const heatmapData = generateHeatmapData();
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getActivityColor = (level: number) => {
    switch (level) {
      case 0: return '#2a2826';
      case 1: return 'rgba(83, 243, 153, 0.25)';
      case 2: return 'rgba(83, 243, 153, 0.5)';
      case 3: return 'rgba(83, 243, 153, 0.75)';
      case 4: return '#53f399';
      default: return '#2a2826';
    }
  };

  // Calculate total interviews
  const totalInterviews = heatmapData.flat().reduce((sum, level) => sum + (level > 0 ? level * 2 : 0), 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#211f1e] border border-[#2a2826] rounded-lg p-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-[#f6ebd9]">Activity</h2>
        <span className="text-sm text-[#f6ebd9]/60">{totalInterviews} interviews in the last year</span>
      </div>

      {/* Heatmap Grid */}
      <div className="w-full">
        <div className="flex gap-2">
          {/* Day labels */}
          <div className="flex flex-col gap-[3px] mr-3 pt-7">
            {days.map((day, index) => (
              <div key={index} className="h-[14px] text-[10px] text-[#f6ebd9]/40 flex items-center">
                {day}
              </div>
            ))}
          </div>

          {/* Weeks */}
          <div className="flex-1 flex flex-col">
            {/* Month labels */}
            <div className="flex mb-2">
              {months.map((month) => (
                <div 
                  key={month} 
                  className="flex-1 text-xs text-[#f6ebd9]/40"
                >
                  {month}
                </div>
              ))}
            </div>

            {/* Grid */}
            <div className="flex justify-between">
              {heatmapData.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.map((level, dayIndex) => (
                    <motion.div
                      key={`${weekIndex}-${dayIndex}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2, delay: weekIndex * 0.01 }}
                      className="w-[14px] h-[14px] rounded-[3px] cursor-pointer hover:ring-1 hover:ring-[#f6ebd9]/30"
                      style={{ backgroundColor: getActivityColor(level) }}
                      title={`${level > 0 ? level * 2 : 'No'} interviews`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-2 mt-5">
        <span className="text-xs text-[#f6ebd9]/40">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="w-[14px] h-[14px] rounded-[3px]"
            style={{ backgroundColor: getActivityColor(level) }}
          />
        ))}
        <span className="text-xs text-[#f6ebd9]/40">More</span>
      </div>
    </motion.div>
  );
};
