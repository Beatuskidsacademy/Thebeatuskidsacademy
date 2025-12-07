import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface RotatingTextProps {
  words: string[];
  prefix?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  initialDelay?: number;
  className?: string;
  cursorColor?: string;
}

export function RotatingText({
  words,
  prefix = "",
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  initialDelay = 500,
  className = "",
  cursorColor = "currentColor",
}: RotatingTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const currentWord = words[currentWordIndex];

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    // Initial delay before starting
    if (isWaiting && displayedText === "" && currentWordIndex === 0) {
      const timeout = setTimeout(() => {
        setIsWaiting(false);
      }, initialDelay);
      return () => clearTimeout(timeout);
    }

    if (isWaiting) {
      return;
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing forward
          if (displayedText.length < currentWord.length) {
            setDisplayedText(currentWord.substring(0, displayedText.length + 1));
          } else {
            // Word complete, pause before deleting
            setIsWaiting(true);
            setTimeout(() => {
              setIsWaiting(false);
              setIsDeleting(true);
            }, pauseDuration);
          }
        } else {
          // Deleting backward
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.substring(0, displayedText.length - 1));
          } else {
            // Finished deleting, move to next word
            setIsDeleting(false);
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isWaiting, currentWord, words.length, speed, deleteSpeed, pauseDuration, initialDelay, currentWordIndex]);

  return (
    <span className={className}>
      {prefix}
      <span className="inline-block min-w-[200px] text-left">
        <AnimatePresence mode="wait">
          <motion.span
            key={displayedText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="text-yellow-300"
          >
            {displayedText}
          </motion.span>
        </AnimatePresence>
        <motion.span
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          className="inline-block ml-1"
          style={{ color: cursorColor }}
        >
          |
        </motion.span>
      </span>
    </span>
  );
}
