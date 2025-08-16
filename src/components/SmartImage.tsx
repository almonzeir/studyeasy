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
 * A smart image component that falls back to a set of remote placeholder images when
 * the provided source fails to load or is undefined. This keeps broken URLs from
 * rendering visibly on the page.
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
    'https://picsum.photos/seed/uni1/600/300',
    'https://picsum.photos/seed/uni2/600/300',
    'https://picsum.photos/seed/uni3/600/300',
    'https://picsum.photos/seed/uni4/600/300',
    'https://picsum.photos/seed/uni5/600/300',
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
