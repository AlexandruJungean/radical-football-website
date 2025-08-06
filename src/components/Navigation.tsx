'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HiMenu, HiX, HiArrowRight } from 'react-icons/hi';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Start Here', href: '/start-here', symbol: '🧭' },
    { name: 'Ethos & Principles', href: '/ethos', symbol: '🟡' },
    { name: 'Resources & Reflection', href: '/resources', symbol: '🟢' },
    { name: 'Community', href: '/community', symbol: '🔴' },
    { name: 'Conferences', href: '/conferences', symbol: '🎤' },
    { name: 'Club Consultancy', href: '/consultancy', symbol: '🟣' },
    { name: 'Parents & Child Voice', href: '/parents', symbol: '🔵' },
    { name: 'Contact & Support', href: '/contact', symbol: '🟤' },
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

          {/* Hamburger menu button */}
          <div>
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

        {/* Navigation Menu */}
        {isMenuOpen && (
          <div>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                   key={item.name}
                   href={item.href}
                   className="block px-3 py-2 text-gray-700 hover:text-[var(--color-accent)] transition-colors duration-200 font-medium flex items-center gap-2"
                   onClick={() => setIsMenuOpen(false)}
                >
                   <span className="text-sm">{item.symbol}</span>
                   <span>{item.name}</span>
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