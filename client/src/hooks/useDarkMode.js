import { useEffect, useState } from 'react';

export const useDarkMode = initialValue => {
  const [isDark, setIsDark] = useState(initialValue);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return [isDark, setIsDark];
};
