import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--accent)]/30 flex items-center justify-center transition-all duration-300 hover:border-[var(--accent)]"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? (
        <Sun size={18} className="text-[var(--text-primary)]" />
      ) : (
        <Moon size={18} className="text-[var(--text-primary)]" />
      )}
    </button>
  );
};

export default ThemeToggle;
