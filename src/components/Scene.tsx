import { useState, useCallback } from 'react';
import Spline from '@splinetool/react-spline';

export default function Scene() {
  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => {
    // Small delay so the initial frame renders before animating
    requestAnimationFrame(() => setLoaded(true));
  }, []);

  return (
    <div
      className="w-full h-full flex justify-center items-center transition-transform duration-[2000ms] ease-out"
      style={{
        transform: loaded ? 'scale(1)' : 'scale(1.8)',
        opacity: loaded ? 1 : 0,
        transition: 'transform 2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease-out',
      }}
    >
      <Spline scene="/scene-clean.splinecode" onLoad={onLoad} />
    </div>
  );
}
