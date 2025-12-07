import { Heart, Users, Star, Shield, Target, Sparkles, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const features = [
    {
      icon: Target,
      title: "Our Goal",
      description: "Empowering children with skills, knowledge, and values to succeed in life",
      expandedDescription: "We envision creating future-ready individuals who are equipped with essential life skills, academic excellence, and strong moral values. Our goal is to nurture confident, creative, and compassionate learners who can thrive in an ever-changing world."
    },
    {
      icon: Heart,
      title: "Holistic Approach",
      description: "Catering to individual needs, interests, and abilities of every unique child",
      expandedDescription: "Our holistic methodology ensures balanced development across physical, cognitive, emotional, and social domains. We recognize each child's uniqueness and tailor our approach to unlock their full potential through personalized learning experiences."
    },
    {
      icon: Users,
      title: "Ideal Ratio (1:12)",
      description: "Personalized attention and care with experienced, passionate teachers",
      expandedDescription: "With one dedicated teacher for every 12 students, we ensure each child receives individual attention, guidance, and support. Our experienced educators are passionate about early childhood development and committed to fostering a love for learning."
    },
    {
      icon: Star,
      title: "Our Curriculum",
      description: "State-of-the-art, research-based curriculum designed by experts",
      expandedDescription: "The Kreedo Curriculum is a scientifically designed, play-based learning framework that combines traditional wisdom with modern pedagogy. It focuses on experiential learning through engaging activities that develop critical thinking, creativity, and problem-solving skills."
    },
    {
      icon: Clock,
      title: "Day Care Services",
      description: "Extended care programs with nutritious meals, activities, and safe environment",
      expandedDescription: "Our comprehensive day care services provide working parents peace of mind with extended hours, nutritious meals, supervised homework sessions, and engaging activities. Children enjoy a safe, nurturing environment with structured learning and creative play time."
    },
    {
      icon: Sparkles,
      title: "Monthly Assessments",
      description: "Regular evaluations to track progress and celebrate achievements",
      expandedDescription: "Through systematic monthly assessments, we monitor each child's developmental milestones across various domains. These evaluations help us identify strengths, areas for improvement, and celebrate achievements while keeping parents actively informed about their child's progress."
    },
    {
      icon: Shield,
      title: "Parent Partnership",
      description: "Regular meetings keeping parents informed and involved",
      expandedDescription: "We believe in strong home-school partnerships. Regular parent-teacher meetings, progress reports, and open communication channels ensure parents are active participants in their child's learning journey. We value parent feedback and work collaboratively for each child's success."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-gray-800">Our Vision</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At The Beatus Kids Academy, our vision is to provide a nurturing environment that enables every child to have opportunities to learn, grow, and develop into confident, curious, and compassionate individuals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full">
                <CardContent className="pt-6 text-center">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.expandedDescription}
                    </p>
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