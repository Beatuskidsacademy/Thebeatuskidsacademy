import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Staff() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const staff = [
    {
      name: "Emily Johnson",
      role: "Director & Lead Teacher",
      credentials: "M.Ed in Early Childhood Education",
      image: "https://images.unsplash.com/photo-1475563011407-6bf489b1c361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW58ZW58MXx8fHwxNzYwNDUwMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "15 years of experience creating joyful learning environments"
    },
    {
      name: "Sarah Martinez",
      role: "Preschool Teacher",
      credentials: "B.A. in Child Development",
      image: "https://images.unsplash.com/photo-1475563011407-6bf489b1c361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW58ZW58MXx8fHwxNzYwNDUwMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Passionate about fostering creativity and social-emotional growth"
    },
    {
      name: "Michael Chen",
      role: "Pre-K Teacher",
      credentials: "B.S. in Elementary Education",
      image: "https://images.unsplash.com/photo-1475563011407-6bf489b1c361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW58ZW58MXx8fHwxNzYwNDUwMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Specializes in hands-on learning and kindergarten readiness"
    },
    {
      name: "Lisa Thompson",
      role: "Toddler Teacher",
      credentials: "A.A. in Early Childhood",
      image: "https://images.unsplash.com/photo-1475563011407-6bf489b1c361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjB0ZWFjaGVyJTIwY2hpbGRyZW58ZW58MXx8fHwxNzYwNDUwMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Creating nurturing first experiences for our youngest learners"
    }
  ];

  return (
    <section id="staff" className="py-20 bg-gradient-to-b from-yellow-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl mb-4 text-gray-800">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced, caring educators dedicated to your child's growth and happiness
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="text-center hover:shadow-2xl transition-all duration-300 h-full group cursor-pointer">
                <CardContent className="pt-6">
                  <motion.div 
                    className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-yellow-400"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="mb-1 text-gray-800 group-hover:text-yellow-600 transition-colors">{member.name}</h3>
                  <p className="text-yellow-600 mb-2">{member.role}</p>
                  <div className="flex items-center justify-center gap-2 mb-3 text-sm text-gray-600">
                    <Award className="w-4 h-4 group-hover:scale-125 transition-transform" />
                    <span>{member.credentials}</span>
                  </div>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
