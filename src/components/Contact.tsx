import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    email: "",
    phone: "",
    age: "",
    location: "", // Added location
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "918095992424"; // Correct format
    const text = `New Admission Enquiry:
Parent Name: ${formData.parentName}
Child Name: ${formData.childName}
Email: ${formData.email}
Phone: ${formData.phone}
Child's Age: ${formData.age}
Location: ${formData.location}
Message: ${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank"); // Opens WhatsApp chat with message
  };

  return (
    <section id="contact" className="py-20 bg-white">
  <div className="flex justify-center px-6">
    <motion.div
      ref={ref}
      className="w-full max-w-md"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <Card className="hover:shadow-xl transition-shadow">
          <CardHeader>
           <CardTitle className="text-3xl font-bold text-gray-800 text-center">
  Enroll Your Child Today
</CardTitle>

            <CardDescription className="text-center">
              Join our community and give your child the best possible start in life!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm text-gray-700">Parent Name</label>
                  <Input 
                    name="parentName" 
                    value={formData.parentName} 
                    onChange={handleChange} 
                    placeholder="Your name" 
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-700">Child's Name</label>
                  <Input 
                    name="childName" 
                    value={formData.childName} 
                    onChange={handleChange} 
                    placeholder="Child's name" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm text-gray-700">Email</label>
                  <Input 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-700">Phone</label>
                  <Input 
                    name="phone" 
                    type="tel" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="+91" 
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-700">Child's Age</label>
                <Input 
                  name="age" 
                  value={formData.age} 
                  onChange={handleChange} 
                  placeholder="e.g., 3 years old" 
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-700">Your Location</label>
                <Input 
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, area, or address"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-700">Message</label>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a bit about your child and what you're looking for..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Submit Enquiry
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  </div>
</section>

    
  );
}
