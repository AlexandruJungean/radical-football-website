'use client';

import { useState } from 'react';

// Define the 7 mandatory break space symbols
export const BREAK_SPACE_SYMBOLS = {
  RAW_JOURNAL: {
    symbol: '🧱',
    label: 'Raw Journal',
    tooltip: 'This space is not polished. It holds raw reflections from real collaboration — or ones that are still forming.',
    description: 'Unfinished reflections from real collaborations',
    location: 'Club Consultancy → under "What we learned from working together"',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200'
  },
  DONT_UNDERSTAND: {
    symbol: '🙊',
    label: 'I Don\'t Understand',
    tooltip: 'This space holds questions that don\'t seek answers. It protects doubt as part of growth.',
    description: 'Confusion without shame, no answers provided',
    location: 'Parents Forum → also link from "Monthly Questions"',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  LANTERN_OUT: {
    symbol: '🌑',
    label: 'The Lantern Went Out',
    tooltip: 'Sometimes we forget why we started. This space welcomes those moments.',
    description: 'Loss of meaning, burnout moments',
    location: 'Manifest / Ethos page → optional journal-style log',
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-200'
  },
  REFLECTION_BLOCKED: {
    symbol: '🔒',
    label: 'Reflection Blocked',
    tooltip: 'When a resource doesn\'t help, name that pause. This is part of your learning.',
    description: 'When resources don\'t help, name that pause',
    location: 'Radical Library → end of each resource page',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200'
  },
  IMPOSSIBLE_QUESTION: {
    symbol: '🛑',
    label: 'Impossible Question',
    tooltip: 'You can write what feels unacceptable here. We\'ll hold it with care.',
    description: 'Anonymous space for unspeakable concerns',
    location: 'Child Protection section → fixed button across site',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  WAITING_WITHOUT_PROGRESS: {
    symbol: '⏳',
    label: 'Waiting Without Progress',
    tooltip: 'This space isn\'t broken. It\'s waiting. You don\'t need to move forward yet.',
    description: 'Stillness is allowed, time is not a mistake',
    location: 'Floating page accessible from "I need a break"',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200'
  },
  WHAT_I_GOT_WRONG: {
    symbol: '🔁',
    label: 'What I Got Wrong',
    tooltip: 'This is where we revisit things we misunderstood — not with guilt, but with curiosity.',
    description: 'Relearning through error, not guilt',
    location: 'Library, Journal, Conference Recaps → embedded in all editorial content',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200'
  }
} as const;

// Type for the break space keys
export type BreakSpaceKey = keyof typeof BREAK_SPACE_SYMBOLS;

// Component for displaying a break space symbol with tooltip
interface BreakSpaceSymbolProps {
  type: BreakSpaceKey;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  showTooltip?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BreakSpaceSymbol = ({
  type,
  size = 'md',
  showLabel = false,
  showTooltip = true,
  className = '',
  onClick
}: BreakSpaceSymbolProps) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const symbolData = BREAK_SPACE_SYMBOLS[type];

  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const handleMouseEnter = () => {
    if (showTooltip) {
      setIsTooltipVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (showTooltip) {
      setIsTooltipVisible(false);
    }
  };

  return (
    <div className="relative inline-block">
      <div
        className={`
          ${sizeClasses[size]}
          ${symbolData.color}
          ${onClick ? 'cursor-pointer hover:scale-110' : ''}
          transition-all duration-200
          ${className}
        `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        title={showTooltip ? symbolData.tooltip : undefined}
      >
        {symbolData.symbol}
      </div>
      
      {showLabel && (
        <div className="text-xs text-gray-600 mt-1 text-center">
          {symbolData.label}
        </div>
      )}

      {/* Tooltip */}
      {showTooltip && isTooltipVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-50 max-w-xs">
          <div className="font-semibold mb-1">{symbolData.label}</div>
          <div className="text-gray-300">{symbolData.tooltip}</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
};

// Component for displaying all symbols in a reference guide
export const SymbolReferenceGuide = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Radical Football Break Space Symbols
      </h3>
      <p className="text-gray-600 mb-6">
        These symbols represent intentional emotional and pedagogical spaces. They are not errors — they are part of the learning experience.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(BREAK_SPACE_SYMBOLS).map(([key, symbol]) => (
          <div
            key={key}
            className={`p-4 rounded-lg border ${symbol.borderColor} ${symbol.bgColor}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-2xl ${symbol.color}`}>{symbol.symbol}</span>
              <h4 className="font-semibold text-gray-900">{symbol.label}</h4>
            </div>
            <p className="text-sm text-gray-700 mb-2">{symbol.description}</p>
            <p className="text-xs text-gray-500">{symbol.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Hook for managing break space interactions
export const useBreakSpace = () => {
  const [activeBreakSpace, setActiveBreakSpace] = useState<BreakSpaceKey | null>(null);

  const openBreakSpace = (type: BreakSpaceKey) => {
    setActiveBreakSpace(type);
  };

  const closeBreakSpace = () => {
    setActiveBreakSpace(null);
  };

  return {
    activeBreakSpace,
    openBreakSpace,
    closeBreakSpace
  };
};

export default BreakSpaceSymbol; 