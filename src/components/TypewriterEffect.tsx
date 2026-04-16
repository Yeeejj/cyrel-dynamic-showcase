import { useEffect, useState, useMemo, useRef } from 'react';

const TypewriterEffect = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const jobTitles = useMemo(() => [
    'Data Analyst',
    'AI & ML Engineer',
    'Project Manager'
  ], []);

  useEffect(() => {
    const currentTitle = jobTitles[currentIndex];

    timeoutRef.current = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentTitle.substring(0, currentText.length - 1));
        if (currentText.length <= 1) {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % jobTitles.length);
        }
      } else {
        setCurrentText(currentTitle.substring(0, currentText.length + 1));
        if (currentText === currentTitle) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeoutRef.current);
  }, [currentText, currentIndex, isDeleting, jobTitles]);

  return (
    <div className="text-xl md:text-2xl text-[var(--accent)] min-h-[2em] flex items-center justify-center font-mono tracking-wider">
      <span>{currentText}</span>
      <span className="animate-pulse ml-0.5">|</span>
    </div>
  );
};

export default TypewriterEffect;
