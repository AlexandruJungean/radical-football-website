'use client';

import Image from 'next/image';
// Define the image variants for styling purposes only
const IMAGE_VARIANTS = {
  full: {
    description: 'Full image - standard usage'
  },
  silhouette: {
    description: 'Silhouette - subtle design element'
  },
  fragment: {
    description: 'Fragment - background in reflection spaces'
  },
  badge: {
    description: 'Badge - discrete visual signature'
  }
} as const;

type Variant = keyof typeof IMAGE_VARIANTS;

interface YoungPlayerImageProps {
  variant: Variant;
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

const YoungPlayerImage = ({
  variant,
  className = '',
  alt,
  width,
  height,
  priority = false,
  fill = false,
  sizes
}: YoungPlayerImageProps) => {

  // Get appropriate image source based on variant
  const getImageSource = () => {
    switch (variant) {
      case 'full':
        return '/images/young-player.png';
      case 'silhouette':
        return '/images/transparent-background/young-player.png';
      case 'fragment':
        return '/images/young-player.png'; // Will be blurred via CSS
      case 'badge':
        return '/images/transparent-background/young-player.png';
      default:
        return '/images/young-player.png';
    }
  };

  // Get appropriate CSS classes based on variant
  const getVariantClasses = () => {
    const baseClasses = `young-player-${variant}`;
    
    switch (variant) {
      case 'silhouette':
        return `${baseClasses} filter grayscale opacity-30`;
      case 'fragment':
        return `${baseClasses} filter blur-sm opacity-20`;
      case 'badge':
        return `${baseClasses} w-8 h-8 opacity-40`;
      default:
        return baseClasses;
    }
  };

  // Get appropriate alt text
  const getAltText = () => {
    if (alt) return alt;
    
    switch (variant) {
      case 'full':
        return 'Young player';
      case 'silhouette':
        return 'Young player silhouette';
      case 'fragment':
        return 'Young player background element';
      case 'badge':
        return 'Young player badge';
      default:
        return 'Young player';
    }
  };

  const imageSource = getImageSource();
  const variantClasses = getVariantClasses();
  const altText = getAltText();

  return (
    <div className={`young-player-container ${variantClasses} ${className}`}>
      {fill ? (
        <Image
          src={imageSource}
          alt={altText}
          fill
          priority={priority}
          sizes={sizes}
          className="object-contain"
        />
      ) : (
        <Image
          src={imageSource}
          alt={altText}
          width={width || 400}
          height={height || 600}
          priority={priority}
          sizes={sizes}
          className="object-contain"
        />
      )}
    </div>
  );
};

// Simplified hook - no restrictions
export const useYoungPlayerStats = () => {
  return {
    totalUsage: 0,
    usageByContext: {},
    usageByVariant: {}
  };
};

// Simplified validation - always returns true
export const validateYoungPlayerUsage = (): boolean => {
  return true;
};

// Component for displaying usage guidelines (optional)
export const YoungPlayerGuidelines = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">
        Young Player Image Usage
      </h3>
      <ul className="text-sm text-blue-700 space-y-1">
        <li>• Use freely across the site</li>
        <li>• Available variants: full, silhouette, fragment, badge</li>
        <li>• No usage restrictions applied</li>
      </ul>
    </div>
  );
};

export default YoungPlayerImage;
