import { useEffect, useState, useCallback } from 'react';

const welcomeTexts = [
  'HELLO', 'HOLA', 'BONJOUR', 'GUTEN TAG', 'CIAO',
  'KONNICHIWA', 'NAMASTE', 'SHALOM', 'SALAAM', 'KUMUSTA'
];

const WelcomeScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const finish = useCallback(() => {
    setIsFading(true);
    setTimeout(onComplete, 500);
  }, [onComplete]);

  useEffect(() => {
    if (currentIndex >= welcomeTexts.length - 1) {
      const timer = setTimeout(finish, 500);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 400);

    return () => clearTimeout(timer);
  }, [currentIndex, finish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black to-[#630000] transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="text-5xl md:text-7xl font-bold text-[#EEEBDD] font-cormorant tracking-wide">
        {welcomeTexts[currentIndex]}
      </div>
    </div>
  );
};

export default WelcomeScreen;
