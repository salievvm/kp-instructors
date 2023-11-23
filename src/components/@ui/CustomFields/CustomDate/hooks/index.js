import { useState, useEffect } from "react";

// Hook
export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

// helpers
export const addZeroToDate = (str) => {
	if (`${str}`.length === 1) return `0${str}`
	return str
}
export const fromStrToDate = (str) => {
	if (!str) return str
	const dateStr = str.split('.')
	return new Date(dateStr[2], dateStr[1] - 1, dateStr[0])
}
export const fromDateToStr = (date) => {
	return `${addZeroToDate(date.getDate())}.${addZeroToDate(date.getMonth() + 1)}.${date.getFullYear()}`
}
