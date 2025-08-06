'use client';

import { BreakSpaceSymbol } from '@/components/SymbolSystem';
import Header from '@/components/Header';

const ConsultancyPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header 
        title="Club Consultancy"
        description="Co-learning approach for football clubs and organizations"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl">🟣</div>
              <div>
                <h2 className="text-3xl font-bold text-[var(--color-primary)]">Coming Soon</h2>
                <p className="text-gray-600">This section is under development</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="p-6 bg-[var(--color-accent)]/10 border-2 border-[var(--color-accent)]/20 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <BreakSpaceSymbol type="RAW_JOURNAL" size="lg" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    Raw Journal
                  </h3>
                </div>
                <p className="text-gray-600">
                  This space is not polished. It holds raw reflections from real collaboration — or ones that are still forming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ConsultancyPage; 