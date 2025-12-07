import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { BookOpen, Clock, Users, Award, PenTool, MessageCircle, GraduationCap, Layers } from "lucide-react";

export function Tuitions() {
  const features = [
    {
      icon: BookOpen,
      title: "All Subjects Covered",
      description: "LKG to 10th: English, Maths, Science, EVS, Social Science, Hindi & more."
    },
    {
      icon: Layers,
      title: "All Boards Supported",
      description: "CBSE, ICSE, State Board, IB, IGCSE – complete syllabus guidance."
    },
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Limited students per batch for individual attention."
    },
    {
      icon: PenTool,
      title: "Daily Practice & Homework Help",
      description: "Classwork revision, Assignment help & daily worksheets."
    },
    {
      icon: Award,
      title: "Exam Preparation",
      description: "Revision tests, mock exams & complete performance tracking."
    },
    {
      icon: MessageCircle,
      title: "Parent Updates",
      description: "Monthly progress reports & improvement plans."
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "918095992424";
    const message = "Hi! I'm interested in knowing more about your tuition classes.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="tuitions" className="py-20 bg-gradient-to-b from-blue-50 via-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-6xl mb-4 inline-block">📘</span>
          <h2 className="text-4xl text-gray-800 mb-4">After-School Tuition Classes (LKG to 10th)</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive after-school tuitions for all subjects and boards with expert tutors & personalized guidance.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Tuition classes"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-indigo-400 to-blue-600 text-white px-6 py-3 rounded-full shadow-xl z-10"
            >
              ⭐ Expert Teachers
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl text-gray-800">Why Choose Our Tuition Program?</h3>

            <p className="text-gray-700 text-lg leading-relaxed">
              We offer complete academic support for students from LKG to 10th standard. 
              Our focus is on concept clarity, continuous practice, revision, and personalized guidance.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              With small batches, expert tutors, and board-specific study plans, we ensure every child progresses with confidence.
            </p>

            {/* WhatsApp Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us on WhatsApp
              </Button>
            </motion.div>

            <p className="text-sm text-gray-500">
              💬 Instant replies for tuition fee & batch timing details
            </p>
          </motion.div>
        </div>

        {/* Syllabus Section */}
       {/* Syllabus Section */}
<div className="w-full flex justify-center items-center bg-gray-50 py-16">
  <div className="w-full max-w-7xl px-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-10 rounded-3xl shadow-xl border border-blue-100"
    >
      <h3 className="text-3xl font-semibold text-center text-gray-800 mb-12">
        Syllabus Coverage (LKG – 10th)
      </h3>

      {/* FLEX LEFT-RIGHT */}
      <div className="flex flex-col md:flex-row md:gap-8 gap-6 justify-center items-stretch">

        {/* LEFT COLUMN */}
        <div className="flex-1 flex flex-col gap-6">
          {/* LKG to 5th */}
          <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition-shadow duration-300 flex-1">
            <h4 className="text-xl font-bold mb-3 text-center">LKG to 5th</h4>
            <ul className="space-y-1 text-gray-700 list-disc list-inside">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>EVS</li>
            </ul>
          </div>

          {/* 6th to 8th */}
          <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition-shadow duration-300 flex-1">
            <h4 className="text-xl font-bold mb-3 text-center">6th to 8th</h4>
            <ul className="space-y-1 text-gray-700 list-disc list-inside">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Science</li>
              <li>Hindi</li>
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 flex flex-col gap-6">
          {/* 9th & 10th */}
          <div className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition-shadow duration-300 flex-1">
            <h4 className="text-xl font-bold mb-3 text-center">9th & 10th</h4>
            <ul className="space-y-1 text-gray-700 list-disc list-inside">
              <li>Maths</li>
              <li>Science (PCB)</li>
              <li>English</li>
              <li>Social Science</li>
              <li>Hindi & Optional Languages</li>
            </ul>
          </div>

          {/* Board Options */}
          <div className="bg-white p-6 rounded-2xl shadow-md border text-center hover:shadow-lg transition-shadow duration-300 flex-1 flex items-center justify-center">
            <div>
              <h4 className="text-xl font-bold mb-3">Board Options</h4>
              <p className="text-gray-700 text-lg">
                CBSE • ICSE • State Board • IB • Cambridge IGCSE
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  </div>
</div>


        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-3xl text-gray-800 text-center mt-16 mb-10">Tuition Highlights</h4>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-blue-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-4"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  <h4 className="text-xl text-gray-800 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        
      </div>
    </section>
  );
}
