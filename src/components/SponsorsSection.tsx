'use client';

import Image from 'next/image';
import Link from 'next/link';

const SponsorsSection = () => {
  const sponsors = [
    { 
      name: 'Cetatea Oradea', 
      logo: '/sponsors/cetatea-oradea.svg',
      url: 'https://www.visitoradea.com/ro/what-to-see/cetatea-oradea'
    },
    { 
      name: 'Visit Oradea', 
      logo: '/sponsors/visit-oradea.svg',
      url: 'https://www.visitoradea.com/'
    },
    { 
      name: 'Contmar Servicii Contabilitate', 
      logo: '/sponsors/contmar-servicii-contabilitate.svg',
      url: '#'
    },
    { 
      name: 'Pensiunea Casa Muntilor', 
      logo: '/sponsors/pensiunea-casa-muntilor.svg',
      url: 'https://pensiunearouamuntilor.ro/'
    },
    { 
      name: 'Asociatia Cont Consult', 
      logo: '/sponsors/asociatia-cont-consult.svg',
      url: '#'
    },
    { 
      name: 'The Rada Way', 
      logo: '/sponsors/the-rada-way.svg',
      url: 'https://theradaway.ro/'
    },
    { 
      name: 'XPS Network', 
      logo: '/sponsors/xps-network.svg',
      url: 'https://xpsnetwork.com/'
    },
    { 
      name: 'Fladris Com', 
      logo: '/sponsors/fladris-com.svg',
      url: '#'
    },
    { 
      name: 'Zileos', 
      logo: '/sponsors/zileos.svg',
      url: 'https://zileos.org/ro/'
    },
    { 
      name: 'Memosport', 
      logo: '/sponsors/memosport.svg',
      url: 'https://memosport.net/'
    },
    { 
      name: 'The Football Brain', 
      logo: '/sponsors/the-football-brain.svg',
      url: 'https://thefootballbrain.ro/'
    },
  ];

  return (
    <section className="bg-[var(--color-dark-bg)] py-16 relative">
      {/* Background with negative z-index */}
      <div className="absolute inset-0 bg-[var(--color-dark-bg)] -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Partners & Sponsors
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're grateful for the support of our amazing partners who help us make 
            Radical Football possible. Together, we're building a stronger community.
          </p>
        </div>

        {/* Sponsors Marquee */}
        <div className="relative overflow-hidden mb-6 py-4">
          {/* Desktop: Single row marquee */}
          <div className="hidden lg:block">
            <div className="flex animate-marquee">
              {/* First set of sponsors */}
              {sponsors.map((sponsor, index) => (
                <a
                  key={`desktop-1-${sponsor.name}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer group border border-white/10 mx-4 min-w-[200px]"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={100}
                    height={80}
                    className="h-12 w-auto filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                </a>
              ))}
              {/* Duplicate set for seamless loop */}
              {sponsors.map((sponsor, index) => (
                <a
                  key={`desktop-2-${sponsor.name}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer group border border-white/10 mx-4 min-w-[200px]"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={100}
                    height={80}
                    className="h-12 w-auto filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile: Two row marquee */}
          <div className="lg:hidden space-y-4">
            {/* First row */}
            <div className="flex animate-marquee">
              {sponsors.slice(0, Math.ceil(sponsors.length / 2)).map((sponsor, index) => (
                <a
                  key={`mobile-1-${sponsor.name}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer group border border-white/10 mx-2 min-w-[150px]"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={80}
                    height={60}
                    className="h-8 w-auto filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                </a>
              ))}
              {/* Duplicate set for seamless loop */}
              {sponsors.slice(0, Math.ceil(sponsors.length / 2)).map((sponsor, index) => (
                <a
                  key={`mobile-1-dup-${sponsor.name}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer group border border-white/10 mx-2 min-w-[150px]"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={80}
                    height={60}
                    className="h-8 w-auto filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                </a>
              ))}
            </div>

            {/* Second row */}
            <div className="flex animate-marquee-reverse">
              {sponsors.slice(Math.ceil(sponsors.length / 2)).map((sponsor, index) => (
                <a
                  key={`mobile-2-${sponsor.name}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer group border border-white/10 mx-2 min-w-[150px]"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={80}
                    height={60}
                    className="h-8 w-auto filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                </a>
              ))}
              {/* Duplicate set for seamless loop */}
              {sponsors.slice(Math.ceil(sponsors.length / 2)).map((sponsor, index) => (
                <a
                  key={`mobile-2-dup-${sponsor.name}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer group border border-white/10 mx-2 min-w-[150px]"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={80}
                    height={60}
                    className="h-8 w-auto filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Message */}
        <div className="text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Interested in partnering with us? We'd love to hear from you!
          </p>
          <Link href="/contact">
            <button className="bg-white text-[var(--color-dark-bg)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg">
              Become a Partner
            </button>
          </Link>
        </div>
      </div>

      {/* Marquee Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SponsorsSection; 