import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface DaycarePromoProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DaycarePromo({ isOpen, onClose }: DaycarePromoProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 12,
    minutes: 20
  });

  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes } = prev;
        
        if (minutes > 0) {
          minutes--;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
        }
        
        return { days, hours, minutes };
      });
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [isOpen]);

  const handleLearnMore = () => {
    onClose();
    setTimeout(() => {
      const daycareSection = document.getElementById('daycare');
      if (daycareSection) {
        daycareSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: -100, rotate: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-[60] w-[calc(100%-2rem)] md:w-[600px] max-w-[90vw]"
          >
            <div className="bg-gradient-to-br from-white via-orange-50 to-yellow-50 rounded-3xl shadow-2xl overflow-hidden border-4 border-white">
              {/* Close Button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-3 right-3 z-10 w-10 h-10 bg-white hover:bg-red-500 rounded-full flex items-center justify-center shadow-lg transition-colors group"
              >
                <X className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
              </motion.button>

              <div className="flex flex-col md:flex-row">
                {/* Left Side - Logo/Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="md:w-1/3 bg-gradient-to-br from-orange-400 to-yellow-500 p-6 flex items-center justify-center relative overflow-hidden"
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-20 h-20 border-4 border-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>

                  {/* Logo */}
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10"
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <span className="text-5xl md:text-6xl">🌸</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right Side - Content */}
                <div className="md:w-2/3 p-6 md:p-8">
                  {/* Timer */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 mb-4"
                  >
                    <Clock className="w-4 h-4 text-orange-600" />
                    <p className="text-sm text-orange-600">
                      <span className="bg-orange-100 px-2 py-1 rounded">
                        {timeLeft.days}D : {timeLeft.hours}H : {timeLeft.minutes}M
                      </span>
                      <span className="ml-2 text-purple-600">Limited time</span>
                    </p>
                  </motion.div>

                  {/* Main Heading */}
                  <motion.h2
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl text-gray-800 mb-4"
                  >
                    Claim 10% OFF today only!
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 mb-6 leading-relaxed"
                  >
                    Sign up for our daycare services and get early access to special deals. Quality care for your little ones with flexible hours and nurturing environment!
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2 mb-6"
                  >
                    {['🕐 Extended Hours: 7 AM - 7 PM', '🍎 Nutritious Meals Included', '👨‍👩‍👧 Low Child-to-Staff Ratio'].map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <span className="text-base">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handleLearnMore}
                      className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg group relative overflow-hidden"
                      size="lg"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Learn More About Daycare
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: [-200, 200],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </Button>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="text-xs text-gray-500 text-center mt-3"
                  >
                    ✨ Limited slots available for this month
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
