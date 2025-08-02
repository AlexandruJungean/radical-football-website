'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HiUsers, HiHeart, HiChat, HiPencil, HiShare, HiMicrophone, HiTranslate, HiCalendar, HiLightBulb, HiArrowRight } from 'react-icons/hi';

export default function GetInvolvedPage() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(sectionsRef.current).forEach((key) => {
      const section = sectionsRef.current[key];
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  const opportunities = [
    {
      icon: HiMicrophone,
      title: "Become a Speaker",
      description: "Share your expertise and inspire others at our conferences and workshops",
      requirements: [
        "Experience in youth football or child development",
        "Alignment with our child-centered philosophy",
        "Passion for sharing knowledge"
      ],
      cta: "Apply to Speak"
    },
    {
      icon: HiHeart,
      title: "Volunteer With Us",
      description: "Help organize events, support our programs, and make a difference in your community",
      requirements: [
        "Enthusiasm for our mission",
        "Reliable and committed",
        "Team player attitude"
      ],
      cta: "Join as Volunteer"
    },
    {
      icon: HiTranslate,
      title: "Help With Translations",
      description: "Make our resources accessible to more people by translating content",
      requirements: [
        "Fluency in Romanian and another language",
        "Understanding of football terminology",
        "Attention to detail"
      ],
      cta: "Become a Translator"
    }
  ];

  const shareOptions = [
    {
      icon: HiPencil,
      title: "Write Articles",
      description: "Share your insights, experiences, and knowledge through written content",
      examples: ["Coaching experiences", "Research findings", "Success stories", "Practical tips"]
    },
    {
      icon: HiChat,
      title: "Share Your Story",
      description: "Tell us how child-centered approaches have impacted you or your community",
      examples: ["Personal transformations", "Club changes", "Player development", "Parent perspectives"]
    },
    {
      icon: HiLightBulb,
      title: "Suggest Topics",
      description: "Help shape our content by suggesting topics for articles, podcasts, or conference sessions",
      examples: ["Emerging trends", "Common challenges", "Innovation ideas", "Community needs"]
    }
  ];

  const contributions = [
    {
      name: "Maria Popescu",
      role: "Youth Coach, Bucharest",
      contribution: "Created a series of video tutorials on age-appropriate games",
      impact: "Viewed by 5,000+ coaches",
      image: "/images/conference/IMG_7139 copy 1.png"
    },
    {
      name: "Alexandru Ionescu",
      role: "Parent & Volunteer",
      contribution: "Organized regional workshops for parent education",
      impact: "Reached 200+ families",
      image: "/images/conference/IMG_6849 copy 1.png"
    },
    {
      name: "Elena Gheorghe",
      role: "Sports Psychologist",
      contribution: "Developed mental health resources for young players",
      impact: "Used by 50+ clubs",
      image: "/images/conference/IMG_7211 copy 1.png"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-accent)] rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get Involved
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join our movement and help create positive change in youth football
          </p>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section 
        ref={(el) => { sectionsRef.current['team'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Join Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple ways to contribute your skills and passion to our mission
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {opportunities.map((opportunity, index) => (
                <div
                  key={opportunity.title}
                  className={`bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-700 ${
                    isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mb-6">
                    <opportunity.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                    {opportunity.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {opportunity.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-700 mb-3">What we're looking for:</h4>
                    <ul className="space-y-2">
                      {opportunity.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[var(--color-accent)] mt-1">•</span>
                          <span className="text-gray-600 text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-[var(--color-primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-primary-dark)] transition-colors">
                    {opportunity.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section 
        ref={(el) => { sectionsRef.current['share'] = el; }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.share ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Share Your Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your experiences and ideas can inspire and help others
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {shareOptions.map((option, index) => (
                <div
                  key={option.title}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 ${
                    isVisible.share ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center">
                      <option.icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">
                      {option.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {option.description}
                  </p>
                  
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {option.examples.map((example, idx) => (
                        <li key={idx} className="text-sm text-gray-600">• {example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[var(--color-primary)] rounded-3xl p-8 md:p-12 text-white text-center">
              <HiShare className="w-16 h-16 mx-auto mb-6 text-white/80" />
              <h3 className="text-3xl font-bold mb-4">
                Ready to Share?
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                We're always looking for authentic voices and fresh perspectives. 
                Your contribution could be exactly what someone needs to hear.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-full hover:bg-gray-100 transition-colors">
                  Submit Your Story
                </button>
                <button className="px-8 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)]/90 transition-colors">
                  Propose an Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Others Have Done Section */}
      <section 
        ref={(el) => { sectionsRef.current['examples'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.examples ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                What Others Have Done
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Be inspired by community members who are making a difference
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {contributions.map((contributor, index) => (
                <div
                  key={contributor.name}
                  className={`bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-700 ${
                    isVisible.examples ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="relative h-48">
                    <Image
                      src={contributor.image}
                      alt={contributor.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold">{contributor.name}</h3>
                      <p className="text-sm opacity-90">{contributor.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      {contributor.contribution}
                    </p>
                    <div className="flex items-center gap-2">
                      <HiHeart className="w-5 h-5 text-[var(--color-accent)]" />
                      <span className="text-[var(--color-accent)] font-semibold">
                        {contributor.impact}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Every contribution, no matter how small, helps build our movement
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)]/90 transition-colors"
              >
                Start Your Journey
                <HiArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Skills, Your Passion, Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you have hours to give or just a few minutes, whether you're an expert or just starting out, 
            there's a place for you in the Radical Football community.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-lg p-4 text-white">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm">Active Volunteers</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-white">
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-sm">Content Contributors</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-white">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm">Event Organizers</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-white">
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm">Languages Supported</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}