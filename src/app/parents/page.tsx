'use client';

import { BreakSpaceSymbol } from '@/components/SymbolSystem';
import Header from '@/components/Header';

const ParentsPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header 
        title="Parents & Child Voice"
        description="Space for parents, children, and real questions"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl">🔵</div>
              <div>
                <h2 className="text-3xl font-bold text-[var(--color-primary)]">Coming Soon</h2>
                <p className="text-gray-600">This section is under development</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="p-6 bg-[var(--color-primary)]/10 border-2 border-[var(--color-primary)]/20 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <BreakSpaceSymbol type="DONT_UNDERSTAND" size="lg" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    I Don&apos;t Understand
                  </h3>
                </div>
                <p className="text-gray-600">
                  This space holds questions that don&apos;t seek answers. It protects doubt as part of growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ParentsPage; 