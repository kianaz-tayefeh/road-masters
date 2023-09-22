import type { LegacyRef } from "react";
import { useEffect, useRef } from "react";

type ClickCallback = (event: MouseEvent) => void;

export const useOutsideClick = (callback: ClickCallback) => {
  const ref = useRef<HTMLElement | null>();

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, callback]);

  return ref as LegacyRef<HTMLUListElement> | undefined;
};
