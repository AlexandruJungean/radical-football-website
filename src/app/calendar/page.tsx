'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HiCalendar, HiClock, HiLocationMarker, HiUserGroup, HiAcademicCap, HiMail, HiBell, HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Header from '@/components/Header';

export default function CalendarPage() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const [email, setEmail] = useState('');
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

  // Mock data - in production this would come from a database
  const upcomingEvents = [
    {
      id: 1,
      title: "Child-Centered Coaching Workshop",
      type: "workshop",
      date: "February 15, 2025",
      time: "10:00 - 16:00",
      location: "Bucharest",
      venue: "National Football Academy",
      description: "Hands-on workshop exploring practical methods for implementing child-centered approaches in your training sessions.",
      capacity: 30,
      spotsLeft: 12,
      price: "€50",
      image: "/images/coaching/IMG_7006 copy 1.png"
    },
    {
      id: 2,
      title: "Parent Education Evening",
      type: "education",
      date: "February 22, 2025",
      time: "18:00 - 20:00",
      location: "Online",
      venue: "Zoom Webinar",
      description: "Help parents understand their role in supporting their children's football journey without adding pressure.",
      capacity: 100,
      spotsLeft: 45,
      price: "Free",
      image: "/images/conference/IMG_7113 copy.png"
    },
    {
      id: 3,
      title: "Regional Coaches Meetup - Cluj",
      type: "meetup",
      date: "March 8, 2025",
      time: "14:00 - 17:00",
      location: "Cluj-Napoca",
      venue: "CFR Cluj Training Ground",
      description: "Connect with like-minded coaches in your region, share experiences, and learn from each other.",
      capacity: 40,
      spotsLeft: 25,
      price: "€20",
      image: "/images/coaching/IMG_7301 copy 1.png"
    },
    {
      id: 4,
      title: "Youth Football Festival",
      type: "festival",
      date: "March 15-16, 2025",
      time: "09:00 - 18:00",
      location: "Timișoara",
      venue: "Dan Păltinișanu Stadium",
      description: "Two days of joyful football activities focused on fun, creativity, and player development.",
      capacity: 200,
      spotsLeft: 78,
      price: "€30 per team",
      image: "/images/young-players-running.png"
    },
    {
      id: 5,
      title: "Advanced Coaching Seminar",
      type: "seminar",
      date: "April 5, 2025",
      time: "09:00 - 17:00",
      location: "Oradea",
      venue: "Hotel Impero",
      description: "Deep dive into constraints-led approach and ecological dynamics in youth football.",
      capacity: 50,
      spotsLeft: 35,
      price: "€80",
      image: "/images/conference/IMG_6921 copy 1.png"
    },
    {
      id: 6,
      title: "Summer Training Camp",
      type: "camp",
      date: "July 7-12, 2025",
      time: "Full Day",
      location: "Brașov",
      venue: "Olympic Training Center",
      description: "Week-long intensive training for coaches wanting to fully transform their approach.",
      capacity: 25,
      spotsLeft: 15,
      price: "€450",
      image: "/images/young-team.png"
    }
  ];

  const eventTypes = {
    workshop: { color: 'bg-blue-500', label: 'Workshop' },
    education: { color: 'bg-green-500', label: 'Education' },
    meetup: { color: 'bg-purple-500', label: 'Meetup' },
    festival: { color: 'bg-yellow-500', label: 'Festival' },
    seminar: { color: 'bg-red-500', label: 'Seminar' },
    camp: { color: 'bg-indigo-500', label: 'Camp' }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const changeMonth = (direction: number) => {
    const newDate = new Date(selectedMonth);
    newDate.setMonth(newDate.getMonth() + direction);
    setSelectedMonth(newDate);
  };

  return (
    <main className="min-h-screen bg-white">
      <Header 
        title="Events Calendar"
        description="Workshops, training sessions, camps, and meetups to support your journey"
      />

      {/* What's Coming Up Section */}
      <section 
        ref={(el) => { sectionsRef.current['events'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.events ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                  What&apos;s Coming Up
                </h2>
                <p className="text-xl text-gray-600">
                  Join us at these upcoming events and activities
                </p>
              </div>
              
              {/* Month Navigator */}
              <div className="flex items-center justify-center lg:justify-end">
                <div className="flex items-center gap-4 bg-gray-50 rounded-lg p-2">
                  <button
                    onClick={() => changeMonth(-1)}
                    className="p-2 hover:bg-white rounded transition-colors"
                  >
                    <HiChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <span className="font-semibold text-gray-700 min-w-[120px] text-center">
                    {selectedMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <button
                    onClick={() => changeMonth(1)}
                    className="p-2 hover:bg-white rounded transition-colors"
                  >
                    <HiChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Events Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ${
                    isVisible.events ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {/* Event Image */}
                  <div className="relative h-48">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className={`${eventTypes[event.type as keyof typeof eventTypes].color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                        {eventTypes[event.type as keyof typeof eventTypes].label}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 text-gray-600">
                        <HiCalendar className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <HiClock className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <HiLocationMarker className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm">{event.location} • {event.venue}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 text-sm">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm">
                        <span className="text-gray-500">Spots left:</span>
                        <span className="font-semibold text-[var(--color-accent)] ml-1">
                          {event.spotsLeft}/{event.capacity}
                        </span>
                      </div>
                      <div className="text-lg font-bold text-[var(--color-primary)]">
                        {event.price}
                      </div>
                    </div>

                    <button className="w-full bg-[var(--color-accent)] text-white px-4 py-2 rounded-full font-semibold hover:bg-[var(--color-accent)]/90 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Events */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Can&apos;t find what you&apos;re looking for? We have more events coming soon!
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors">
                View Full Calendar
                <HiArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
              Different Ways to Learn and Connect
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <HiAcademicCap className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                Educational Events
              </h3>
              <p className="text-gray-600">
                Workshops, seminars, and courses designed to deepen your understanding and skills
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <HiUserGroup className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                Community Gatherings
              </h3>
              <p className="text-gray-600">
                Meetups, discussions, and social events to connect with like-minded people
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center">
              <HiCalendar className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                Special Programs
              </h3>
              <p className="text-gray-600">
                Camps, festivals, and intensive training programs for deeper immersion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section 
        ref={(el) => { sectionsRef.current['newsletter'] = el; }}
        className="py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.newsletter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <HiBell className="w-8 h-8 text-[var(--color-accent)]" />
                <h2 className="text-4xl font-bold text-white">
                  Stay Updated
                </h2>
              </div>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Get notified about new events, workshops, and opportunities in your area
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="max-w-lg mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="mb-6">
                  <label htmlFor="email" className="block text-white mb-2 font-semibold">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white"
                  />
                </div>

                <div className="mb-6">
                  <p className="text-white/80 text-sm mb-4">
                    Choose what interests you:
                  </p>
                  <div className="space-y-3">
                    <label className="flex items-center text-white cursor-pointer">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Workshops & Training Sessions</span>
                    </label>
                    <label className="flex items-center text-white cursor-pointer">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Community Meetups</span>
                    </label>
                    <label className="flex items-center text-white cursor-pointer">
                      <input type="checkbox" className="mr-3" defaultChecked />
                      <span>Conference Updates</span>
                    </label>
                    <label className="flex items-center text-white cursor-pointer">
                      <input type="checkbox" className="mr-3" />
                      <span>Online Webinars</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--color-accent)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--color-accent)]/90 transition-colors flex items-center justify-center"
                >
                  <HiMail className="mr-2 w-5 h-5" />
                  Subscribe to Newsletter
                </button>

                <p className="text-white/60 text-xs mt-4 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Host Your Own Event */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
            Want to Host Your Own Event?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We support community members who want to organize local workshops, meetups, or training sessions. 
            Get access to resources, materials, and guidance to make your event a success.
          </p>
          <a
            href="/get-involved"
            className="inline-flex items-center px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)]/90 transition-colors"
          >
            Learn How to Host
            <HiArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  );
}