'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { HiHeart, HiChatAlt, HiUserGroup } from 'react-icons/hi';

const CommunityHighlights = () => {
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

  const stories = [
    {
      title: "From Pressure to Play",
      author: "Maria, Youth Coach",
      location: "Cluj-Napoca",
      content: "After attending the conference, I completely changed my approach. Now my players smile more, create more, and most importantly - they love coming to training.",
      image: "/images/coaching/IMG_7261 copy.png",
      icon: HiHeart
    },
    {
      title: "Building Confidence",
      author: "Alexandru, Parent",
      location: "Bucharest",
      content: "The Radical Football philosophy helped my son rediscover his love for the game. He's more confident, makes his own decisions, and plays with freedom.",
      image: "/images/game/IMG_7004 copy.png",
      icon: HiChatAlt
    },
    {
      title: "Community Impact",
      author: "Răzvan, Club Director",
      location: "Oradea",
      content: "We've transformed our entire youth program. Parents are happier, coaches are more engaged, and the children are thriving both on and off the pitch.",
      image: "/images/coaching/IMG_7301 copy 1.png",
      icon: HiUserGroup
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
              Community Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from people making a difference in youth football across Romania
            </p>
          </div>

          {/* Stories Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {stories.map((story, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Story Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <story.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {story.author} • {story.location}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    "{story.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* How We're Making a Difference */}
          <div className="bg-[var(--color-primary)] rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  How We're Making a Difference Together
                </h3>
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  Across Romania, coaches, parents, and communities are embracing a new way of thinking about youth football. 
                  From small villages to major cities, the Radical Football movement is creating environments where children 
                  can play, learn, and grow without pressure.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">500+</div>
                    <div className="text-sm text-white/80">Coaches Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">50+</div>
                    <div className="text-sm text-white/80">Communities Reached</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">1000s</div>
                    <div className="text-sm text-white/80">Happy Children</div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image
                  src="/images/young-players-running.png"
                  alt="Young players enjoying football"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;