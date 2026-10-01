'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Search, Bell } from 'lucide-react';

export const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');
  const pathname = usePathname();

  // Only show navbar on dashboard routes
  if (!pathname?.startsWith('/dashboard')) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-[#0c0a09]/60 backdrop-blur-md h-14 z-50 relative navbar-border">
      <div className="flex h-full items-center justify-between px-4">
        {/* Left: Logo */}
        <div className="flex items-start w-[380px] px-2 pt-4">
          <span className="text-5xl text-[#f5f5f4] leading-none tracking-[-0.05em]">*</span>
        </div>

        {/* Center: Search Bar - Centered between dashed line and right edge */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full bg-[#f6ebd9]/5 border border-[#f6ebd9]/10 rounded-md pl-9 pr-3 py-2 text-[14px] text-[#f6ebd9]/90 placeholder:text-[#f6ebd9]/40 focus:outline-none focus:border-[#f6ebd9]/20 focus:bg-[#f6ebd9]/8 transition-all duration-200"
            />
          </div>
        </div>

        {/* Right: Notification and Profile */}
        <div className="flex items-center gap-3 w-[160px] justify-end">
          <button className="relative p-2 rounded-md hover:bg-white/5 text-white/70 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/15 transition-colors cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

