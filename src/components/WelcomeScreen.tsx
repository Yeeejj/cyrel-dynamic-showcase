import { useEffect, useState } from 'react';

const welcomeTexts = [
  'HELLO', 'HOLA', 'BONJOUR', 'GUTEN TAG', 'CIAO', 
  'KONNICHIWA', 'NAMASTE', 'SHALOM', 'SALAAM', 'KUMUSTA'
];

const WelcomeScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === welcomeTexts.length - 1) {
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 500);
          }, 500);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 bg-gradient-to-br from-black to-[#630000] ${!isVisible ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-6xl font-bold text-[#EEEBDD] animate-fade-in font-serif">
        {welcomeTexts[currentIndex]}
      </div>
    </div>
  );
};

export default WelcomeScreen;