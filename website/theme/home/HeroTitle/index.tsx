import { motion } from 'motion/react';
import { memo, useEffect, useRef, useState } from 'react';
import './index.less';

const TEXT_ARRAY = ['String', 'Email', 'Hex', 'Phone', 'Number'];

const HeroTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentWord = TEXT_ARRAY[currentIndex];

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    clearTimer();
    if (!isActive) return;

    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex < currentWord.length) {
      timeoutRef.current = setTimeout(() => setCharIndex((i) => i + 1), speed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => setCharIndex((i) => i - 1), speed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % TEXT_ARRAY.length);
    }

    return clearTimer;
  }, [charIndex, isDeleting, currentWord, isActive]);

  const characters = currentWord.slice(0, charIndex).split('');

  return (
    <div
      className="move-title"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <h1 className="check">
        Check<span className="is">is</span>
      </h1>
      <div className="writer">
        <span className="is">is</span>
        <span className="typewriter-text">
          {characters.map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
          <span className="cursor">|</span>
        </span>
      </div>
    </div>
  );
};

export default memo(HeroTitle);
