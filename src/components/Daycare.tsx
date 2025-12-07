import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Clock, Heart, Shield, Utensils, Users, MessageCircle } from "lucide-react";
import daycareImage from "../components/assets/daycare.jpg";


export function Daycare() {
  const features = [
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Extended care from 7 AM to 7 PM to fit your schedule"
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description: "Healthy breakfast, lunch, and snacks provided daily"
    },
    {
      icon: Users,
      title: "Small Groups",
      description: "Low child-to-teacher ratio ensuring personalized attention"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Secure facility with trained staff and safety protocols"
    },
    {
      icon: Heart,
      title: "Loving Care",
      description: "Nurturing atmosphere where children feel at home"
    },
    {
      icon: MessageCircle,
      title: "Parent Updates",
      description: "Regular communication about your child's day and progress"
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "918095992424"; // Replace with actual number
    const message = "Hi! I'm interested in learning more about your daycare services.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="daycare" className="py-20 bg-gradient-to-b from-orange-50 via-yellow-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">🌞</span>
          </motion.div>
          <h2 className="text-4xl text-gray-800 mb-4">Extended Daycare Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Quality care beyond school hours - A safe, fun, and nurturing environment where your child can learn, play, and grow
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
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
                src={daycareImage}
                alt="Children enjoying daycare activities"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent"></div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
              className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full shadow-xl z-10"
            >
              <p className="text-sm">⭐ Trusted Care</p>
            </motion.div>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl text-gray-800">Why Choose Our Daycare?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                At The Beatus Kids Academy, our daycare program is designed to provide comprehensive care for your child before and after school hours. We understand the challenges working parents face, and we're here to help.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our experienced caregivers create a warm, home-like atmosphere where children can relax, play, learn, and make friends. We offer structured activities, homework assistance, outdoor play, and creative arts - all in a safe and supervised environment.
              </p>
            </div>

            {/* WhatsApp Contact Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us on WhatsApp
              </Button>
            </motion.div>

            <p className="text-sm text-gray-500">
              💬 Get instant response to your queries about our daycare services
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl text-gray-800 text-center mb-10">Our Daycare Features</h3>
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
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-orange-100"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center mb-4"
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl mb-4">Ready to Experience Quality Daycare?</h3>
          <p className="text-lg mb-6 opacity-95 max-w-2xl mx-auto">
            Schedule a visit to see our facilities and meet our caring staff. We're open Monday to Saturday, 7 AM - 7 PM.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
  onClick={handleWhatsAppClick}
  size="lg"
  variant="outline"
  className="!border-2 !border-orange-500 !text-orange-500 hover:!text-orange-500 hover:!border-orange-500 hover:!bg-orange-500/10"
>
  Chat on WhatsApp
</Button>


            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
