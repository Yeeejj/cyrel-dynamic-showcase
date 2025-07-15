import { useState } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-[#630000] text-[#EEEBDD] rounded font-semibold hover:opacity-80 transition-opacity"
    >
      {isDark ? 'LIGHT' : 'NIGHT'}
    </button>
  );
};

export default ThemeToggle;