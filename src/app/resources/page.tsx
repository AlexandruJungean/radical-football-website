'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiBookOpen, HiPlay, HiDocumentText, HiMicrophone, HiArrowRight, HiSearch, HiFilter, HiDownload, HiExternalLink } from 'react-icons/hi';
import Header from '@/components/Header';
import { BreakSpaceSymbol } from '@/components/SymbolSystem';

export default function ResourcesPage() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
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
  const resources = [
    {
      id: 1,
      type: 'article',
      title: 'The Science Behind Child-Centered Coaching',
      author: 'Dr. Maria Gheorghe',
      date: 'December 2024',
      excerpt: 'Exploring neuroscience research that supports play-based learning approaches in youth sports.',
      readTime: '8 min read',
      tags: ['Research', 'Child Development', 'Neuroscience']
    },
    {
      id: 2,
      type: 'video',
      title: 'Creating Joyful Training Sessions',
      author: 'Coach Andrei Pop',
      date: 'November 2024',
      excerpt: 'Practical demonstrations of games and activities that children love while developing skills.',
      duration: '15:32',
      thumbnail: '/images/coaching/IMG_7006 copy 1.png',
      tags: ['Training', 'Practical', 'Games']
    },
    {
      id: 3,
      type: 'podcast',
      title: 'Episode 12: Transforming Club Culture',
      author: 'Radical Football Podcast',
      date: 'November 2024',
      excerpt: 'Interview with three club directors who successfully shifted to child-centered approaches.',
      duration: '45:20',
      tags: ['Leadership', 'Club Management', 'Culture']
    },
    {
      id: 4,
      type: 'article',
      title: 'Why We Need to Rethink Competition',
      author: 'Flavius Andrișca',
      date: 'October 2024',
      excerpt: 'Challenging traditional views on competition and proposing alternatives that serve children better.',
      readTime: '6 min read',
      tags: ['Philosophy', 'Competition', 'Youth Development']
    },
    {
      id: 5,
      type: 'video',
      title: 'Parent Education Workshop Recording',
      author: 'Multiple Speakers',
      date: 'October 2024',
      excerpt: 'Full recording of our workshop helping parents support their children\'s football journey.',
      duration: '1:23:45',
      thumbnail: '/images/conference/IMG_7202 copy 1.png',
      tags: ['Parents', 'Education', 'Workshop']
    },
    {
      id: 6,
      type: 'guide',
      title: 'Starting Your Child-Centered Journey: A Coach\'s Guide',
      author: 'Ionuț Rada',
      date: 'September 2024',
      excerpt: 'Step-by-step guide for coaches ready to transform their approach to youth football.',
      readTime: '20 min read',
      downloadable: true,
      tags: ['Coaching', 'Getting Started', 'Guide']
    }
  ];

  const magazineIssues = [
    {
      issue: 5,
      title: 'The Power of Play',
      date: 'Winter 2024',
      cover: '/images/young-player2.png',
      featured: true,
      articles: [
        'Interview with Mark O\'Sullivan on Constraints-Led Coaching',
        'Case Study: How Cluj Transformed Youth Football',
        'The Role of Parents in Child Development',
        'Games That Develop Decision Making'
      ]
    },
    {
      issue: 4,
      title: 'Building Better Humans',
      date: 'Autumn 2024',
      cover: '/images/young-players2.png',
      articles: [
        'Life Skills Through Football',
        'Creating Inclusive Environments',
        'The Coach as a Mentor'
      ]
    },
    {
      issue: 3,
      title: 'Joy in Movement',
      date: 'Summer 2024',
      cover: '/images/young-team.png',
      articles: [
        'Why Fun Matters More Than Winning',
        'Movement Literacy in Early Years',
        'Community Success Stories'
      ]
    }
  ];

  const readingLists = {
    beginners: [
      { title: 'Play Matters', author: 'Peter Gray', description: 'Essential reading on the importance of free play' },
      { title: 'The Talent Code', author: 'Daniel Coyle', description: 'Understanding how skills really develop' },
      { title: 'Drive', author: 'Daniel Pink', description: 'The science of motivation' }
    ],
    experienced: [
      { title: 'Nonlinear Pedagogy in Skill Acquisition', author: 'Jia Yi Chow', description: 'Advanced coaching methodologies' },
      { title: 'The Constraints-Led Approach', author: 'Ian Renshaw', description: 'Principles and practice' },
      { title: 'Ecological Dynamics', author: 'Keith Davids', description: 'A framework for understanding skill acquisition' }
    ]
  };

  const filteredResources = resources.filter(resource => {
    const matchesFilter = activeFilter === 'all' || resource.type === activeFilter;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white">
      <Header 
        title="Resources & Magazine"
        description="Articles, videos, podcasts, and guides to support your journey in child-centered football"
      />

      {/* Library Section */}
      <section 
        ref={(el) => { sectionsRef.current['library'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.library ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-8 text-center">
                Our Library
              </h2>

              {/* Search and Filter Bar */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <HiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search resources..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div className="flex gap-2 items-center">
                    <HiFilter className="w-5 h-5 text-gray-500" />
                    <div className="flex gap-2 flex-wrap">
                      {['all', 'article', 'video', 'podcast', 'guide'].map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setActiveFilter(filter)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            activeFilter === filter
                              ? 'bg-[var(--color-accent)] text-white'
                              : 'bg-white text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Resources Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <div
                    key={resource.id}
                    className={`bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-700 ${
                      isVisible.library ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${200 + index * 50}ms` }}
                  >
                    {/* Resource Type Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        resource.type === 'article' ? 'bg-blue-100 text-blue-600' :
                        resource.type === 'video' ? 'bg-red-100 text-red-600' :
                        resource.type === 'podcast' ? 'bg-purple-100 text-purple-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {resource.type === 'article' && <HiDocumentText className="w-5 h-5" />}
                        {resource.type === 'video' && <HiPlay className="w-5 h-5" />}
                        {resource.type === 'podcast' && <HiMicrophone className="w-5 h-5" />}
                        {resource.type === 'guide' && <HiBookOpen className="w-5 h-5" />}
                      </div>
                      <span className="text-sm text-gray-500">{resource.date}</span>
                    </div>

                    {/* Thumbnail for videos */}
                    {resource.thumbnail && (
                      <div className="relative h-40 rounded-lg overflow-hidden mb-4">
                        <Image
                          src={resource.thumbnail}
                          alt={`${resource.title} – video thumbnail`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <HiPlay className="w-6 h-6 text-[var(--color-accent)] ml-1" />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      by {resource.author} • {resource.duration || resource.readTime}
                    </p>
                    <p className="text-gray-700 mb-4">
                      {resource.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <a href="#" className="inline-flex items-center text-[var(--color-accent)] font-semibold hover:underline" aria-label={`Open ${resource.type}`}>
                      <span>
                        {resource.type === 'article' && 'Read Article'}
                        {resource.type === 'video' && 'Watch Video'}
                        {resource.type === 'podcast' && 'Listen Now'}
                        {resource.type === 'guide' && (resource.downloadable ? 'Download Guide' : 'Read Guide')}
                      </span>
                      {resource.downloadable ? <HiDownload className="ml-2 w-4 h-4" /> : <HiArrowRight className="ml-2 w-4 h-4" />}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Section */}
      <section 
        ref={(el) => { sectionsRef.current['magazine'] = el; }}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.magazine ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Radical Football Magazine
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                In-depth stories, interviews, and case studies from our community
              </p>
            </div>

            {/* Featured Issue */}
            {magazineIssues.filter(issue => issue.featured).map((issue) => (
              <div key={issue.issue} className="bg-white rounded-3xl overflow-hidden shadow-xl mb-12">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-96 md:h-auto">
                    <Image
                      src={issue.cover}
                      alt={`Issue ${issue.issue} Cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-8 left-8">
                      <span className="text-[var(--color-accent)] font-semibold text-lg">Latest Issue</span>
                      <h3 className="text-4xl font-bold text-white mt-2">Issue #{issue.issue}</h3>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-2">
                      {issue.title}
                    </h3>
                    <p className="text-gray-500 mb-6">{issue.date}</p>
                    <h4 className="font-semibold text-gray-700 mb-4">Featured Articles:</h4>
                    <ul className="space-y-3 mb-8">
                      {issue.articles.map((article, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-[var(--color-accent)] mt-1">•</span>
                          <span className="text-gray-700">{article}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-4">
                      <a href="#" className="inline-flex items-center px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)]/90 transition-colors" aria-label="Read Online">
                        Read Online
                        <HiExternalLink className="ml-2 w-4 h-4" />
                      </a>
                      <a href="#" className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-300 transition-colors" aria-label="Download PDF">
                        Download PDF
                        <HiDownload className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Past Issues */}
            <div className="grid md:grid-cols-3 gap-6">
              {magazineIssues.filter(issue => !issue.featured).map((issue, index) => (
                <div
                  key={issue.issue}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-700 ${
                    isVisible.magazine ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="relative h-48">
                    <Image
                      src={issue.cover}
                      alt={`Issue ${issue.issue} Cover`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-2xl font-bold text-white">Issue #{issue.issue}</h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-[var(--color-primary)] mb-2">
                      {issue.title}
                    </h4>
                    <p className="text-gray-500 mb-4">{issue.date}</p>
                    <Link href={`/resources/magazine/issue-${issue.issue}`} className="text-[var(--color-accent)] font-semibold hover:underline">
                      Read Issue →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reading Lists Section */}
      <section 
        ref={(el) => { sectionsRef.current['reading'] = el; }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.reading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                Recommended Reading
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Essential books to deepen your understanding
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* For Beginners */}
              <div className="bg-[var(--color-primary)] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <HiBookOpen className="w-6 h-6" />
                  For Beginners
                </h3>
                <p className="text-white/80 mb-6">
                  Start your journey with these foundational texts
                </p>
                <div className="space-y-4">
                  {readingLists.beginners.map((book, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-4">
                      <h4 className="font-semibold text-lg">{book.title}</h4>
                      <p className="text-sm text-white/70 mb-2">by {book.author}</p>
                      <p className="text-sm text-white/80">{book.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* For Experienced Practitioners */}
              <div className="bg-gray-50 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6 flex items-center gap-2">
                  <HiBookOpen className="w-6 h-6 text-[var(--color-accent)]" />
                  For Experienced Practitioners
                </h3>
                <p className="text-gray-600 mb-6">
                  Deepen your knowledge with advanced concepts
                </p>
                <div className="space-y-4">
                  {readingLists.experienced.map((book, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-lg text-[var(--color-primary)]">{book.title}</h4>
                      <p className="text-sm text-gray-500 mb-2">by {book.author}</p>
                      <p className="text-sm text-gray-700">{book.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Have a resource to share? We&apos;re always looking for quality content
              </p>
              <Link
                href="/get-involved"
                className="inline-flex items-center px-6 py-3 bg-[var(--color-accent)] text-white font-semibold rounded-full hover:bg-[var(--color-accent)]/90 transition-colors"
              >
                Submit a Resource
                <HiArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Break Spaces Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Learning Spaces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sometimes learning happens in unexpected ways. These spaces are for reflection, confusion, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What I Got Wrong */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <BreakSpaceSymbol type="WHAT_I_GOT_WRONG" size="lg" />
                <h3 className="text-xl font-semibold text-gray-900">
                  What I Got Wrong
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                This is where we revisit things we misunderstood — not with guilt, but with curiosity.
              </p>
              <button className="w-full px-4 py-2 bg-green-50 border-2 border-green-200 text-green-800 rounded-lg hover:bg-green-100 transition-colors duration-200">
                Share Your Learning
              </button>
            </div>

            {/* Reflection Blocked */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <BreakSpaceSymbol type="REFLECTION_BLOCKED" size="lg" />
                <h3 className="text-xl font-semibold text-gray-900">
                  Reflection Blocked
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                When a resource doesn&apos;t help, name that pause. This is part of your learning.
              </p>
              <button className="w-full px-4 py-2 bg-red-50 border-2 border-red-200 text-red-800 rounded-lg hover:bg-red-100 transition-colors duration-200">
                I&apos;m Stuck Here
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}