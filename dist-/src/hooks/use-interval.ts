
import { useEffect, useRef } from 'react';

/**
 * Custom hook for setting an interval that is properly cleaned up when the component unmounts
 * or when dependencies change.
 * 
 * @param callback The function to call on each interval
 * @param delay The delay in milliseconds. If null, the interval is paused
 */
export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>(callback);

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return undefined;
  }, [delay]);
}
