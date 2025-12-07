import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Clock, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import playgroupImg from "../components/assets/playgroup.jpg";
import preNurseryImg from "../components/assets/prenursary2.jpg";
import kgImg from "../components/assets/lkg.jpg";
import daycareImg from "../components/assets/daycare1.jpg";
import summerImg from "../components/assets/summercamp1.jpg";
import tuitionImg from "../components/assets/tution.jpg";


export function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

 const programs = [
  {
    title: "Playgroup",
    age: "2-3 years",
    schedule: "Mon-Fri, 9:00 AM - 12:00 PM",
    image:playgroupImg,
    description: "A fun-filled introduction to school life, where little ones can explore, play, and make friends in a safe and engaging environment.",
    highlights: ["Social interaction", "Sensory exploration", "Creative play", "Music & movement"]
  },

  {
    title: "Pre-Nursery",
    age: "3-4 years",
    schedule: "Mon-Fri, 9:00 AM - 2:00 PM",
    image: preNurseryImg,
    description: "A comprehensive program that integrates academic, creative, and thematic concepts to lay a strong foundation for future success.",
    highlights: ["Academic foundations", "Creative activities", "Theme-based learning", "Social-emotional growth"]
  },

  // ⭐ COMBINED LKG + UKG ⭐
  {
    title: "Kindergarten (LKG + UKG)",
    age: "4-6 years",
    schedule: "Mon-Fri, 8:30 AM - 3:00 PM",
    image: kgImg,
    description: "A combined Kindergarten program focusing on academic readiness, creativity, confidence building, and foundational skills for formal schooling.",
    highlights: [
      "School readiness",
      "Math & science basics",
      "Language development",
      "Creative expression",
      "Group activities",
      "Confidence building"
    ]
  },

  {
    title: "Daycare",
    age: "1.5 - 10 years",
    schedule: "Mon-Sat, 8:00 AM - 7:00 PM",
    image: daycareImg,
    description: "A safe, nurturing, and homely environment where children can learn, play, rest, and grow under caring supervision.",
    highlights: ["Safe environment", "Nutritious meals", "Play-based learning", "Homework support"]
  },

  {
    title: "Summer Camp",
    age: "4-12 years",
    schedule: "April–May, 9:00 AM - 1:00 PM",
    image: summerImg,
    description: "An exciting summer experience packed with fun activities, creativity, teamwork, and skill-building adventures.",
    highlights: ["Art & craft", "Dance & music", "Sports & yoga", "Skill-building workshops"]
  },
   {
    title: "Tuition Facility",
    age: "LKG - Grade 10",
    schedule: "Mon-Sat, 4:00 PM - 7:00 PM",
    image: tuitionImg,
    description: "Dedicated academic support for students to strengthen concepts, improve performance, and build confidence across all major subjects.",
    highlights: [
      "Daily homework support",
      "Concept clarity sessions",
      "Math & Science coaching",
      "Individual attention",
      "Weekly assessments"
    ]
  }
];

  return (
    <section id="programs" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 mt-10 text-gray-800">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed for each developmental stage, fostering holistic growth and learning
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 h-full group">
                <div className="h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              <CardHeader>
                <CardTitle className="text-gray-800 group-hover:text-blue-600 transition-colors">{program.title}</CardTitle>
                <CardDescription className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{program.age}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{program.schedule}</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-700">Program Highlights:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
