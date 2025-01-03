import { motion } from 'framer-motion';
import { Phone, Mail, User, MessageSquare, Send, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xkggpgda");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all duration-300";
  const labelClasses = "flex items-center text-gray-700 font-medium mb-2";

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        className="bg-[#EEE5E9] max-w-6xl w-full rounded-lg shadow-lg p-8 poppins-regular"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <Phone className="w-8 h-8 text-red-600 mr-3" />
          <h2 className="text-3xl font-bold text-red-600 rubik-vinyl-regular">
            Place Your Order (Contact Me)
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Talk!</h3>
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-gray-600">Email</p>
                <a href="mailto:dasrupsa831@gmail.com" className="text-gray-800 font-medium">
                  dasrupsa831@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ x: 10 }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-gray-600">Location</p>
                <p className="text-gray-800 font-medium">Asansol, West Bengal, India</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-gray-800 font-medium mb-4">Connect with me:</p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, link: "https://github.com/rupsa45" },
                  { icon: Linkedin, link: "https://www.linkedin.com/in/rupsa-das-96b26b231/" },
                  { icon: Instagram, link: "https://www.instagram.com/rupsaaa98/" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    target='_blank'
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={(e) => {
              handleSubmit(e);
              if (state.succeeded) {
                setFormData({ name: "", email: "", message: "" });
              }
            }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <label className={labelClasses}>
                <User className="w-5 h-5 mr-2 text-red-600" />
                Name
              </label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className={`${inputClasses} ${focused === "name" ? "border-red-600" : "border-gray-200"}`}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <label className={labelClasses}>
                <Mail className="w-5 h-5 mr-2 text-red-600" />
                Email
              </label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={`${inputClasses} ${focused === "email" ? "border-red-600" : "border-gray-200"}`}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <label className={labelClasses}>
                <MessageSquare className="w-5 h-5 mr-2 text-red-600" />
                Message
              </label>
              <motion.textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className={`${inputClasses} resize-none ${focused === "message" ? "border-red-600" : "border-gray-200"}`}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </motion.div>

            <motion.button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
