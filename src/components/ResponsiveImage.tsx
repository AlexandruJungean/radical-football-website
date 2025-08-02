'use client';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  srcSet?: string;
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
  srcSet,
  fill = false,
  width,
  height,
  priority = false,
  style,
}: ResponsiveImageProps) => {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        sizes={sizes}
        srcSet={srcSet}
        style={{ objectFit: 'cover', ...style }}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      sizes={sizes}
      srcSet={srcSet}
      loading={priority ? 'eager' : 'lazy'}
      style={style}
    />
  );
};

export default ResponsiveImage; 