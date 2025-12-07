import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Priya Sharma",
      child: "Mother of Aarav, LKG",
      text: "The Beatus Kids Academy has been transformational for our son. The Kreedo curriculum is amazing, and the teachers are so passionate. Aarav has grown so much in confidence and creativity!",
      rating: 5
    },
    {
      name: "Rajesh and Meena Kumar",
      child: "Parents of Ananya, Pre-Nursery",
      text: "The 1:12 teacher-student ratio ensures our daughter gets personalized attention. The holistic approach to learning and the monthly assessments keep us well-informed. Highly recommended!",
      rating: 5
    },
    {
      name: "Sneha Patel",
      child: "Mother of Arjun, UKG",
      text: "My son is now ready for formal schooling thanks to The Beatus Kids Academy. The focus on values, 21st-century skills, and innovative teaching methods has made all the difference!",
      rating: 5
    },
    {
      name: "Amit Verma",
      child: "Father of Diya, Playgroup",
      text: "As first-time parents, we were nervous about sending our little one to preschool. The Beatus Kids Academy exceeded our expectations! The caring staff and safe environment made the transition smooth. Diya loves going to school every day!",
      rating: 5
    },
    {
      name: "Kavita Reddy",
      child: "Mother of Rohan, LKG",
      text: "The day care services are exceptional! With our busy work schedules, knowing Rohan is in a nurturing environment with nutritious meals and engaging activities gives us complete peace of mind. The staff goes above and beyond!",
      rating: 5
    },
    {
      name: "Deepak and Neha Singh",
      child: "Parents of Isha, UKG",
      text: "We've seen remarkable growth in Isha's communication skills and social abilities. The monthly parent meetings keep us connected with her progress. The Kreedo curriculum truly makes learning fun and effective!",
      rating: 5
    },
    {
      name: "Sunita Nair",
      child: "Mother of Advait, Pre-Nursery",
      text: "The personalized attention each child receives is outstanding. The teachers know every child's strengths and areas for development. Advait has blossomed into a confident, curious learner. Thank you, Beatus Kids Academy!",
      rating: 5
    }
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-gray-800">What Parents Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our wonderful families
          </p>
        </motion.div>

        {/* Auto-scrolling carousel */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8">
            <AnimatePresence mode="popLayout">
              {[0, 1, 2].map((offset) => {
                const index = (currentIndex + offset) % testimonials.length;
                const testimonial = testimonials[index];
                return (
                  <motion.div
                    key={`${index}-${currentIndex}`}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5, delay: offset * 0.1 }}
                    className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                  >
                    <Card className="bg-white hover:shadow-2xl transition-all duration-300 h-full group cursor-pointer">
                      <CardContent className="pt-6">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform" />
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-gray-700 mb-6 italic group-hover:text-gray-900 transition-colors min-h-[120px]">"{testimonial.text}"</p>
                        <div>
                          <p className="text-gray-800 group-hover:text-blue-600 transition-colors">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.child}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
