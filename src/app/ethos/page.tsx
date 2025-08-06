'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiArrowRight, HiDownload, HiHeart, HiAcademicCap } from 'react-icons/hi';
import { BreakSpaceSymbol } from '@/components/SymbolSystem';
import YoungPlayerImage from '@/components/YoungPlayerImage';
import Header from '@/components/Header';

const EthosPage = () => {
  const [showLanternSpace, setShowLanternSpace] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header 
        title="Our Ethos & Principles"
        description="The voice of Radical Football and our moral compass for working with young players"
      />

      {/* Manifest Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl">🔥</div>
              <div>
                <h2 className="text-3xl font-bold text-[var(--color-primary)]">Manifest</h2>
                <p className="text-gray-600">Our guiding light and vision</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-xl leading-relaxed text-gray-700 mb-6">
                Radical Football este o mișcare educațională vie, construită pe convingerea că fotbalul pentru copii și adolescenți este un spațiu de dezvoltare umană, nu doar o activitate sportivă.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                În centrul fiecărei inițiative se află copilul, privit ca un sistem complex, viu și adaptiv, care învață în relație cu ceilalți și cu mediul său.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Fiecare antrenor, educator sau părinte implicat în Radical Football își asumă să creeze contexte în care copiii au libertatea să exploreze, să greșească, să înțeleagă și să crească într-un ritm propriu.
              </p>
            </div>

            {/* Example of young player image usage */}
            <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
              <YoungPlayerImage
                variant="full"
                fill
                className="object-cover"
                alt="Young player in founder context"
              />
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-6 py-3 bg-[var(--color-accent)] text-white rounded-full hover:bg-[var(--color-accent)]/90 transition-colors duration-200 flex items-center gap-2">
                <HiDownload className="w-4 h-4" />
                <span>Take it with you</span>
              </button>
              
              <button className="px-6 py-3 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)]/5 transition-colors duration-200 flex items-center gap-2">
                <HiHeart className="w-4 h-4" />
                <span>What did you feel?</span>
              </button>
            </div>

            {/* Break Space */}
            <div className="border-t border-gray-200 pt-8">
              <button
                onClick={() => setShowLanternSpace(true)}
                className="w-full p-6 bg-[var(--color-primary)]/5 border-2 border-[var(--color-primary)]/10 rounded-lg hover:bg-[var(--color-primary)]/10 transition-colors duration-200 text-left"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BreakSpaceSymbol type="LANTERN_OUT" size="lg" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    The Lantern Went Out
                  </h3>
                </div>
                <p className="text-gray-600">
                  Sometimes we forget why we started. This space welcomes those moments.
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Code Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl">🧭</div>
              <div>
                <h2 className="text-3xl font-bold text-[var(--color-primary)]">Ethical Code & DEI</h2>
                <p className="text-gray-600">Our moral compass and inclusion principles</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Diversity, Equity & Inclusion</h3>
                <p className="text-gray-700 mb-4">
                  Radical Football integrează principiile DEI – Diversitate, Echitate și Incluziune – nu ca formalitate, ci ca parte din structura sa de lucru.
                </p>
                <p className="text-gray-700 mb-4">
                  Diversitatea de gen, de origine, de stil de învățare sau de experiență este considerată o resursă pedagogică esențială.
                </p>
                <Link
                  href="/ethos/dei"
                  className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:underline"
                >
                  <span>How does inclusion feel in training?</span>
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Commitments</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <HiAcademicCap className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    <span>Accessul echitabil la formare, vizibilitate și influență este un drept garantat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiAcademicCap className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    <span>Incluziunea este activă, măsurabilă și reflectată în toate activitățile</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <HiAcademicCap className="w-5 h-5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                    <span>Respingem orice formă de excludere, marginalizare sau ridiculizare</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Interactive Elements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Link
                href="/ethos/quiz"
                className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Ethical Dilemmas Quiz
                </h3>
                <p className="text-gray-600 mb-4">
                  Explore real coaching scenarios and test your ethical decision-making
                </p>
                <div className="flex items-center gap-2 text-blue-600">
                  <span>Start Quiz</span>
                  <HiArrowRight className="w-4 h-4" />
                </div>
              </Link>

              <Link
                href="/ethos/cases"
                className="p-6 bg-green-50 border-2 border-green-200 rounded-lg hover:bg-green-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Real Case Studies
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn from actual situations coaches have faced and how they navigated them
                </p>
                <div className="flex items-center gap-2 text-green-600">
                  <span>View Cases</span>
                  <HiArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            {/* Break Space */}
            <div className="border-t border-gray-200 pt-8">
              <Link
                href="/ethos/lost"
                className="w-full p-6 bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)]/20 rounded-lg hover:bg-[var(--color-accent)]/20 transition-colors duration-200 text-left block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BreakSpaceSymbol type="DONT_UNDERSTAND" size="lg" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    I Got Lost
                  </h3>
                </div>
                <p className="text-gray-600">
                  Examples of moral failure and how we can learn from them
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Moderation Policy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Moderation Policy</h2>
            <p className="text-gray-700 mb-6">
              Our community is built on trust, respect, and ethical behavior. We have clear guidelines for maintaining a safe and supportive environment.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HiHeart className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Respect</h3>
                <p className="text-sm text-gray-600">Treat everyone with dignity and kindness</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HiAcademicCap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Safety</h3>
                <p className="text-sm text-gray-600">Child protection is our highest priority</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HiAcademicCap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Learning</h3>
                <p className="text-sm text-gray-600">Growth through honest reflection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lantern Space Modal */}
      {showLanternSpace && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <div className="text-center mb-6">
              <BreakSpaceSymbol type="LANTERN_OUT" size="lg" />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">
                The Lantern Went Out
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6 text-center">
              Sometimes we forget why we started. This space welcomes those moments of doubt, 
              burnout, or lost meaning. You can share anonymously or just read others&apos; experiences.
            </p>
            
            <div className="space-y-4 mb-6">
              <textarea
                placeholder="Share your moment of lost meaning... (optional)"
                className="w-full p-3 border border-gray-300 rounded-lg resize-none"
                rows={4}
              />
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowLanternSpace(false)}
                className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Close
              </button>
              <button className="flex-1 px-4 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors duration-200">
                Share (Anonymous)
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default EthosPage; 