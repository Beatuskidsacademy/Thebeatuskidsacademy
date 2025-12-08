import { Card, CardContent } from "./ui/card";
import { BookOpen, Palette, Brain, Lightbulb, Users2, Award, Target, Rocket } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Curriculum() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const features = [
    {
      icon: BookOpen,
      title: "Play-Based Learning",
      description: "Play is the best way to learn - activities designed to encourage exploration and discovery",
      expandedDescription: "Children learn best through play! Our curriculum incorporates structured play activities that develop cognitive abilities, motor skills, and social-emotional competencies. Every game and activity is purposefully designed to meet developmental milestones while keeping learning joyful and engaging."
    },
    {
      icon: Brain,
      title: "Theme-Based Learning",
      description: "Organized around relevant themes, making learning meaningful and engaging",
      expandedDescription: "Learning becomes more meaningful when connected to real-world contexts. Our theme-based approach integrates multiple subjects around engaging topics like 'My Family,' 'Nature,' or 'Community Helpers,' helping children make connections and understand concepts deeply through immersive experiences."
    },
    {
      icon: Palette,
      title: "Integrated Learning",
      description: "Integrating language, maths, science, and arts for holistic development",
      expandedDescription: "We break down traditional subject barriers by integrating language, mathematics, science, and arts into cohesive learning experiences. This holistic approach helps children understand how different areas of knowledge connect and complement each other in real life."
    },
    {
      icon: Lightbulb,
      title: "Hands-On Activities",
      description: "Promoting hands-on learning that encourages children to explore and create",
      expandedDescription: "Children are natural explorers! Our hands-on activities encourage tactile learning through experiments, crafts, building blocks, and sensory play. These concrete experiences build strong foundational understanding and develop fine motor skills while sparking curiosity and creativity."
    },
    {
      icon: Target,
      title: "Assessment & Feedback",
      description: "Regular evaluations to track progress and celebrate achievements",
      expandedDescription: "Continuous assessment through observation, portfolios, and age-appropriate evaluations helps us track each child's developmental journey. We provide detailed feedback to parents and celebrate every milestone, ensuring children feel valued and motivated to learn more."
    },
    {
      icon: Rocket,
      title: "21st Century Skills",
      description: "Critical thinking, creativity, communication, and collaboration",
      expandedDescription: "Preparing children for tomorrow starts today! We focus on developing the 4Cs - Critical thinking, Creativity, Communication, and Collaboration. Through project-based learning, problem-solving activities, and teamwork exercises, children build essential skills for future success."
    }
  ];

  const environments = [
    "Language development",
    "Art and creativity",
    "Cognitive development",
    "Sensory and motor skills",
    "Practical life skills",
    "Outdoor learning and exploration"
  ];

  return (
    <section id="curriculum" className="py-20 bg-gradient-to-b from-white to-blue-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-gray-800">Our Curriculum: A Holistic Approach</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have adopted the Kreedo Curriculum, a comprehensive and child-centric approach focusing on overall development. 
            Kreedo is a research-based curriculum designed to meet the unique needs of young learners.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 h-full group cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
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

        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl mb-6 text-gray-800">Our Learning Environment</h3>
              <p className="text-gray-600 mb-6">
                Our classrooms are carefully designed to promote exploration, discovery, and creativity, 
                with dedicated areas for comprehensive child development.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {environments.map((env, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{env}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.03, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-none hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Users2 className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="mb-2 text-gray-800">Personalized Learning</h4>
                        <p className="text-sm text-gray-600">
                          Low teacher-student ratio (1:12) ensures each child receives personalized attention and care
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-none hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Award className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="mb-2 text-gray-800">Values & Character</h4>
                        <p className="text-sm text-gray-600">
                          Instilling strong values and character, preparing children to become responsible global citizens
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gradient-to-br from-pink-50 to-orange-50 border-none hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Rocket className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="mb-2 text-gray-800">Innovative Methods</h4>
                        <p className="text-sm text-gray-600">
                          Interactive teaching methods using Kreedo Lab materials to make learning fun and effective
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }
            }}
          >
            <p className="text-lg">🎓Teach Children How They Should Live And They Will Remember All Their Life -King Solomon</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}