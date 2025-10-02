// hooks/useGsapContext.js
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export const useGsapContext = (callback) => {
  const scope = useRef();

  useEffect(() => {
    const ctx = gsap.context(callback, scope);
    return () => ctx.revert();
  }, [callback]);

  return scope;
};