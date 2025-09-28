'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

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
  const fallbacks = useMemo(
    () => [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    ],
    []
  );

  const fallback = useMemo(() => {
    const key = (src ?? alt ?? '').trim();
    if (!key) {
      return fallbacks[0];
    }

    const hash = Array.from(key).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return fallbacks[hash % fallbacks.length];
  }, [alt, fallbacks, src]);

  const chosenSrc = !src || error ? fallback : src;

  return (
    <Image
      src={chosenSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}
