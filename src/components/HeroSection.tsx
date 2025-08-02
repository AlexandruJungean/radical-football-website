'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ResponsiveImage from './ResponsiveImage';
import { HiArrowRight, HiCalendar, HiSparkles } from 'react-icons/hi';
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
                Building relationships, fostering education, and celebrating the joy of play in communities across Romania
              </p>

              {/* Event Information Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20 max-w-md shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-center gap-2 mb-4">
                  <HiSparkles className="w-5 h-5 text-[var(--color-accent)]" />
                  <span className="text-[var(--color-accent)] font-semibold">Annual Conference 2024</span>
                </div>
                
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <HiCalendar className="w-5 h-5 text-[var(--color-accent)]" />
                    <span className="text-white font-medium">16-17 August 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HiMapPin className="w-5 h-5 text-[var(--color-accent)]" />
                    <span className="text-white font-medium">Hotel Impero, Oradea</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-white/20">
                  <p className="text-white/80 text-sm">
                    Join 10+ international speakers for revolutionary football education
                  </p>
                </div>
              </div>

              {/* Call-to-Action Buttons */}
               <div className="flex flex-col sm:flex-row gap-4">
                 <Link
                   href="/conferences"
                   className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-lg hover:bg-[var(--color-primary-dark)] transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold transform hover:scale-105"
                 >
                   <span>Buy Ticket</span>
                   <HiArrowRight className="w-5 h-5" />
                 </Link>
                 <Link
                   href="/about"
                   className="text-white hover:text-[var(--color-accent)] transition-all duration-200 flex items-center space-x-2 text-lg font-semibold"
                 >
                   <span>View More →</span>
                 </Link>
               </div>
            </div>

            {/* Right Side - Player Image */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Player Image */}
                <div className="relative z-10">
                  <ResponsiveImage
                    src="/images/transparent-background/sliding-tackle.png"
                    alt="Young football player in sliding tackle action"
                    width={600}
                    height={800}
                    className="w-full h-auto max-w-lg mx-auto"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    srcSet="/images/transparent-background/sliding-tackle-p-500.png 500w, /images/transparent-background/sliding-tackle-p-800.png 800w, /images/transparent-background/sliding-tackle.png 1920w"
                    style={{
                      transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.1}px)`
                    }}
                  />
                </div>
                
                {/* Logo Icon as background element */}
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                  <ResponsiveImage
                    src="/logo/only-icon/logo-icon2.png"
                    alt="Radical Football Background"
                    width={600}
                    height={600}
                    className="w-[32rem] h-[32rem] object-contain"
                    sizes="(max-width: 768px) 80vw, 40vw"
                    srcSet="/logo/only-icon/logo-icon2-p-500.png 500w, /logo/only-icon/logo-icon2-p-800.png 800w, /logo/only-icon/logo-icon2-p-1080.png 1080w, /logo/only-icon/logo-icon2.png 1920w"
                    style={{
                      transform: `translateY(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0001})`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Football Particles */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => {
            // Create more natural, scattered positioning
            const positions = [
              { left: '15%', top: '20%' },
              { left: '75%', top: '15%' },
              { left: '25%', top: '60%' },
              { left: '80%', top: '70%' },
              { left: '10%', top: '75%' },
              { left: '60%', top: '25%' },
              { left: '45%', top: '85%' },
              { left: '85%', top: '45%' }
            ];
            
            return (
              <div
                key={i}
                className={`absolute animate-float-${i % 3 + 1}`}
                style={{
                  left: positions[i].left,
                  top: positions[i].top,
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: `${8 + (i % 3) * 2}s`,
                  transform: `translateY(${scrollY * (0.1 + i * 0.02)}px) scale(${0.6 + (i % 3) * 0.2})`
                }}
              >
                <div className="relative group">
                  <Image
                    src="/icons/ball-64x64.svg"
                    alt=""
                    width={i % 3 === 0 ? 40 : i % 3 === 1 ? 32 : 24}
                    height={i % 3 === 0 ? 40 : i % 3 === 1 ? 32 : 24}
                    className={`opacity-30 hover:opacity-60 transition-opacity duration-300 ${
                      i % 2 === 0 ? 'animate-spin-slow' : ''
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-25px) rotate(120deg);
          }
          66% {
            transform: translateY(15px) rotate(240deg);
          }
        }
        @keyframes float-2 {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }
        @keyframes float-3 {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
          }
          75% {
            transform: translateY(25px) rotate(270deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-float-1 {
          animation: float-1 8s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 10s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 12s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 