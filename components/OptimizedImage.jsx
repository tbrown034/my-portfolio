import Image from 'next/image';

/**
 * OptimizedImage - A wrapper around Next.js Image component with sensible defaults
 * for performance optimization in Next.js 15
 */
export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height,
  priority = false,
  sizes,
  className,
  fill = false,
  quality = 85,
  placeholder,
  blurDataURL,
  ...props 
}) {
  // Default sizes for responsive images based on common breakpoints
  const defaultSizes = fill 
    ? "(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
    : sizes;

  return (
    <Image
      src={src}
      alt={alt}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      fill={fill}
      sizes={defaultSizes}
      quality={quality}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      className={className}
      {...props}
    />
  );
}