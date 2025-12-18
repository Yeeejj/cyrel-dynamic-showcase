import { useEffect, useState, useMemo } from 'react';

const TypewriterEffect = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const jobTitles = useMemo(() => [
    'Cybersecurity Analyst',
    'Machine Learning Engineer',
    'Data Scientist',
    'Quantitative Analyst',
    'UX/UI Designer',
    'Financial Software Engineer',
    'Cloud Infrastructure Engineer',
    'Business Intelligence Analyst',
    'Data Engineer',
    'Product Manager'
  ], []);

  useEffect(() => {
    const currentTitle = jobTitles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentTitle.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % jobTitles.length);
        }
      } else {
        setCurrentText(currentTitle.substring(0, currentText.length + 1));
        if (currentText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, jobTitles]);

  return (
    <div className="text-2xl text-[#630000] min-h-[2em] flex items-center justify-center font-mono">
      {currentText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypewriterEffect;