import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { RotatingText } from "./RotatingText";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import heroPic1 from "./assets/hero3.jpg";
import heroPic2 from "./assets/img5.jpg";
import heroPic3 from "./assets/hero2.jpg";


export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      src:  heroPic1,
      alt: "Happy children in classroom",
    },
    {
      src:heroPic2,
      alt: "Children learning together",
    },
    {
      src: heroPic3,
      alt: "Kids playing and learning",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  // Kids/activities data
  const movingElements = [
    { emoji: '👧', activity: '🎒', top: 25, speed: 10, delay: 0 },
    { emoji: '👦', activity: '⚽', top: 35, speed: 9, delay: 1 },
    { emoji: '🧒', activity: '🎨', top: 45, speed: 11, delay: 2 },
    { emoji: '👶', activity: '🍼', top: 55, speed: 12, delay: 0.5 },
    { emoji: '🧑‍🏫', activity: '📚', top: 65, speed: 10, delay: 1.5 },
  ];

  // Balloons
  const balloons = [...Array(5)].map((_, i) => ({
    left: 10 + i * 15,
    delay: i * 1.2,
  }));

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl mb-6">Welcome to The Beatus Kids Academy</h1>
       <motion.p
  className="text-2xl mb-8 opacity-95 min-h-[2em] flex items-center justify-center font-medium"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
>
  <motion.span
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      repeat: Infinity,
      repeatType: "mirror",
      duration: 3,
      ease: "easeInOut",
    }}
    className="drop-shadow-lg"
  >
    <i>Come, see your child's foundation for future.</i>
  </motion.span>
</motion.p>

      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating kids and activities moving left→right */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {movingElements.map((el, i) => (
          <div key={`kid-${i}`}>
            {/* Child */}
           
          </div>
        ))}

        {/* Balloons */}
        
      </div>
    </section>
  );
}
