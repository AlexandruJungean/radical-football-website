'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HiUserGroup, HiStar, HiArrowRight } from 'react-icons/hi';
import Header from '@/components/Header';
import { HiMapPin } from 'react-icons/hi2';
import CommunityMap from '@/components/CommunityMap';

export default function CommunityPage() {
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



  const communityStories = [
    {
      title: "Cluj's Youth Revolution",
      location: "Cluj-Napoca",
      description: "How 15 local clubs transformed their approach, creating happier players and better humans.",
      impact: "500+ children",
      image: "/images/young-players3.png"
    },
    {
      title: "Rural Football Renaissance",
      location: "Maramureș Villages",
      description: "Small communities proving that quality youth development doesn't require big budgets.",
      impact: "12 villages",
      image: "/images/coaching/IMG_7304 copy 1.png"
    },
    {
      title: "Parents as Partners",
      location: "Timișoara",
      description: "A program that educated parents to support rather than pressure their children.",
      impact: "200+ families",
      image: "/images/conference/IMG_7181 copy 1.png"
    }
  ];



  return (
    <main className="min-h-screen bg-white">
      <Header 
        title="Our Community"
        description="A growing movement of coaches, parents, and educators united by a shared vision for youth football"
      />

      {/* Founder Section */}
      <section 
        ref={(el) => { sectionsRef.current['board'] = el; }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.board ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Founder Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/comitee-board/flavius-andrisca-main.png"
                    alt="Flavius Andrișca - Founder of Radical Football"
                    width={600}
                    height={800}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Decorative Elements */}
                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--color-accent)] rounded-full opacity-20"></div>
                 <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--color-primary)] rounded-full opacity-20"></div>
              </div>

              {/* Founder Content */}
              <div className="space-y-6">
                <div className="inline-block bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-4 py-2 rounded-full text-sm font-semibold">
                   Our Founder
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Flavius Andrișca
                </h2>
                
                <p className="text-xl text-[var(--color-accent)] font-semibold">
                   Founder & Visionary
                </p>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Flavius is the heart and soul behind Radical Football. His journey began with a simple 
                    belief: that football is about so much more than just winning games.
                  </p>
                  
                  <p>
                    After years of working with young players, he realized that the most important 
                    lessons happen off the pitch—in the relationships we build, the values we share, 
                    and the community we create together.
                  </p>
                  
                  <p>
                    Radical Football was born from this vision: a movement that puts children first, 
                    relationships before results, and community above competition. It&apos;s not just about 
                    teaching football—it&apos;s about building better human beings.
                  </p>
                </div>

                {/* Founder's Quote */}
                <blockquote className="border-l-4 border-[var(--color-accent)] pl-6 italic text-gray-700 text-lg">
                  &quot;Football is the vehicle, but the destination is a stronger, more connected community 
                  where every child feels valued and supported.&quot;
                </blockquote>

                {/* Call to Action */}
                <div className="pt-4">
                  <button className="inline-flex items-center space-x-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-primary)] transition-colors duration-200 font-semibold">
                    <span>Learn More About Our Story</span>
                    <HiArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Romania Ambassador Section */}
      <section 
        ref={(el) => { sectionsRef.current['ambassador'] = el; }}
        className="py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.ambassador ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                          <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white">
                 <div className="flex items-center gap-2 mb-4">
                   <HiStar className="w-6 h-6 text-[var(--color-accent)]" />
                   <span className="text-[var(--color-accent)] font-semibold">Official Romania Ambassador</span>
                 </div>
                 
                 <h2 className="text-4xl font-bold mb-6">
                   Ionuț Rada
                 </h2>
                 
                 <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                   <p>
                   &quot;Being the Romania Ambassador for Radical Football is more than a title - it&apos;s a responsibility 
                   I carry with pride and purpose. Every day, I see the impact our philosophy has on young players, 
                   and it reinforces my belief that we&apos;re on the right path.&quot;
                   </p>
                   <p>
                   &quot;My role is to be a bridge - connecting international best practices with Romanian football culture, 
                   supporting coaches who want to change, and most importantly, being a voice for the children who 
                   deserve better from youth football.&quot;
                   </p>
                   <p>
                   &quot;Together with our community, we&apos;re not just changing how football is taught; we&apos;re changing lives. 
                   And that&apos;s what makes this movement so special.&quot;
                   </p>
                 </div>

                 <div className="mt-8 pt-8 border-t border-white/20">
                   <h3 className="text-xl font-semibold mb-4">Ambassador Responsibilities:</h3>
                   <ul className="space-y-2">
                     <li className="flex items-start gap-3">
                       <span className="text-[var(--color-accent)] mt-1">•</span>
                       <span>Supporting Romanian coaches in implementing child-centered approaches</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <span className="text-[var(--color-accent)] mt-1">•</span>
                       <span>Organizing local workshops and educational events</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <span className="text-[var(--color-accent)] mt-1">•</span>
                       <span>Building partnerships with clubs and organizations</span>
                     </li>
                     <li className="flex items-start gap-3">
                       <span className="text-[var(--color-accent)] mt-1">•</span>
                       <span>Representing Radical Football values in the Romanian football community</span>
                     </li>
                                      </ul>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/comitee-board/ionut-rada-main.png"
                      alt="Ionuț Rada"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[var(--color-accent)] rounded-full opacity-20" />
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-full opacity-20" />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Community Stories Section */}
      <section 
        ref={(el) => { sectionsRef.current['stories'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.stories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Community Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real impact happening across Romania
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {communityStories.map((story, index) => (
                <div
                  key={story.title}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ${
                    isVisible.stories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="relative h-56">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <HiMapPin className="w-4 h-4" />
                        <span className="text-sm">{story.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{story.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">{story.description}</p>
                    <div className="flex items-center gap-2">
                      <HiUserGroup className="w-5 h-5 text-[var(--color-accent)]" />
                      <span className="text-[var(--color-accent)] font-semibold">Impact: {story.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Map Section */}
      <section 
        ref={(el) => { sectionsRef.current['map'] = el; }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.map ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Find Your Community
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover Radical Football communities across Romania and connect with like-minded coaches
              </p>
            </div>

            <CommunityMap />
          </div>
        </div>
      </section>

      
    </main>
  );
}