'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'About': [
      { name: 'Our Story', href: '/about' },
      { name: 'Our Values', href: '/about#values' },
      { name: 'Code of Ethics', href: '/about#ethics' },
    ],
    'Conference': [
      { name: '2024 Conference', href: '/conferences/2024' },
      { name: 'Past Conferences', href: '/conferences#past' },
      { name: 'Speakers', href: '/conferences#speakers' },
    ],
    'Community': [
      { name: 'Committee Board', href: '/community#board' },
      { name: 'Ambassador', href: '/community#ambassador' },
      { name: 'Volunteers', href: '/community#volunteers' },
    ],
    'Resources': [
      { name: 'Articles', href: '/resources#articles' },
      { name: 'Videos', href: '/resources#videos' },
      { name: 'Magazine', href: '/resources#magazine' },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
               <Image
                 src="/logo/logo-small.svg"
                 alt="Radical Football"
                 width={120}
                 height={40}
                 className="h-10 w-auto"
               />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering young players through football. Building meaningful relationships, 
              education, and joy through the beautiful game.
            </p>
              <div className="flex space-x-4">
               <a 
                 href="https://www.facebook.com/WeAreRadicalFootball" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors"
               >
                 <span className="sr-only">Facebook</span>
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                 </svg>
               </a>
               <a 
                 href="https://x.com/andriscaflavius" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors"
               >
                 <span className="sr-only">X (Twitter)</span>
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                 </svg>
               </a>
               <a 
                 href="https://www.linkedin.com/in/flavius-andrisca-487256b0/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors"
               >
                 <span className="sr-only">LinkedIn</span>
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                 </svg>
               </a>
               <a 
                 href="https://www.youtube.com/@radical.football" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-colors"
               >
                 <span className="sr-only">YouTube</span>
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                 </svg>
               </a>
             </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Radical Football. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 