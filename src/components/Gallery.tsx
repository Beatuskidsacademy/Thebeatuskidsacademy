import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, Calendar, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import img1 from "../components/assets/img1.jpg";
import img2 from "../components/assets/img2.jpg";
import img3 from "../components/assets/img3.jpg";
import img4 from "../components/assets/imgg4.jpg";
import img5 from "../components/assets/hero2.jpg";
import img6 from "../components/assets/hero3.jpg";
import img7 from "../components/assets/img7.jpg";
import img8 from "../components/assets/img8.jpg";
import img9 from "../components/assets/img9.jpg";
import img10 from "../components/assets/img10.jpg";
import img11 from "../components/assets/img11.jpg";
import img13 from "../components/assets/img13.jpg";


interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  title: string;
  date: string;
  category: string;
  location?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: img1,
    title: "Activity 1",
    date: "2025",
    category: "Daily Activities",
  },
  {
    id: 2,
    type: "image",
    src: img2,
    title: "Activity 2",
    date: "2025",
    category: "Arts & Crafts",
  },
 {
    id: 3,
    type: "image",
    src: img3,
    title: "Activity 1",
    date: "2025",
    category: "Arts & Crafts",
  },
  {
    id: 4,
    type: "image",
    src: img4,
    title: "Activity 2",
    date: "2025",
    category: "Celebration",
  },{
    id: 5,
    type: "image",
    src: img5,
    title: "Activity 1",
    date: "2025",
    category: "Daily Activities",
  },
  {
    id: 6,
    type: "image",
    src: img6,
    title: "Activity 2",
    date: "2025",
    category: "Sports",
  },{
    id: 7,
    type: "image",
    src: img7,
    title: "Activity 1",
    date: "2025",
    category: "Sports",
  },
  {
    id: 8,
    type: "image",
    src: img8,
    title: "Activity 2",
    date: "2025",
    category: "Sports",
  },{
    id: 9,
    type: "image",
    src: img9,
    title: "Activity 1",
    date: "2025",
    category: "Daily Activities",
  },
  {
    id: 10,
    type: "image",
    src: img10,
    title: "Activity 2",
    date: "2025",
    category: "Celebration",
  },{
    id: 11,
    type: "image",
    src: img11,
    title: "Activity 1",
    date: "2025",
    category: "Celebration",
  },
  {
    id: 13,
    type: "image",
    src: img13,
    title: "Activity 1",
    date: "2025",
    category: "Outdoor Fun",
  },
];

export function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "Arts & Crafts", "Education", "Outdoor Fun", "Celebration", "Music", "Sports", "Daily Activities"];

  const filteredItems = filter === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white via-yellow-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">
            School Events & Activities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the joyful moments and exciting events that make Sunshine Preschool special
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 ${
                filter === category
                  ? "bg-yellow-400 text-gray-800 shadow-lg scale-105"
                  : "bg-white text-gray-600 hover:bg-yellow-100 hover:shadow-md"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
                onClick={() => setSelectedMedia(item)}
              >
                {/* Image/Video Thumbnail */}
                <div className="relative w-full h-full">
                  <ImageWithFallback
                    src={item.type === "video" ? item.thumbnail! : item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                  />

                  {/* Video Play Icon */}
                  {item.type === "video" && (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      whileHover={{ scale: 1.1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                    >
                      <div className="bg-yellow-400 rounded-full p-6 shadow-xl">
                        <Play className="w-10 h-10 text-gray-800 fill-gray-800" />
                      </div>
                    </motion.div>
                  )}

                  {/* Category Badge */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 left-4 z-10"
                  >
                    <span className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm shadow-lg">
                      {item.category}
                    </span>
                  </motion.div>

                  {/* Content Overlay */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6 z-10"
                  >
                    <h3 className="text-white text-xl mb-2">{item.title}</h3>
                    <div className="flex items-center gap-4 text-yellow-300 text-sm">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                      {item.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 text-gray-500"
          >
            <p className="text-xl">No events found in this category</p>
          </motion.div>
        )}
      </div>

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 z-50"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Media Content */}
              <div className="relative bg-black">
                {selectedMedia.type === "video" ? (
                  <video
                    controls
                    autoPlay
                    className="w-full max-h-[70vh] object-contain"
                  >
                    <source src={selectedMedia.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <ImageWithFallback
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="w-full max-h-[70vh] object-contain"
                  />
                )}
              </div>

              {/* Media Info */}
              <div className="p-6 md:p-8 bg-white">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl text-gray-800 mb-2">
                      {selectedMedia.title}
                    </h3>
                    <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm">
                      {selectedMedia.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-yellow-500" />
                    <span>{selectedMedia.date}</span>
                  </div>
                  {selectedMedia.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-yellow-500" />
                      <span>{selectedMedia.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
