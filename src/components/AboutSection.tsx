'use client';

import { useEffect, useRef, useState } from 'react';
import { HiHeart, HiUserGroup, HiAcademicCap } from 'react-icons/hi';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
              What We&apos;re About
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Radical Football is more than a movement - it&apos;s a philosophy that puts children at the heart of the beautiful game
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Simple Explanation */}
            <div className={`bg-gray-50 rounded-2xl p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mb-6">
                <HiHeart className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                Simple Philosophy
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe football should be about joy, learning, and personal growth. It&apos;s not about winning at all costs - 
                it&apos;s about developing confident, creative, and compassionate young people through the game they love.
              </p>
            </div>

            {/* Why Children First */}
            <div className={`bg-gray-50 rounded-2xl p-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mb-6">
                <HiUserGroup className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                Children First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every decision we make starts with one question: &quot;Is this best for the child?&quot; We focus on their 
                enjoyment, development, and well-being above results, trophies, or adult ambitions.
              </p>
            </div>

            {/* What Makes Us Different */}
            <div className={`bg-gray-50 rounded-2xl p-8 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mb-6">
                <HiAcademicCap className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                Different Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We challenge traditional coaching methods. Instead of drills and pressure, we promote play, creativity, 
                and autonomy. We educate coaches to be mentors and facilitators, not drill sergeants.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Join us in creating a football culture that truly serves our children
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;