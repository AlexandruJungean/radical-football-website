'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiArrowRight, HiCalendar, HiSparkles, HiUserGroup, HiClock, HiTicket } from 'react-icons/hi';
import { HiMapPin } from 'react-icons/hi2';
import Image from 'next/image';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Limit parallax effect to prevent performance issues
      const maxParallaxScroll = 800; // Stop parallax after 1000px of scroll
      const limitedScrollY = Math.min(currentScrollY, maxParallaxScroll);
      setScrollY(limitedScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] z-20">
        {/* Geometric Background Shapes with Parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Large angular shape from bottom right */}
          <div 
            className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[var(--color-primary-dark)] transform rotate-12 origin-bottom-right opacity-60"
            style={{ transform: `rotate(12deg) translateY(${scrollY * 0.1}px)` }}
          />
          
          {/* Large white angular shape behind player */}
          <div 
            className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-white transform rotate-6 origin-bottom-right opacity-10"
            style={{ transform: `rotate(6deg) translateY(${scrollY * 0.15}px)` }}
          />
          
          {/* Smaller shapes for depth with parallax */}
          <div 
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-[var(--color-primary-dark)] transform rotate-45 opacity-40 animate-spin-slow"
            style={{ transform: `rotate(45deg) translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[var(--color-accent)]/20 transform -rotate-12 opacity-30"
            style={{ transform: `rotate(-12deg) translateY(${scrollY * -0.2}px)` }}
          />
          
          {/* Additional geometric elements */}
          <div 
            className="absolute top-[10%] right-[20%] w-20 h-20 border-2 border-white/10 rounded-full"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            
            {/* Left Side - Text Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                                            {/* Main Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  <span className="block">Empowering <span className="text-[var(--color-accent)]">Young</span></span>
                  <span className="block">Players Through</span>
                  <span className="block text-[var(--color-accent)]">Football</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-lg">
                  Come together with fellow coaches and educators for two wonderful days of learning, sharing stories, and growing our community
                </p>

              

                             {/* Call-to-Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/conferences"
                    className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg hover:bg-[var(--color-accent)]/90 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold transform hover:scale-105"
                  >
                    <span>See Details</span>
                    <HiArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    href="/community"
                    className="text-white hover:text-[var(--color-accent)] transition-all duration-200 flex items-center space-x-2 text-lg font-semibold"
                  >
                    <span>Meet Us →</span>
                  </Link>
                </div>
            </div>

                         {/* Right Side - Conference Card */}
             <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
               <div className="relative">
                                                     {/* Main Conference Card */}
                   <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 max-w-md mx-auto overflow-hidden">
                     {/* Conference Image - Full Width */}
                     <div className="w-full">
                       <Image
                         src="/images/conference/conference-banner-p-800.png"
                         alt="Radical Football Conference 2024"
                         width={400}
                         height={200}
                         className="w-full h-48 object-cover"
                         priority
                       />
                     </div>

                     {/* Card Content */}
                     <div className="p-6">
                       {/* Conference Badge */}
                       <div className="flex items-center gap-3 mb-4">
                         <div className="w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                           <HiSparkles className="w-5 h-5 text-white" />
                         </div>
                         <div>
                           <h3 className="text-lg font-bold text-[var(--color-primary)]">Annual Conference 2024</h3>
                           <p className="text-sm text-gray-600">A gathering of football educators</p>
                         </div>
                       </div>

                       {/* Date and Time - Simplified */}
                       <div className="space-y-3 mb-6">
                         <div className="flex items-center gap-3">
                           <HiCalendar className="w-4 h-4 text-[var(--color-accent)]" />
                           <div>
                             <p className="font-semibold text-gray-900">August 16-17, 2024</p>
                             <p className="text-sm text-gray-600">Two wonderful days together</p>
                           </div>
                         </div>
                         
                         <div className="flex items-center gap-3">
                           <HiClock className="w-4 h-4 text-[var(--color-accent)]" />
                           <div>
                             <p className="font-semibold text-gray-900">9:00 AM - 6:00 PM</p>
                             <p className="text-sm text-gray-600">Plenty of time to connect</p>
                           </div>
                         </div>
                       </div>

                       {/* Venue - Simplified */}
                       <div className="bg-[var(--color-primary)]/5 rounded-xl p-4 mb-6">
                         <div className="flex items-center gap-2 mb-2">
                           <HiMapPin className="w-4 h-4 text-[var(--color-accent)]" />
                           <h4 className="font-bold text-[var(--color-primary)]">Hotel Impero</h4>
                         </div>
                         <p className="text-sm text-gray-700">Calea Aradului 9, Oradea</p>
                       </div>

                                               {/* CTA Button */}
                        <Link
                          href="/conferences/2024"
                          className="w-full bg-[var(--color-accent)] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[var(--color-accent)]/90 transition-all duration-200 flex items-center justify-center gap-2 text-base transform hover:scale-105"
                        >
                          <span>Get a Ticket</span>
                          <HiArrowRight className="w-4 h-4" />
                        </Link>
                     </div>
                  </div>

                 {/* Decorative Elements */}
                 <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--color-accent)]/20 rounded-full"></div>
                 <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[var(--color-primary)]/20 rounded-full"></div>
               </div>
             </div>
          </div>
        </div>


    </section>
  );
};

export default HeroSection; 