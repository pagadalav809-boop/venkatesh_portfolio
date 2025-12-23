import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const useTypewriter = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: UseTypewriterOptions) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[currentWordIndex];
    
    if (isDeleting) {
      setCurrentText(currentWord.substring(0, currentText.length - 1));
    } else {
      setCurrentText(currentWord.substring(0, currentText.length + 1));
    }
  }, [currentText, currentWordIndex, isDeleting, words]);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    let timeout: ReturnType<typeof setTimeout>;
    
    if (!isDeleting && currentText === currentWord) {
      // Finished typing, pause then start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && currentText === '') {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Continue typing or deleting
      timeout = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration, tick]);

  return { currentText, isDeleting };
};
