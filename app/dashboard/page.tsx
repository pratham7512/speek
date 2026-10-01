'use client';

import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { StartPracticeCard } from '../components/StartPracticeCard';
import { UpcomingSessionsCard } from '../components/UpcomingSessionsCard';
import { ProgressCard } from '../components/ProgressCard';
import { ActivityHeatmap } from '../components/ActivityHeatmap';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

export default function Dashboard() {
  const username = 'Jake';
  
  // Get current date and greeting
  const getCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'short', day: 'numeric' };
    return now.toLocaleDateString('en-US', options);
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  const currentDate = getCurrentDate();
  const greeting = getGreeting();
  const interviewCount = 2; // Mock data - you can make this dynamic

  return (
    <div className="bg-[#0c0a09] h-screen overflow-hidden">
      <Navbar />
      
      {/* Container: Fixed height, split into sidebar and content */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* Left: Sidebar - Static, no scroll */}
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        
        {/* Right: Main Content - Scrollable */}
        <main className="flex-1 overflow-y-auto">
          <div className="w-full max-w-5xl mx-auto p-6 pt-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mb-8"
          >
            {/* Date */}
            <h2 className="text-[2.5rem] leading-tight tracking-tight text-[#f5f5f4] mb-5">
              {currentDate}
            </h2>
            
            {/* Greeting with Refresh */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg leading-tight tracking-tight text-[#f5f5f4]">
                {greeting}, {username}
              </h3>
              <button className="text-sm text-white/60 hover:text-white/80 transition-colors flex items-center gap-1.5">
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>

            {/* Main Message */}
            <p className="text-base leading-[1.8] text-white/60 max-w-3xl">
              {interviewCount > 0 ? (
                <>
                  You&apos;ve got <span className="text-white font-medium">{interviewCount} interview{interviewCount > 1 ? 's' : ''} scheduled</span> today. 
                  Review your <span className="text-white font-medium">upcoming sessions and practice questions</span> to prepare effectively. 
                  Take a moment to check your interview details and make sure you&apos;re ready for each session.
                </>
              ) : (
                <>
                  You&apos;ve got a quiet day ahead — no interviews scheduled. That said, your practice dashboard shows 
                  <span className="text-white font-medium"> upcoming sessions and practice resources</span> that need your attention. 
                  Take a moment to review what&apos;s available and schedule your next practice session.
                </>
              )}
            </p>
          </motion.div>

          {/* Main Content Grid - 60/40 layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-7">
            {/* Left Column - 60% */}
            <div className="lg:col-span-3 flex flex-col gap-7">
              <StartPracticeCard />
              <UpcomingSessionsCard />
            </div>

            {/* Right Column - 40% Streak card takes full height */}
            <div className="lg:col-span-2 flex flex-col">
              <ProgressCard />
            </div>
          </div>

          {/* Activity Heatmap */}
          <div className="mt-7 pb-10">
            <ActivityHeatmap />
          </div>
          </div>
        </main>
      </div>
    </div>
  );
}
