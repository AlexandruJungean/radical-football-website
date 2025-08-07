'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { HiClock, HiTicket, HiArrowLeft, HiArrowRight, HiUserGroup, HiSparkles, HiLocationMarker } from 'react-icons/hi';

// Mock speaker data - in production this would come from a database
const speakers2024 = [
  {
    name: "Peter Sturgess",
    image: "/images/speakers/peter-sturgess.png",
    title: "Youth Development Expert",
    country: "England",
    bio: "Pioneer in child-centered coaching methodologies with over 30 years of experience transforming youth football programs.",
    session: "Creating Environments Where Children Thrive"
  },
  {
    name: "Bastiaan Riemersma",
    image: "/images/speakers/bastiaan-riemersma.png",
    title: "Technical Director",
    country: "Netherlands",
    bio: "Advocate for creativity and decision-making in youth football, implementing innovative approaches across Dutch academies.",
    session: "The Dutch Way: Freedom to Play"
  },
  {
    name: "Neil Harris",
    image: "/images/speakers/neil-harris.png",
    title: "Coach Educator",
    country: "Scotland",
    bio: "Specializes in coach education and creating positive learning environments that prioritize player enjoyment and development.",
    session: "Coaching the Coaches: A New Paradigm"
  },
  {
    name: "Mark O'Sullivan",
    image: "/images/speakers/mark-o-sullivan.png",
    title: "Player Development Specialist",
    country: "Ireland",
    bio: "Internationally recognized for his work in constraints-led coaching and ecological approaches to player development.",
    session: "Skill Acquisition Through Play"
  },
  {
    name: "Debbie Sayers",
    image: "/images/speakers/debbie-sayers.png",
    title: "Sports Psychologist",
    country: "England",
    bio: "Expert in child psychology and emotional development through sports, helping coaches understand young minds better.",
    session: "Understanding the Child Behind the Player"
  },
  {
    name: "Rick Fenoglio",
    image: "/images/speakers/rick-fenoglio.png",
    title: "Technical Coach",
    country: "USA",
    bio: "Innovative coach known for creative training methods that blend fun with functional skill development.",
    session: "Making Training Irresistible"
  },
  {
    name: "Jan Verbeek",
    image: "/images/speakers/jan-verbeek.png",
    title: "Academy Director",
    country: "Belgium",
    bio: "Leader in restructuring youth academies to focus on holistic development rather than early specialization.",
    session: "Building Academies for Children, Not Mini-Professionals"
  },
  {
    name: "Andrei Zaporojan",
    image: "/images/speakers/andrei-zaprojan.png",
    title: "National Team Coach",
    country: "Romania",
    bio: "Passionate advocate for changing Romanian football culture to embrace modern, child-friendly coaching methods.",
    session: "Transforming Romanian Football from Grassroots Up"
  },
  {
    name: "Martin VLK",
    image: "/images/speakers/martin-vlk.png",
    title: "Youth Coach",
    country: "Czech Republic",
    bio: "Specialist in age-appropriate training and creating joyful learning experiences for young footballers.",
    session: "Age-Appropriate Excellence"
  },
  {
    name: "Aslan Odev",
    image: "/images/speakers/aslan-odev.png",
    title: "Football Philosopher",
    country: "Turkey",
    bio: "Thought leader challenging traditional coaching paradigms and promoting humanistic approaches to youth sports.",
    session: "The Philosophy of Youth Football"
  }
];

const conferenceSchedule = {
  day1: {
    date: "August 16, 2024",
    sessions: [
      { time: "08:00 - 09:00", title: "Registration & Welcome Coffee", type: "break" },
      { time: "09:00 - 09:30", title: "Opening Ceremony", speaker: "Flavius Andrișca", type: "ceremony" },
      { time: "09:30 - 10:30", title: "Creating Environments Where Children Thrive", speaker: "Peter Sturgess", type: "keynote" },
      { time: "10:30 - 11:00", title: "Coffee Break", type: "break" },
      { time: "11:00 - 12:00", title: "The Dutch Way: Freedom to Play", speaker: "Bastiaan Riemersma", type: "presentation" },
      { time: "12:00 - 13:30", title: "Lunch & Networking", type: "break" },
      { time: "13:30 - 14:30", title: "Understanding the Child Behind the Player", speaker: "Debbie Sayers", type: "presentation" },
      { time: "14:30 - 15:30", title: "Practical Workshop: Games for Development", speaker: "Multiple Speakers", type: "workshop" },
      { time: "15:30 - 16:00", title: "Coffee Break", type: "break" },
      { time: "16:00 - 17:00", title: "Panel Discussion: Changing Football Culture", speaker: "All Speakers", type: "panel" },
      { time: "19:00 - 22:00", title: "Conference Dinner", type: "social" }
    ]
  },
  day2: {
    date: "August 17, 2024",
    sessions: [
      { time: "09:00 - 10:00", title: "Skill Acquisition Through Play", speaker: "Mark O'Sullivan", type: "keynote" },
      { time: "10:00 - 11:00", title: "Making Training Irresistible", speaker: "Rick Fenoglio", type: "presentation" },
      { time: "11:00 - 11:30", title: "Coffee Break", type: "break" },
      { time: "11:30 - 12:30", title: "Transforming Romanian Football from Grassroots Up", speaker: "Andrei Zaporojan", type: "presentation" },
      { time: "12:30 - 14:00", title: "Lunch", type: "break" },
      { time: "14:00 - 15:00", title: "The Philosophy of Youth Football", speaker: "Aslan Odev", type: "presentation" },
      { time: "15:00 - 16:00", title: "Practical Session: On-Field Demonstrations", speaker: "All Coaches", type: "practical" },
      { time: "16:00 - 16:30", title: "Closing Ceremony & Awards", type: "ceremony" },
      { time: "16:30 - 17:30", title: "Farewell Reception", type: "social" }
    ]
  }
};

export default function ConferenceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
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

  // For now, we'll only show 2024 conference details
  if (slug !== '2024') {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">Conference Not Found</h1>
          <p className="text-gray-600 mb-8">This conference page is not available yet.</p>
          <Link href="/conferences" className="text-[var(--color-accent)] hover:underline">
            Back to Conferences
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/conference/conference-banner.png"
            alt="Radical Football Conference banner with abstract overlay"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)] to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/conferences"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <HiArrowLeft className="w-5 h-5 mr-2" />
            Back to Conferences
          </Link>
          
          <div className="flex items-center gap-2 mb-4">
            <HiSparkles className="w-8 h-8 text-[var(--color-accent)]" />
            <span className="text-[var(--color-accent)] font-semibold text-lg">2024 Conference</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Empowering Young Players
          </h1>
          
          <div className="flex flex-wrap gap-6 text-white mb-8">
            <div className="flex items-center gap-2">
              <HiClock className="w-5 h-5" />
              <span>16-17 August 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <HiLocationMarker className="w-5 h-5" />
              <span>Hotel Impero, Oradea, Romania</span>
            </div>
            <div className="flex items-center gap-2">
              <HiUserGroup className="w-5 h-5" />
              <span>10 International Speakers</span>
            </div>
          </div>
          
          <Link
            href="#tickets"
            className="inline-flex items-center px-8 py-4 bg-[var(--color-accent)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)]/90 transition-all duration-300"
          >
            <HiTicket className="mr-2 w-5 h-5" />
            Get Your Tickets
          </Link>
        </div>
      </section>

      {/* Conference Description Section */}
      <section 
        ref={(el) => { sectionsRef.current['description'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.description ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-6">
                Two Days That Will Change Your Perspective
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join us for the most important gathering of progressive coaches, educators, and football 
                enthusiasts in Romania. This conference brings together international experts who are 
                revolutionizing youth football by putting children&apos;s development, joy, and well-being first.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-[var(--color-accent)] mb-2">200+</div>
                <div className="text-lg text-gray-700">Expected Attendees</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-[var(--color-accent)] mb-2">15+</div>
                <div className="text-lg text-gray-700">Interactive Sessions</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-[var(--color-accent)] mb-2">10</div>
                <div className="text-lg text-gray-700">Countries Represented</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section 
        ref={(el) => { sectionsRef.current['speakers'] = el; }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.speakers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Meet Our Speakers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Learn from international experts who are leading the change in youth football
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers2024.map((speaker, index) => (
                <div
                  key={speaker.name}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ${
                    isVisible.speakers ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 50}ms` }}
                >
                  <div className="relative h-64">
                    <Image
                      src={speaker.image}
                      alt={`${speaker.name} – ${speaker.title} (${speaker.country})`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold">{speaker.name}</h3>
                      <p className="text-sm opacity-90">{speaker.title} • {speaker.country}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{speaker.bio}</p>
                    <div className="border-t pt-4">
                      <p className="text-sm text-gray-500">Session:</p>
                      <p className="font-semibold text-[var(--color-primary)]">{speaker.session}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section 
        ref={(el) => { sectionsRef.current['schedule'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.schedule ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Conference Schedule
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Two days packed with inspiring sessions, practical workshops, and networking opportunities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Day 1 */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                  Day 1 - {conferenceSchedule.day1.date}
                </h3>
                <div className="space-y-4">
                  {conferenceSchedule.day1.sessions.map((session, index) => (
                    <div
                      key={index}
                      className={`flex gap-4 pb-4 border-b last:border-0 ${
                        session.type === 'break' || session.type === 'social' ? 'opacity-70' : ''
                      }`}
                    >
                      <div className="flex-shrink-0 w-24">
                        <span className="text-sm font-semibold text-gray-500">{session.time}</span>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800">{session.title}</h4>
                        {session.speaker && (
                          <p className="text-sm text-[var(--color-accent)]">{session.speaker}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day 2 */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                  Day 2 - {conferenceSchedule.day2.date}
                </h3>
                <div className="space-y-4">
                  {conferenceSchedule.day2.sessions.map((session, index) => (
                    <div
                      key={index}
                      className={`flex gap-4 pb-4 border-b last:border-0 ${
                        session.type === 'break' || session.type === 'social' ? 'opacity-70' : ''
                      }`}
                    >
                      <div className="flex-shrink-0 w-24">
                        <span className="text-sm font-semibold text-gray-500">{session.time}</span>
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-gray-800">{session.title}</h4>
                        {session.speaker && (
                          <p className="text-sm text-[var(--color-accent)]">{session.speaker}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section 
        ref={(el) => { sectionsRef.current['tickets'] = el; }}
        id="tickets"
        className="py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.tickets ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Get Your Tickets
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Join us for this transformative experience. Limited seats available.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Early Bird</h3>
                <p className="text-gray-500 mb-4">Until July 15, 2024</p>
                <div className="text-4xl font-bold text-[var(--color-accent)] mb-6">€150</div>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Full conference access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Conference materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Coffee breaks & lunch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Conference dinner</span>
                  </li>
                </ul>
                <button className="w-full bg-[var(--color-accent)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-accent)]/90 transition-colors">
                  Register Now
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center transform scale-105 shadow-2xl">
                <div className="bg-[var(--color-accent)] text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                  RECOMMENDED
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Regular</h3>
                <p className="text-gray-500 mb-4">After July 15, 2024</p>
                <div className="text-4xl font-bold text-[var(--color-accent)] mb-6">€200</div>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Full conference access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Conference materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Coffee breaks & lunch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Conference dinner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Certificate of attendance</span>
                  </li>
                </ul>
                <button className="w-full bg-[var(--color-accent)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-accent)]/90 transition-colors">
                  Register Now
                </button>
              </div>

              <div className="bg-white rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Group (5+)</h3>
                <p className="text-gray-500 mb-4">For teams and clubs</p>
                <div className="text-4xl font-bold text-[var(--color-accent)] mb-6">€170</div>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Everything in Regular</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">15% group discount</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Priority seating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700">Group photo with speakers</span>
                  </li>
                </ul>
                <button className="w-full bg-[var(--color-accent)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-accent)]/90 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-white/80 mb-4">
                Have questions? Need more information?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-white hover:text-[var(--color-accent)] transition-colors"
              >
                Contact our team
                <HiArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section 
        ref={(el) => { sectionsRef.current['sponsors'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.sponsors ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
                Conference Partners
              </h2>
              <p className="text-lg text-gray-600">
                Thank you to our sponsors who make this conference possible
              </p>
            </div>

            <div className="flex flex-col gap-8 items-center">
              <Image 
                src="/images/sponsors1.png" 
                alt="Conference Sponsors" 
                width={800} 
                height={200} 
                className="max-w-full"
              />
              <Image 
                src="/images/sponsors2.png" 
                alt="Conference Sponsors" 
                width={800} 
                height={200} 
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}