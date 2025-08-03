'use client';

import { HiHeart, HiAcademicCap, HiSparkles, HiUsers } from 'react-icons/hi';

const ValuesSection = () => {
  const values = [
    {
      icon: HiHeart,
      title: 'Relație',
      subtitle: 'Relationship',
      description: 'Building meaningful connections between coaches, players, and families.',
    },
    {
      icon: HiAcademicCap,
      title: 'Educație',
      subtitle: 'Education',
      description: 'Learning and growth through football, both on and off the pitch.',
    },
    {
      icon: HiSparkles,
      title: 'Joc',
      subtitle: 'Play',
      description: 'The joy and importance of play in developing young minds and bodies.',
    },
    {
      icon: HiUsers,
      title: 'Comunitate',
      subtitle: 'Community',
      description: 'Building strong communities together through shared experiences.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These four pillars guide everything we do at Radical Football. 
            They&apos;re not just words—they&apos;re the foundation of our movement.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                 <value.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>

              {/* Subtitle */}
              <p className="text-[var(--color-accent)] font-semibold mb-4">
                 {value.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Want to learn more about how we live these values every day?
          </p>
          <button className="bg-[var(--color-accent)] text-white px-8 py-3 rounded-lg hover:bg-[var(--color-primary)] transition-colors duration-200 font-semibold">
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection; 