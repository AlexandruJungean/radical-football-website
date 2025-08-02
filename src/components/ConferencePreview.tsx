'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiArrowRight, HiUserGroup, HiAcademicCap, HiHeart, HiSparkles } from 'react-icons/hi';

const ConferencePreview = () => {
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

  const conferenceFeatures = [
    {
      icon: HiUserGroup,
      title: "10+ International Speakers",
      description: "Learn from the best minds in youth football development"
    },
    {
      icon: HiAcademicCap,
      title: "Theory & Practice",
      description: "Balanced approach combining knowledge with hands-on experience"
    },
    {
      icon: HiHeart,
      title: "Child-Centered Focus",
      description: "Everything we do puts the child's development first"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent)] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <HiSparkles className="w-8 h-8 text-[var(--color-accent)]" />
              <span className="text-[var(--color-accent)] font-semibold text-lg">Annual Conference 2024</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Radical Football Conference
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Two days of revolutionary thinking about youth football
            </p>
          </div>

          {/* Conference Info Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - What to Expect */}
            <div className="space-y-8">
              <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h3 className="text-3xl font-bold text-white mb-6">What to Expect</h3>
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  Join coaches, educators, and football enthusiasts from around the world for two transformative days. 
                  Experience presentations, workshops, and discussions that challenge traditional approaches and 
                  celebrate child-centered football development.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-6">
                {conferenceFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Conference Card */}
            <div className={`transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                {/* Conference Image */}
                <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
                  <Image
                    src="/images/conference/conference-banner.png"
                    alt="Radical Football Conference"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-2xl font-bold text-white mb-2">
                      16-17 August 2024
                    </h4>
                    <p className="text-white/90">Hotel Impero, Oradea, Romania</p>
                  </div>
                </div>

                {/* Why You Should Come */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-2xl font-bold text-[var(--color-primary)]">Why You Should Come</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--color-accent)] mt-1">•</span>
                      <span className="text-gray-700">Challenge your coaching philosophy and methods</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--color-accent)] mt-1">•</span>
                      <span className="text-gray-700">Connect with like-minded coaches and educators</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--color-accent)] mt-1">•</span>
                      <span className="text-gray-700">Learn practical approaches that put children first</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[var(--color-accent)] mt-1">•</span>
                      <span className="text-gray-700">Be part of a movement changing youth football</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <Link
                  href="/conferences/2024"
                  className="group flex items-center justify-center w-full px-6 py-4 bg-[var(--color-accent)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)]/90 transition-all duration-300"
                >
                  View Full Conference Details
                  <HiArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="text-center">
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transform your approach to youth football. Join us for presentations, workshops, 
              and conversations that will change how you think about coaching young players.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferencePreview;