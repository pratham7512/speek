'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Home, Folder, Target, Settings, Plus, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Sidebar = () => {
  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard' || pathname?.startsWith('/dashboard/');
  const [showProfileCard, setShowProfileCard] = useState(true);
  const completionPercentage = 65;

  if (!isDashboard) {
    return null;
  }

  const navItems = [
    { name: 'Home', href: '/dashboard', icon: Home },
    { name: 'Resources', href: '#', icon: Folder },
    { name: 'Practice', href: '#', icon: Target },
    { name: 'Settings', href: '#', icon: Settings },
  ];

  return (
    <aside className="w-[280px] h-screen bg-[#0c0a09] flex-shrink-0 relative sidebar-border-right">
      <div className="flex flex-col h-full px-4 pt-14">
        {/* Main Navigation */}
        <nav className="space-y-0.5 mb-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-[15px] hover:bg-[#f6ebd9]/5 transition-colors ${
                  isActive ? 'bg-[#f6ebd9]/10 text-[#f6ebd9]' : 'text-[#f6ebd9]/50'
                }`}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Start a community button */}
        <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-md text-[15px] text-[#f6ebd9]/90 hover:bg-[#f6ebd9]/5 border border-[#f6ebd9]/10 transition-colors mb-4">
          <Plus className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">Schedule interview</span>
        </button>

        {/* Complete Profile Card - Above bottom */}
        {showProfileCard && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-auto mb-16 relative rounded-lg p-4"
            style={{ backgroundColor: '#004d00' }}
          >
            {/* Close button */}
            <button
              onClick={() => setShowProfileCard(false)}
              className="absolute top-3 right-3 w-5 h-5 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header with checkmark icon */}
            <div className="flex items-center gap-2 mb-2 pr-6">
              <h3 className="text-base text-white leading-tight">
                Complete your profile
              </h3>
              <Check className="w-4 h-4 text-emerald-400" />
            </div>

            {/* Body text */}
            <p className="text-sm text-white/70 leading-relaxed mb-3">
              Get better matches and access premium features by completing your profile.
            </p>

            {/* Minimal progress bar */}
            <div className="mb-4">
              <div className="h-1 rounded-full overflow-hidden bg-white/20">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${completionPercentage}%` }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="h-full rounded-full bg-white"
                />
              </div>
            </div>

            {/* Button */}
            <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-md text-[15px] text-white/90 hover:bg-white/10 border border-white/20 transition-colors">
              Complete profile
            </button>
          </motion.div>
        )}
      </div>
    </aside>
  );
};
