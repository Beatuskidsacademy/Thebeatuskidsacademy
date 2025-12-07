import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

interface PreschoolPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PreschoolPopup({ isOpen, onClose }: PreschoolPopupProps) {
  const [showViewAll, setShowViewAll] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setShowViewAll(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowViewAll(false);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[92%] max-w-lg"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 relative">

              {/* Top Close Button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-3 right-3 z-10 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-md"
              >
                <X className="w-4 h-4 text-white" />
              </motion.button>

              <div className="p-6">

                {/* Image */}
                <div className="flex justify-center mb-6">
                  <motion.div className="relative">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                        alt="Preschool Kids"
                        className="w-full h-full object-cover"
                      />

                      {/* View All Button */}
                      <AnimatePresence>
                        {showViewAll && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            className="absolute inset-0 flex items-center justify-center bg-black/60"
                          >
                            <motion.button
                              whileHover={{ scale: 1.08 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm"
                              onClick={() => {
                                const gallerySection = document.getElementById("gallery");
                                if (gallerySection) {
                                  onClose();
                                  setTimeout(() => {
                                    gallerySection.scrollIntoView({ behavior: "smooth" });
                                  }, 300);
                                }
                              }}
                            >
                              View All ✨
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Welcome to The Beatus Kids Academy
                  </h2>

                  <div className="space-y-3 text-left text-sm">
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <h3 className="text-blue-600 mb-1 text-lg">🎓 About Us</h3>
                      <p className="text-gray-700">
                        The Beatus Kids Academy offers a nurturing, play-based learning
                        experience with the Kreedo Curriculum and a 1:12 teacher–student ratio.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                      <h3 className="text-orange-600 mb-1 text-lg">⏰ Day Care</h3>
                      <p className="text-gray-700">
                        Safe and engaging day-care with nutritious meals, homework help,
                        supervised play and outdoor activities.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Close Button */}
                  <div className="flex justify-center pt-2">
                    <Button
                      onClick={onClose}
                      className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-6 py-2 text-sm rounded-full shadow-sm"
                    >
                      Close
                    </Button>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
