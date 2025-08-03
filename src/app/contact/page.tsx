'use client';

import { useState, useEffect, useRef } from 'react';
import { HiMail, HiPhone, HiGlobe, HiClock, HiLocationMarker, HiChat, HiUser, HiInformationCircle, HiTicket, HiUserGroup, HiArrowRight } from 'react-icons/hi';
import Header from '@/components/Header';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: HiPhone,
      title: 'Phone Numbers',
      items: [
        { label: 'Main Office', value: '+40 745 123 456' },
        { label: 'Conference Info', value: '+40 745 789 012' }
      ]
    },
    {
      icon: HiMail,
      title: 'Email Addresses',
      items: [
        { label: 'General Inquiries', value: 'contact@radicalfootball.ro' },
        { label: 'Conference', value: 'conference@radicalfootball.ro' },
        { label: 'Partnerships', value: 'partners@radicalfootball.ro' }
      ]
    },
    {
      icon: HiClock,
      title: 'Office Hours',
      items: [
        { label: 'Monday - Friday', value: '09:00 - 18:00' },
        { label: 'Saturday', value: '10:00 - 14:00' },
        { label: 'Sunday', value: 'Closed' }
      ]
    }
  ];

  const subjects = [
    { value: 'general', label: 'General Questions', icon: HiInformationCircle },
    { value: 'conference', label: 'Conference & Tickets', icon: HiTicket },
    { value: 'media', label: 'Media Inquiries', icon: HiChat },
    { value: 'partnership', label: 'Partnership Opportunities', icon: HiUserGroup }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header 
        title="Contact Us"
        description="We're here to help. Reach out with questions, ideas, or just to say hello"
      />

      {/* Get in Touch Section */}
      <section 
        ref={(el) => { sectionsRef.current['info'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.info ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Multiple ways to connect with our team
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-700 ${
                    isVisible.info ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)]">
                      {info.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {info.items.map((item, idx) => (
                      <div key={idx}>
                        <p className="text-sm text-gray-500">{item.label}</p>
                        <p className="font-semibold text-gray-700">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact Info */}
            <div className="bg-[var(--color-primary)] rounded-3xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    Prefer Direct Communication?
                  </h3>
                  <p className="text-lg text-white/90 mb-6">
                    Our team is available during office hours to answer your questions and provide support. 
                    Don&apos;t hesitate to reach out - we love hearing from our community!
                  </p>
                  <div className="flex items-center gap-2">
                    <HiGlobe className="w-5 h-5 text-[var(--color-accent)]" />
                    <a href="https://radicalfootball.ro" className="text-[var(--color-accent)] hover:underline">
                      www.radicalfootball.ro
                    </a>
                  </div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold mb-4">Quick Response Times:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="text-[var(--color-accent)]">•</span>
                      <span>General inquiries: 1-2 business days</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[var(--color-accent)]">•</span>
                      <span>Conference tickets: Same day</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[var(--color-accent)]">•</span>
                      <span>Partnership proposals: 3-5 business days</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        ref={(el) => { sectionsRef.current['form'] = el; }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.form ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fill out the form below and we&apos;ll get back to you as soon as possible
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Your Name *
                    </label>
                    <div className="relative">
                      <HiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                         type="text"
                         id="name"
                         name="name"
                         value={formData.name}
                         onChange={handleChange}
                         required
                         placeholder="Enter your full name"
                         className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)] placeholder-gray-400 text-gray-900"
                       />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <HiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                         type="email"
                         id="email"
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         required
                         placeholder="your@email.com"
                         className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)] placeholder-gray-400 text-gray-900"
                       />
                    </div>
                  </div>
                </div>

                {/* Subject Selection */}
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    What is this about? *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {subjects.map((subject) => (
                      <label
                        key={subject.value}
                        className={`cursor-pointer rounded-lg border-2 p-4 text-center transition-all ${
                          formData.subject === subject.value
                            ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/5'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="subject"
                          value={subject.value}
                          checked={formData.subject === subject.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <subject.icon className={`w-6 h-6 mx-auto mb-2 ${
                          formData.subject === subject.value ? 'text-[var(--color-accent)]' : 'text-gray-400'
                        }`} />
                        <span className={`text-sm font-medium ${
                          formData.subject === subject.value ? 'text-[var(--color-accent)]' : 'text-gray-600'
                        }`}>
                          {subject.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Your Message *
                  </label>
                  <textarea
                     id="message"
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     required
                     rows={6}
                     placeholder="Tell us how we can help..."
                     className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)] resize-none placeholder-gray-400 text-gray-900"
                   />
                </div>

                {/* Submit Button */}
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    * Required fields
                  </p>
                  <button
                    type="submit"
                    className="flex items-center px-8 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)]/90 transition-colors"
                  >
                    Send Message
                    <HiArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section 
        ref={(el) => { sectionsRef.current['location'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.location ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Find Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit our office or meet us at one of our events
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Office Location */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                    Main Office
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <HiLocationMarker className="w-5 h-5 text-[var(--color-accent)] mt-1" />
                      <div>
                        <p className="font-semibold text-gray-700">Radical Football Romania</p>
                        <p className="text-gray-600">Strada Sportului 15</p>
                        <p className="text-gray-600">410042 Oradea, Bihor</p>
                        <p className="text-gray-600">Romania</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--color-accent)] rounded-2xl p-8 text-white">
                  <h4 className="text-xl font-bold mb-4">How to Get Here</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="mt-1">🚗</span>
                      <span>By Car: Free parking available on site</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1">🚌</span>
                      <span>By Bus: Lines 12, 15, 20 (Stadium stop)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1">🚊</span>
                      <span>By Tram: Line 1 (Sportului station)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1">✈️</span>
                      <span>From Airport: 15 min by taxi</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-[500px] flex items-center justify-center">
                <div className="text-center">
                  <HiLocationMarker className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive map will be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Venue Info */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Conference Venue
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Hotel Impero</h3>
            <p className="text-white/90 mb-6">
              Our annual conference takes place at the prestigious Hotel Impero in Oradea. 
              Modern facilities, comfortable accommodation, and excellent conference rooms 
              make it the perfect venue for our gathering.
            </p>
            <div className="flex items-center justify-center gap-2 text-[var(--color-accent)]">
              <HiLocationMarker className="w-5 h-5" />
              <span>Calea Aradului 9, Oradea 410223</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}