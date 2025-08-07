'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiArrowRight, HiHeart, HiAcademicCap, HiUsers } from 'react-icons/hi';
import { BreakSpaceSymbol } from '@/components/SymbolSystem';
import Header from '@/components/Header';
export const metadata = {
  title: 'Start Here – Radical Football',
  description: 'Choose an emotional path and find resources tailored to your journey.',
};

const StartHerePage = () => {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [showBreakSpace, setShowBreakSpace] = useState(false);

  const emotionalPaths = [
    {
      id: 'coach-stuck',
      title: 'I\'m a coach and I feel I don\'t know how to continue',
      description: 'You\'re not alone. Many coaches reach this point where traditional methods feel inadequate.',
      icon: <HiAcademicCap className="w-8 h-8" />,
      color: 'bg-blue-50 border-blue-200 text-blue-800',
      href: '/resources?path=coach'
    },
    {
      id: 'parent-support',
      title: 'I\'m a parent and I\'m looking for real support',
      description: 'Parenting a young athlete comes with unique challenges. Let\'s explore them together.',
      icon: <HiHeart className="w-8 h-8" />,
      color: 'bg-red-50 border-red-200 text-red-800',
      href: '/parents?path=parent'
    },
    {
      id: 'want-change',
      title: 'I want to change something, but I don\'t know where to start',
      description: 'The desire for change is the first step. Let\'s find your starting point.',
      icon: <HiUsers className="w-8 h-8" />,
      color: 'bg-green-50 border-green-200 text-green-800',
      href: '/ethos?path=change'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header 
        title="What's your relationship with football?"
        description="This isn't a test. There are no right answers. We're here to meet you where you are, with whatever questions, doubts, or hopes you carry."
      />

      {/* Emotional Path Selection */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 mb-16">
            {emotionalPaths.map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(path.id)}
                className={`w-full p-6 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                  selectedPath === path.id 
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-4 text-left">
                  <div className={`p-3 rounded-full ${path.color}`}>
                    {path.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {path.title}
                    </h3>
                    <p className="text-gray-600">
                      {path.description}
                    </p>
                  </div>
                  <HiArrowRight className="w-6 h-6 text-gray-400" />
                </div>
              </button>
            ))}
          </div>

          {/* Break Spaces */}
          <div className="space-y-8">
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">
                Sometimes we need to pause
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                  onClick={() => setShowBreakSpace(true)}
                  className="p-6 bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)]/20 rounded-lg hover:bg-[var(--color-accent)]/20 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <BreakSpaceSymbol type="WAITING_WITHOUT_PROGRESS" size="lg" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      I need a pause
                    </h3>
                  </div>
                  <p className="text-gray-600 text-left">
                    This space isn&apos;t broken. It&apos;s waiting. You don&apos;t need to move forward yet.
                  </p>
                </button>

                <Link
                  href="/ethos"
                  className="p-6 bg-[var(--color-primary)]/5 border-2 border-[var(--color-primary)]/10 rounded-lg hover:bg-[var(--color-primary)]/10 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <BreakSpaceSymbol type="LANTERN_OUT" size="lg" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      I&apos;ve lost my way
                    </h3>
                  </div>
                  <p className="text-gray-600 text-left">
                    Sometimes we forget why we started. This space welcomes those moments.
                  </p>
                </Link>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">
                Quick actions
              </h2>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/ethos"
                  className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-full hover:bg-[var(--color-accent)]/90 transition-colors duration-200 flex items-center gap-2"
                >
                  <span>Read our Manifest</span>
                  <HiArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  href="/resources"
                  className="px-6 py-3 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)]/5 transition-colors duration-200 flex items-center gap-2"
                >
                  <span>Browse Resources</span>
                  <HiArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  href="/community"
                  className="px-6 py-3 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)]/5 transition-colors duration-200 flex items-center gap-2"
                >
                  <span>Join Community</span>
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Break Space Modal */}
      {showBreakSpace && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <BreakSpaceSymbol type="WAITING_WITHOUT_PROGRESS" size="lg" />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                Waiting Without Progress
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6 text-center">
              You can stay here. Time is not a mistake. 
              Sometimes the most important thing we can do is nothing at all.
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowBreakSpace(false)}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Close
              </button>
              <Link
                href="/map"
                className="flex-1 px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors duration-200 text-center"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default StartHerePage; 