import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorColor?: string;
  loop?: boolean;
  onComplete?: () => void;
}

export function TypingEffect({
  text,
  speed = 100,
  delay = 500,
  className = "",
  cursorColor = "currentColor",
  loop = false,
  onComplete,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!loop && currentIndex === text.length) {
      onComplete?.();
      return;
    }

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing forward
          if (currentIndex < text.length) {
            setDisplayedText(text.substring(0, currentIndex + 1));
            setCurrentIndex((prev) => prev + 1);
          } else if (loop) {
            // If looping, start deleting after a pause
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting backward
          if (currentIndex > 0) {
            setDisplayedText(text.substring(0, currentIndex - 1));
            setCurrentIndex((prev) => prev - 1);
          } else {
            // Start typing again
            setIsDeleting(false);
          }
        }
      },
      currentIndex === 0 ? delay : isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, speed, delay, loop, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className="inline-block ml-1"
        style={{ color: cursorColor }}
      >
        |
      </motion.span>
    </span>
  );
}
