'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HiHeart, HiBookOpen, HiDownload, HiSparkles, HiUserGroup, HiAcademicCap } from 'react-icons/hi';
import Header from '@/components/Header';

export default function AboutPage() {
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

  const values = [
    {
      title: "Child-Centered Approach",
      description: "Every decision starts with the question: 'Is this best for the child?' We prioritize development over results.",
      icon: HiHeart
    },
    {
      title: "Relationships Before Results",
      description: "Strong connections between coaches, players, and parents create the foundation for meaningful development.",
      icon: HiUserGroup
    },
    {
      title: "Learning Through Play",
      description: "We believe the best learning happens when children are engaged, enjoying themselves, and making their own discoveries.",
      icon: HiSparkles
    },
    {
      title: "Holistic Development",
      description: "Football is a tool for developing confident, creative, and caring human beings, not just skilled players.",
      icon: HiAcademicCap
    }
  ];

  const ethicsPoints = [
    "Put the child's well-being above winning",
    "Create environments where every child feels valued",
    "Encourage creativity and decision-making",
    "Focus on long-term development, not short-term results",
    "Build positive relationships with all stakeholders",
    "Respect each child's unique journey and pace",
    "Promote joy and love for the game",
    "Be a positive role model on and off the field"
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header 
        title="About Radical Football"
        description="A movement reimagining youth football to put children first, foster joy, and build communities"
      />

      {/* Our Story Section */}
      <section 
        ref={(el) => { sectionsRef.current['story'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Radical Football began as a simple question: &quot;What if we put children&apos;s happiness and development 
                  before winning?&quot; This question, asked by founder Flavius Andrișca, sparked a movement that is 
                  transforming youth football across Romania.
                </p>
                <p className="text-lg leading-relaxed">
                  Starting with small workshops and conversations with like-minded coaches, Radical Football has 
                  grown into a community of hundreds of coaches, parents, and educators who believe in a different 
                  way of approaching youth sports.
                </p>
                <p className="text-lg leading-relaxed">
                  Our journey has taken us from local training sessions to international conferences, from small 
                  villages to major cities, always with the same mission: creating environments where children can 
                  play, learn, and grow without pressure.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/conference/IMG_7129 copy 1.png"
                  alt="Radical Football community gathering of coaches and parents"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-accent)] rounded-full opacity-20" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[var(--color-primary)] rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section 
        ref={(el) => { sectionsRef.current['believe'] = el; }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.believe ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                What We Believe
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our core values guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 ${
                    isVisible.believe ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-[var(--color-primary)] rounded-3xl p-8 md:p-12 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-bold mb-6">
                  What Drives Us
                </h3>
                <p className="text-lg leading-relaxed mb-6">
                  We dream of a world where every child experiences football as a source of joy, learning, and 
                  personal growth. Where coaches are mentors and guides, not drill sergeants. Where parents 
                  support and encourage, not pressure and criticize. Where communities come together to create 
                  positive environments for all children to thrive.
                </p>
                <p className="text-xl font-semibold text-[var(--color-accent)]">
                  This is not just about changing football. It&apos;s about changing lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Code of Ethics Section */}
      <section 
        ref={(el) => { sectionsRef.current['ethics'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.ethics ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Our Code of Ethics
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide every coach, parent, and member of our community
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                  The Principles We Live By
                </h3>
                <div className="space-y-4">
                  {ethicsPoints.map((point, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 transition-all duration-500 ${
                        isVisible.ethics ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}
                      style={{ transitionDelay: `${200 + index * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-[var(--color-accent)] rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700 text-lg">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <HiBookOpen className="w-8 h-8 text-[var(--color-accent)]" />
                  <h3 className="text-2xl font-bold text-[var(--color-primary)]">
                    Download Our Full Code
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Our comprehensive Code of Ethics provides detailed guidance for coaches, parents, and 
                  organizations on implementing child-centered approaches in youth football.
                </p>
                <div className="space-y-4">
                  <button className="w-full bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors flex items-center justify-center gap-2">
                    <HiDownload className="w-5 h-5" />
                    Download Code of Ethics (PDF)
                  </button>
                  <p className="text-sm text-gray-500 text-center">
                    Available in Romanian and English
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Join us in creating a better future for youth football
              </p>
              <a
                href="/get-involved"
                className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}