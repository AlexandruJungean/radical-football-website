'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { HiBookOpen, HiPlay, HiNewspaper, HiArrowRight, HiDocumentText, HiMicrophone } from 'react-icons/hi';

const ResourcesSpotlight = () => {
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

  const latestResources = [
    {
      type: 'article',
      icon: HiDocumentText,
      title: 'The Importance of Free Play in Youth Development',
      excerpt: 'Exploring how unstructured play contributes to creativity, decision-making, and social skills in young footballers.',
      author: 'Dr. Elena Popescu',
      date: 'December 2024',
      link: '/resources/articles/free-play-development'
    },
    {
      type: 'podcast',
      icon: HiMicrophone,
      title: 'Conversations with Coaches: Changing Mindsets',
      excerpt: 'Listen to coaches share their journey from traditional methods to child-centered approaches.',
      author: 'Radical Football Podcast',
      date: 'December 2024',
      link: '/resources/podcasts/changing-mindsets'
    },
    {
      type: 'video',
      icon: HiPlay,
      title: 'Creating Joy in Training Sessions',
      excerpt: 'Practical examples of how to design training that children love while still developing their skills.',
      author: 'Coach Mihai Ionescu',
      date: 'November 2024',
      link: '/resources/videos/joy-in-training'
    }
  ];

  const resourceTypes = [
    { icon: HiDocumentText, label: 'Articles', count: '50+', color: 'bg-blue-500' },
    { icon: HiMicrophone, label: 'Podcasts', count: '20+', color: 'bg-purple-500' },
    { icon: HiPlay, label: 'Videos', count: '30+', color: 'bg-red-500' },
    { icon: HiBookOpen, label: 'Guides', count: '15+', color: 'bg-green-500' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-4">
              Resources Spotlight
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our growing library of articles, videos, podcasts, and guides to support your journey
            </p>
          </div>

          {/* Latest Resources Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {latestResources.map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className={`group bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                {/* Resource Type Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center">
                    <resource.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <span className="text-sm text-gray-500">{resource.date}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {resource.excerpt}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  by {resource.author}
                </p>

                {/* Read More Link */}
                <div className="flex items-center text-[var(--color-accent)] font-semibold">
                  <span className="group-hover:mr-2 transition-all">
                    {resource.type === 'article' ? 'Read Article' : 
                     resource.type === 'podcast' ? 'Listen Now' : 
                     'Watch Video'}
                  </span>
                  <HiArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          {/* Resource Types Overview */}
          <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Explore Our Full Library
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Access a wealth of knowledge from experts, practitioners, and community members. 
                  All resources are carefully curated to support child-centered football development.
                </p>

                {/* Resource Type Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {resourceTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${type.color} rounded-lg flex items-center justify-center`}>
                        <type.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{type.count}</div>
                        <div className="text-white/70 text-sm">{type.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/resources"
                  className="group inline-flex items-center px-6 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300"
                >
                  Browse All Resources
                  <HiArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Magazine Preview */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <HiNewspaper className="w-8 h-8 text-[var(--color-accent)]" />
                  <span className="text-[var(--color-accent)] font-semibold">Latest Magazine Issue</span>
                </div>
                <h4 className="text-2xl font-bold text-[var(--color-primary)] mb-3">
                  Radical Football Magazine
                </h4>
                <p className="text-gray-600 mb-4">
                  Issue #5: "The Power of Play"
                </p>
                <p className="text-gray-700 mb-6">
                  Featuring interviews with leading coaches, case studies from successful programs, 
                  and practical tips for implementing child-centered approaches.
                </p>
                <Link
                  href="/resources/magazine"
                  className="text-[var(--color-accent)] font-semibold hover:underline"
                >
                  Read Latest Issue →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSpotlight;