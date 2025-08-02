'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX, HiArrowRight } from 'react-icons/hi';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Conference', href: '/conferences' },
    { name: 'Community', href: '/community' },
    { name: 'Resources', href: '/resources' },
    { name: 'Get Involved', href: '/get-involved' },
    { name: 'Calendar', href: '/calendar' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
             <Image
               src="/logo/logo-small.svg"
               alt="Radical Football"
               width={120}
               height={40}
               className="h-10 w-auto"
             />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                 key={item.name}
                 href={item.href}
                 className="text-gray-700 hover:text-[var(--color-accent)] transition-colors duration-200 font-medium"
              >
                 {item.name}
              </Link>
             ))}
             <Link
               href="/conferences"
               className="bg-[var(--color-accent)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-primary)] transition-colors duration-200 flex items-center space-x-2"
             >
              <span>Buy Ticket</span>
              <HiArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="text-gray-700 hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              {isMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                   key={item.name}
                   href={item.href}
                   className="block px-3 py-2 text-gray-700 hover:text-[var(--color-accent)] transition-colors duration-200 font-medium"
                   onClick={() => setIsMenuOpen(false)}
                >
                   {item.name}
                 </Link>
               ))}
               <Link
                 href="/conferences"
                 className="block mt-4 bg-[var(--color-accent)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-primary)] transition-colors duration-200 text-center"
                 onClick={() => setIsMenuOpen(false)}
               >
                Buy Ticket
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 