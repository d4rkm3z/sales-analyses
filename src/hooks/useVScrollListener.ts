import { useEffect } from 'react';

export const useVScrollListener = (
  setVerticalOffset: (yOffset: number) => void,
): void => {
  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => setVerticalOffset(window.pageYOffset),
      {
        passive: true,
      },
    );

    return (): void => {
      window.removeEventListener('scroll', () =>
        setVerticalOffset(window.pageYOffset),
      );
    };
  }, [setVerticalOffset]);
};
