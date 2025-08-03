'use client';

import ResponsiveImage from './ResponsiveImage';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';

const FounderSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ResponsiveImage
                src="/images/comitee-board/flavius-andrisca-main.png"
                alt="Flavius Andrișca - Founder of Radical Football"
                width={600}
                height={800}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
                srcSet="/images/comitee-board/flavius-andrisca-main-p-500.png 500w, /images/comitee-board/flavius-andrisca-main-p-800.png 800w, /images/comitee-board/flavius-andrisca-main-p-1080.png 1080w, /images/comitee-board/flavius-andrisca-main.png 1920w"
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
              <Link
                 href="/about"
                 className="inline-flex items-center space-x-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-lg hover:bg-[var(--color-primary)] transition-colors duration-200 font-semibold"
              >
                <span>Learn More About Our Story</span>
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection; 