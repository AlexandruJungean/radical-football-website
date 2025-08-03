'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HiHeart, HiUserGroup, HiStar, HiGlobe, HiSparkles } from 'react-icons/hi';
import Header from '@/components/Header';
import { HiMapPin } from 'react-icons/hi2';

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

  const boardMembers = [
    {
      name: "Flavius Andrișca",
      role: "Founder & Board Member",
      symbolicRole: "Vision Keeper",
      affiliation: "Radical Football",
      image: "/images/comitee-board/flavius-andrisca-main.png",
      description: "Driving force behind the movement, ensuring we stay true to our child-centered philosophy."
    },
    {
      name: "Dr. Elena Popescu",
      role: "Board Member",
      symbolicRole: "Honorary Co-Founder",
      affiliation: "University of Bucharest",
      image: "/images/conference/IMG_7115 copy.png",
      description: "Child development expert bringing academic rigor to our practical approaches."
    },
    {
      name: "Mihai Ionescu",
      role: "Board Member",
      symbolicRole: "Thematic Consultant",
      affiliation: "Romanian Football Federation",
      image: "/images/conference/IMG_7120 copy.png",
      description: "Bridging the gap between grassroots movements and official football structures."
    },
    {
      name: "Ana Maria Gheorghe",
      role: "Board Member",
      symbolicRole: "Speaker Selection Mentor",
      affiliation: "International Coach Educator",
      image: "/images/conference/IMG_7119 copy.png",
      description: "Curating world-class speakers who align with our values and vision."
    }
  ];

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

  const volunteers = [
    { name: "Translation Team", count: 15, description: "Making resources available in multiple languages" },
    { name: "Content Creators", count: 8, description: "Sharing stories and creating educational materials" },
    { name: "Event Organizers", count: 20, description: "Bringing the community together through local events" },
    { name: "Mentor Coaches", count: 30, description: "Supporting new coaches on their journey" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header 
        title="Our Community"
        description="A growing movement of coaches, parents, and educators united by a shared vision for youth football"
      />

      {/* Committee Board Section */}
      <section 
        ref={(el) => { sectionsRef.current['board'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.board ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Committee Board
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A group of people who support us in maintaining the pedagogical and human relevance of the conference, year after year
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {boardMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-700 ${
                    isVisible.board ? 'opacity-100 translate-x-0' : 'opacity-0'
                  } ${index % 2 === 0 ? '-translate-x-10' : 'translate-x-10'}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex gap-6">
                    <div className="relative w-32 h-32 flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full"
                        sizes="128px"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-1">
                        {member.name}
                      </h3>
                      <p className="text-[var(--color-accent)] font-semibold mb-1">
                        {member.symbolicRole}
                      </p>
                      <p className="text-gray-600 text-sm mb-3">
                        {member.role} • {member.affiliation}
                      </p>
                      <p className="text-gray-700">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                We&apos;re always looking for passionate individuals to join our mission
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)]/90 transition-colors">
                <HiSparkles className="mr-2 w-5 h-5" />
                Apply to Join the Board
              </button>
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

      {/* Where We Are Section */}
      <section 
        ref={(el) => { sectionsRef.current['locations'] = el; }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.locations ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Where We Are
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our movement is spreading across Romania and beyond
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                  Active Communities
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <span className="font-semibold text-gray-800">Bucharest</span>
                    <span className="text-[var(--color-accent)]">25 clubs</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <span className="font-semibold text-gray-800">Cluj-Napoca</span>
                    <span className="text-[var(--color-accent)]">15 clubs</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <span className="font-semibold text-gray-800">Timișoara</span>
                    <span className="text-[var(--color-accent)]">12 clubs</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <span className="font-semibold text-gray-800">Oradea</span>
                    <span className="text-[var(--color-accent)]">18 clubs</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <span className="font-semibold text-gray-800">Constanța</span>
                    <span className="text-[var(--color-accent)]">8 clubs</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <span className="font-semibold text-gray-800">Rural Areas</span>
                    <span className="text-[var(--color-accent)]">30+ villages</span>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--color-primary)] rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <HiGlobe className="w-8 h-8 text-[var(--color-accent)]" />
                  <h3 className="text-2xl font-bold">Growing International Presence</h3>
                </div>
                <p className="mb-6 text-white/90">
                  While our roots are in Romania, our philosophy is spreading internationally through 
                  partnerships and collaborations with like-minded organizations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold text-[var(--color-accent)]">100+</div>
                    <div className="text-sm">Active Clubs</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold text-[var(--color-accent)]">50+</div>
                    <div className="text-sm">Cities & Villages</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold text-[var(--color-accent)]">500+</div>
                    <div className="text-sm">Trained Coaches</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg">
                    <div className="text-3xl font-bold text-[var(--color-accent)]">10K+</div>
                    <div className="text-sm">Happy Children</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers & Contributors Section */}
      <section 
        ref={(el) => { sectionsRef.current['volunteers'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.volunteers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Our Volunteers & Contributors
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The amazing people who make our movement possible
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {volunteers.map((group, index) => (
                <div
                  key={group.name}
                  className={`bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-700 ${
                    isVisible.volunteers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">{group.name}</h3>
                    <span className="text-3xl font-bold text-[var(--color-accent)]">{group.count}</span>
                  </div>
                  <p className="text-gray-600">{group.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-[var(--color-accent)] rounded-3xl p-8 md:p-12 text-white text-center">
              <HiHeart className="w-16 h-16 mx-auto mb-6 text-white/80" />
              <h3 className="text-3xl font-bold mb-4">
                Thank You to Our Community
              </h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90">
                Every coach who changes their approach, every parent who supports rather than pressures, 
                every volunteer who gives their time - you are all part of this transformation.
              </p>
              <p className="text-lg font-semibold">
                Together, we&apos;re creating a better future for youth football.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}