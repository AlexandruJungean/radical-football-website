'use client';

import Image from 'next/image';

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
    <section className="bg-[var(--color-dark-bg)] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Partners & Sponsors
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're grateful for the support of our amazing partners who help us make 
            Radical Football possible. Together, we're building a stronger community.
          </p>
        </div>

        {/* Sponsors Grid - Static Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center mb-16">
          {sponsors.map((sponsor, index) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer group border border-white/10"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={100}
                height={80}
                className="h-12 md:h-16 w-auto filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        {/* Partnership Message */}
        <div className="text-center">
          <p className="text-gray-300 mb-6 text-lg">
            Interested in partnering with us? We'd love to hear from you!
          </p>
          <button className="bg-white text-[var(--color-dark-bg)] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection; 