import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import summercamp from "./assets/summercamp12.jpeg";

interface PreschoolPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PreschoolPopup({ isOpen, onClose }: PreschoolPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50"
          />

          {/* Center Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4"
          >
            {/* Poster Container */}
            <div className="relative bg-white rounded-xl shadow-2xl">

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 bg-black/60 text-white rounded-full flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

              {/* IMAGE */}
              <img
                src={summercamp}
                alt="Poster"
                className="
                  max-w-[80vw]     /* responsive width */
                  max-h-[70vh]     /* prevent overflow */
                  w-[320px]        /* main poster size */
                  h-auto
                  object-contain
                  rounded-xl
                "
              />

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}