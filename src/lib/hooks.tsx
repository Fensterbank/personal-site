import { useEffect, useState, useRef, useCallback } from 'react';

export const useDebounce = (value: unknown, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useTimeout = (callback: () => void, timeout = 0): (() => void) => {
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const cancel = useCallback(() => {
    const timeoutId = timeoutIdRef.current;
    if (timeoutId) {
      timeoutIdRef.current = undefined;
      clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    timeoutIdRef.current = setTimeout(callback, timeout);
    return cancel;
  }, [callback, timeout, cancel]);

  return cancel;
};
