import { useEffect, useRef } from "react";

export const useSliderX = (_speed?: number) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    const scroll = scrollRef.current;
    if (!container || !scroll) return;

    let pos = 0;
    const speed = _speed || 0.8; // pixels per frame, adjust for speed

    const step = () => {
      pos -= speed;
      if (Math.abs(pos) >= scroll.scrollWidth / 2) {
        pos = 0; // reset smoothly after half scroll width (because content is duplicated)
      }
      scroll.style.transform = `translateX(${pos}px)`;
      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return {
    containerRef,
    scrollRef,
  };
};
