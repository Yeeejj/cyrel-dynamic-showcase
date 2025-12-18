import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-16 rounded-full bg-[#D8B6A4] border-2 border-[#630000] flex items-center justify-center transition-all duration-300 hover:shadow-lg group"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Night Mode'}
    >
      {/* Light Mode: Sun in front, Moon behind */}
      <div className={`absolute transition-all duration-300 ${isDark ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
        <Sun size={28} className="text-yellow-500" strokeWidth={2.5} />
      </div>
      <div className={`absolute transition-all duration-300 ${isDark ? 'opacity-0 scale-0' : 'opacity-20 scale-75'}`}>
        <Moon size={20} className="text-[#630000]" strokeWidth={2} />
      </div>

      {/* Night Mode: Moon in front, Sun behind */}
      <div className={`absolute transition-all duration-300 ${isDark ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
        <Moon size={28} className="text-slate-300" strokeWidth={2.5} />
      </div>
      <div className={`absolute transition-all duration-300 ${isDark ? 'opacity-20 scale-75' : 'opacity-0 scale-0'}`}>
        <Sun size={20} className="text-yellow-400" strokeWidth={2} />
      </div>

      {/* Hover indicator */}
      <div className="absolute inset-0 rounded-full border-2 border-[#630000] opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
    </button>
  );
};

export default ThemeToggle;