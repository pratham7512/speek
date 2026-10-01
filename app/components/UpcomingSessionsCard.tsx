'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from './ui/carousel';

interface Session {
  date: string;
  time: string;
  interviewer: {
    name: string;
    title: string;
    bio: string;
    image: string;
  };
}

const sessions: Session[] = [
  { 
    date: 'Tomorrow',
    time: '1:00 PM',
    interviewer: {
      name: 'Lisa Wang',
      title: 'Tech Lead & Senior Engineer',
      bio: 'Specializing in system design and coding interviews with 8+ years at top tech companies.',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face',
    }
  },
  { 
    date: 'April 26',
    time: '3:00 PM',
    interviewer: {
      name: 'Alex Johnson',
      title: 'Senior Engineer & Mentor',
      bio: 'Expert in behavioral and system design interviews from Meta and Google experience.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    }
  },
  { 
    date: 'April 30',
    time: '5:00 PM',
    interviewer: {
      name: 'David Kim',
      title: 'Engineering Manager & Coach',
      bio: 'Leadership interview specialist with 500+ interviews conducted at Amazon.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    }
  },
];

const SessionProfileCard = ({ session }: { session: Session }) => {
  const { interviewer } = session;
  
  return (
    <div className="flex items-start gap-8">
      {/* Circular Profile Image with cyan filter */}
      <div className="flex-shrink-0">
        <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-[#f6ebd9]/20">
          <Image
            src={interviewer.image}
            alt={interviewer.name}
            fill
            className="object-cover grayscale"
          />
          {/* Warm overlay filter */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: '#f6ebd9', opacity: 0.3, mixBlendMode: 'overlay' }}
          />
        </div>
      </div>
      
      {/* Info */}
      <div className="flex flex-col items-start">
        <h3 className="text-xl leading-tight mb-1" style={{ color: '#f6ebd9' }}>
          {interviewer.name}
        </h3>
        <p className="text-sm mb-2" style={{ color: '#f6ebd9' }}>
          {interviewer.title}
        </p>
        <p className="text-sm leading-relaxed mb-4 max-w-sm" style={{ color: '#f6ebd9' }}>
          {interviewer.bio}
        </p>
        <button 
          className="px-6 py-2.5 bg-[#f6ebd9] text-[#211f1e] rounded-md hover:bg-[#f6ebd9]/90 transition-colors duration-200 text-sm flex items-center gap-2"
        >
          Join Session
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export const UpcomingSessionsCard = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    setSelectedIndex(api.selectedScrollSnap());

    const interval = setInterval(() => api.scrollNext(), 4000);

    return () => {
      clearInterval(interval);
      api?.off("select", onSelect);
    };
  }, [api]);

  const currentSession = sessions[selectedIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="bg-[#211f1e] border border-[#2a2826] rounded-lg p-7"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-[#f6ebd9]">Upcoming Sessions</h2>
        {currentSession && (
          <span className="text-sm" style={{ color: '#f6ebd9' }}>
            {currentSession.date}, {currentSession.time}
          </span>
        )}
      </div>

      {/* Session Carousel */}
      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        <CarouselContent>
          {sessions.map((session, index) => (
            <CarouselItem key={index} className="basis-full">
              <SessionProfileCard session={session} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
};
