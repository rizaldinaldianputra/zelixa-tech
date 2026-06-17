import { useState, useEffect } from 'react';

export function useCarousel(length: number, interval: number = 5000) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (length <= 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [length, interval]);

  return { current, setCurrent };
}
