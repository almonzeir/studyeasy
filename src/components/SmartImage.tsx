import Image from 'next/image';
import { useState } from 'react';

type Props = {
  src?: string | null;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
};

/**
 * A smart image component that falls back to a set of local placeholder images when
 * the provided source fails to load or is undefined.
 */
export default function SmartImage({
  src,
  alt = '',
  width = 600,
  height = 300,
  className,
}: Props) {
  const [error, setError] = useState(false);
  const fallbacks = [
    '/universities/uni1.png',
    '/universities/uni2.png',
    '/universities/uni3.png',
    '/universities/uni4.png',
    '/universities/uni5.png',
  ];
  const fallback = fallbacks[Math.floor(Math.random() * fallbacks.length)];
  const chosenSrc = !src || error ? fallback : src;

  return (
    <Image
      src={chosenSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setError(true)}
    />
  );
}
