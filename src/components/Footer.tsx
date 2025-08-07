'use client';

import Link from 'next/link';
import Image from 'next/image';
import { HiHeart, HiArrowRight, HiMail, HiLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Get Involved': [
      { name: 'Join Our Team', href: '/get-involved' },
      { name: 'Become a Speaker', href: '/get-involved#speaker' },
      { name: 'Volunteer With Us', href: '/get-involved#volunteer' },
      { name: 'Share Your Story', href: '/get-involved#share' },
    ],
    'Resources & Events': [
      { name: '2024 Conference', href: '/conferences/2024' },
      { name: 'Past Conferences', href: '/conferences' },
      { name: 'Articles & Videos', href: '/resources' },
      { name: 'Community Calendar', href: '/calendar' },
    ],
    'About Us': [
      { name: 'Our Story', href: '/about' },
      { name: 'Committee Board', href: '/community#board' },
      { name: 'Our Values', href: '/about#values' },
      { name: 'Contact Us', href: '/contact' },
    ],
  };

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/WeAreRadicalFootball',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/_radicalfootball_?igsh=MTkwaGVwcW0xcG12dw%3D%3D&utm_source=qr',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@radicalfootball?_t=ZN-8yZ4KktTeNS&_r=1',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/andriscaflavius',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/flavius-andrisca-487256b0/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@radical.football',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="flex-1 text-center lg:text-left">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo/logo-small.svg"
                alt="Radical Football"
                width={140}
                height={50}
                className="h-12 w-auto filter brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
              Empowering young players through football. Building meaningful relationships, 
              education, and joy through the beautiful game.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <HiMail className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-gray-300">contact@radicalfootball.ro</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <HiLocationMarker className="w-5 h-5 text-[var(--color-accent)]" />
                <span className="text-gray-300">Oradea, Romania</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-accent)] transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 justify-center lg:justify-start">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="text-center lg:text-left">
                <h3 className="text-lg font-bold text-white mb-4 lg:mb-6">
                  {category}
                </h3>
                <ul className="space-y-2 lg:space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group justify-center lg:justify-start"
                      >
                        <span>{link.name}</span>
                        <HiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-300 mb-6 lg:mb-8 text-sm lg:text-base">
              Get the latest updates on our conferences, resources, and community events.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent text-sm lg:text-base"
              />
              <a href="/resources" className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)]/90 transition-colors duration-300 text-sm lg:text-base" aria-label="Subscribe">
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black/20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 lg:gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm lg:text-base">
              <span>Made with</span>
              <HiHeart className="w-4 h-4 text-[var(--color-accent)]" />
              <span>for young players</span>
            </div>
            <p className="text-gray-400 text-xs lg:text-sm text-center sm:text-left">
              © {currentYear} Radical Football. All rights reserved.
            </p>
            <div className="flex gap-4 lg:gap-6 flex-wrap justify-center">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors">
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