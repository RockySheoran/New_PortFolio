"use client";

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== 'undefined') {
      const media = window.matchMedia(query);
      
      // Update state with current match
      if (media.matches !== matches) {
        setMatches(media.matches);
      }

      // Create listener
      const listener = () => setMatches(media.matches);
      
      // Add listener
      media.addEventListener('change', listener);

      // Clean up
      return () => media.removeEventListener('change', listener);
    }
  }, [matches, query]);

  return matches;
}

// Common media queries you might want to export
export const useIsSm = () => useMediaQuery('(min-width: 640px)');
export const useIsMd = () => useMediaQuery('(min-width: 768px)');
export const useIsLg = () => useMediaQuery('(min-width: 1024px)');
export const useIsXl = () => useMediaQuery('(min-width: 1280px)');
export const useIs2Xl = () => useMediaQuery('(min-width: 1536px)');