import { motion } from 'framer-motion';
import { Phone, Mail, User, MessageSquare, Send, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all duration-300";
  const labelClasses = "flex items-center text-gray-700 font-medium mb-2";

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        className="bg-white  max-w-6xl w-full rounded-lg shadow-lg p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <Phone className="w-8 h-8 text-red-600 mr-3" />
          <h2 className="text-3xl font-bold text-red-600">Place Your Order (Contact Me)</h2>
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
                <p className="text-gray-800 font-medium">rupsa@example.com</p>
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
                <p className="text-gray-800 font-medium">Asansol, West Bengal
                India</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-gray-800 font-medium mb-4">Connect with me:</p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, link: "#" },
                  { icon: Linkedin, link: "#" },
                  { icon: Twitter, link: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className={labelClasses}>
                <User className="w-5 h-5 mr-2 text-red-600" />
                Name
              </label>
              <motion.input
                type="text"
                required
                className={`${inputClasses} ${focused === 'name' ? 'border-red-600' : 'border-gray-200'}`}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className={labelClasses}>
                <Mail className="w-5 h-5 mr-2 text-red-600" />
                Email
              </label>
              <motion.input
                type="email"
                required
                className={`${inputClasses} ${focused === 'email' ? 'border-red-600' : 'border-gray-200'}`}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused(null)}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label className={labelClasses}>
                <MessageSquare className="w-5 h-5 mr-2 text-red-600" />
                Message
              </label>
              <motion.textarea
                rows="4"
                required
                className={`${inputClasses} resize-none ${focused === 'message' ? 'border-red-600' : 'border-gray-200'}`}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              />
            </motion.div>

            <motion.button
              type="submit"
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