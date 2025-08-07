'use client';

import Image from 'next/image';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  style?: React.CSSProperties;
}

const ResponsiveImage = ({
  src,
  alt,
  className = '',
  sizes,
  fill = false,
  width,
  height,
  priority = false,
  style,
}: ResponsiveImageProps) => {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
        style={{ objectFit: 'cover', ...style }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width || 800}
      height={height || 600}
      sizes={sizes}
      priority={priority}
      style={style}
    />
  );
};

export default ResponsiveImage;