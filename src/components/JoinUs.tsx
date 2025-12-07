import { useState } from "react";
import { Button } from "./ui/button";

export function JoinUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    subject: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData,  });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "918095992424"; // your WhatsApp number

    const message = `
*New Teacher Application*
----------------------------------
👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
🎓 *Experience:* ${formData.experience} years
📘 *Subject:* ${formData.subject}

    `;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      experience: "",
      subject: "",
     
    });
  };

  return (
    <section
      id="join-us"
      className="py-20 bg-gradient-to-b from-indigo-50 via-blue-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl text-gray-800 font-semibold text-center mb-8">
          Join Us – Become a Teacher
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We are looking for passionate teachers to join our academy. Fill out
          the form below to apply.
        </p>

        {submitted && (
          <div className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center">
            Thank you for your application! We will contact you soon.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-blue-100"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Experience (years)"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
                       <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Subject Expertise</option>
              <option value="Pre School Mother Teacher">Pre School Mother Teacher</option>
  <option value="Assistant Teacher">Assistant Teacher</option>
  <option value="Receptionist">Receptionist</option>
  <option value="Office Assistant">Office Assistant</option>
  <option value="Coordinator">Coordinator</option>
  <option value="Tuition Teacher">Tuition Teacher</option>
  <option value="Part Time Teacher">Part Time Teacher</option>
  <option value="Phonics Teacher">Phonics Teacher</option>
  <option value="Drawing & Art Teacher">Drawing & Art Teacher</option>
  <option value="Abacus Teacher">Abacus Teacher</option>
  <option value="Spoken English Teacher">Spoken English Teacher</option>
  <option value="Soft Skills Teacher">Soft Skills Teacher</option>
  <option value="Language Teacher">Language Teacher</option>
  <option value="Computer Science Teacher">Computer Science Teacher</option>
  <option value="Public Speaking Teacher">Public Speaking Teacher</option>
            </select>

          </div>

          <Button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-full py-3 rounded-lg hover:from-blue-600 hover:to-indigo-600"
          >
            Submit on WhatsApp
          </Button>
        </form>
      </div>
    </section>
  );
}
