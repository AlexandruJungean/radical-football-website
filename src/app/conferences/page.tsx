'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiCalendar, HiUserGroup, HiAcademicCap, HiHeart, HiArrowRight, HiTicket, HiSparkles, HiPresentationChartLine, HiLocationMarker } from 'react-icons/hi';

export default function ConferencesPage() {
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

  const conferenceFeatures = [
    {
      icon: HiPresentationChartLine,
      title: "Theory Sessions",
      description: "Engaging presentations from international experts on child development and modern coaching"
    },
    {
      icon: HiUserGroup,
      title: "Practical Workshops",
      description: "Hands-on sessions where you experience child-centered approaches in action"
    },
    {
      icon: HiHeart,
      title: "Community Building",
      description: "Connect with like-minded coaches and educators who share your values"
    },
    {
      icon: HiAcademicCap,
      title: "Resource Sharing",
      description: "Access to materials, tools, and ongoing support for your journey"
    }
  ];

  const pastConferences = [
    {
      year: "2023",
      title: "Building Relationships Through Football",
      dates: "August 18-19, 2023",
      location: "Oradea, Romania",
      speakers: 8,
      attendees: 150,
      highlights: ["Focus on coach-player relationships", "Practical play-based sessions", "Parent education workshops"],
      image: "/images/conference-awards.png"
    },
    {
      year: "2022",
      title: "The Joy of Play",
      dates: "August 20-21, 2022",
      location: "Oradea, Romania",
      speakers: 6,
      attendees: 120,
      highlights: ["Importance of unstructured play", "Creative training methods", "Child psychology insights"],
      image: "/images/conference/IMG_7206 copy 1.png"
    },
    {
      year: "2021",
      title: "Rethinking Youth Football",
      dates: "September 4-5, 2021",
      location: "Online Conference",
      speakers: 10,
      attendees: 200,
      highlights: ["Global perspectives", "Virtual workshops", "Community discussions"],
      image: "/images/conference/IMG_6921 copy 1.png"
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
            Radical Football Conferences
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Transformative gatherings for coaches, educators, and anyone passionate about child-centered football
          </p>
        </div>
      </section>

      {/* Conference Overview Section */}
      <section 
        ref={(el) => { sectionsRef.current['overview'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.overview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                What Makes Us Different
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our conferences combine theory and practice in a unique format that challenges traditional thinking
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {conferenceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-700 ${
                    isVisible.overview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[var(--color-primary)] rounded-3xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">For Coaches</h3>
                  <p className="text-white/80">
                    Transform your approach with practical tools and philosophies that put children first
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">For Educators</h3>
                  <p className="text-white/80">
                    Discover how football can be a powerful tool for child development and learning
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">For Communities</h3>
                  <p className="text-white/80">
                    Build environments where every child can thrive through the beautiful game
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Conference Section */}
      <section 
        ref={(el) => { sectionsRef.current['current'] = el; }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <HiSparkles className="w-8 h-8 text-[var(--color-accent)]" />
                <span className="text-[var(--color-accent)] font-semibold text-lg">2024 Conference</span>
              </div>
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Empowering Young Players
              </h2>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-96">
                <Image
                  src="/images/conference/conference-banner.png"
                  alt="2024 Radical Football Conference"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 80vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    16-17 August 2024 • Hotel Impero, Oradea
                  </h3>
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <HiUserGroup className="w-5 h-5" />
                      <span>10+ International Speakers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiCalendar className="w-5 h-5" />
                      <span>2 Days of Learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HiHeart className="w-5 h-5" />
                      <span>Child-Centered Focus</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                      Conference Highlights
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--color-accent)] mt-1">•</span>
                        <span>Keynote presentations from world-renowned experts</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--color-accent)] mt-1">•</span>
                        <span>Interactive workshops and practical demonstrations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--color-accent)] mt-1">•</span>
                        <span>Panel discussions on modern youth development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--color-accent)] mt-1">•</span>
                        <span>Networking opportunities with progressive coaches</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                      Who Should Attend
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--color-accent)] mt-1">•</span>
                        <span>Youth football coaches seeking new approaches</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--color-accent)] mt-1">•</span>
                        <span>Club directors and program coordinators</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--color-accent)] mt-1">•</span>
                        <span>Teachers and educators interested in sports pedagogy</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[var(--color-accent)] mt-1">•</span>
                        <span>Parents who want to support their children better</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/conferences/2024"
                    className="group flex items-center justify-center px-8 py-4 bg-[var(--color-accent)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)]/90 transition-all duration-300"
                  >
                    View Full Details & Speakers
                    <HiArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/conferences/2024#tickets"
                    className="group flex items-center justify-center px-8 py-4 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-all duration-300"
                  >
                    <HiTicket className="mr-2 w-5 h-5" />
                    Get Your Tickets
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Conferences Section */}
      <section 
        ref={(el) => { sectionsRef.current['past'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.past ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Past Conferences
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A look back at our journey of transforming youth football
              </p>
            </div>

            <div className="space-y-8">
              {pastConferences.map((conference, index) => (
                <div
                  key={conference.year}
                  className={`bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-700 ${
                    isVisible.past ? 'opacity-100 translate-x-0' : 'opacity-0'
                  } ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className={`relative h-64 md:h-auto ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                      <Image
                        src={conference.image}
                        alt={`${conference.year} Conference`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      />
                    </div>
                    <div className={`p-8 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[var(--color-accent)] font-bold text-2xl">{conference.year}</span>
                        <div className="h-px bg-gray-300 flex-grow" />
                      </div>
                      <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3">
                        {conference.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <span className="flex items-center gap-1">
                          <HiCalendar className="w-4 h-4" />
                          {conference.dates}
                        </span>
                        <span className="flex items-center gap-1">
                          <HiLocationMarker className="w-4 h-4" />
                          {conference.location}
                        </span>
                      </div>
                      <div className="flex gap-8 mb-4">
                        <div>
                          <span className="text-3xl font-bold text-[var(--color-accent)]">{conference.speakers}</span>
                          <p className="text-sm text-gray-600">Speakers</p>
                        </div>
                        <div>
                          <span className="text-3xl font-bold text-[var(--color-accent)]">{conference.attendees}+</span>
                          <p className="text-sm text-gray-600">Attendees</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {conference.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-[var(--color-accent)] mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link
                        href={`/conferences/${conference.year}`}
                        className="inline-flex items-center text-[var(--color-accent)] font-semibold mt-4 hover:underline"
                      >
                        View Conference Details
                        <HiArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}