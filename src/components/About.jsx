import { motion } from "framer-motion";
import { Download, Drumstick } from "lucide-react";

const About = () => {
  const handleOpenPdf = () => {
    window.open('Resume.pdf', '_blank', 'noopener,noreferrer');
  };
  return (
    <section id="about" className=" min-h-screen flex items-center justify-center py-20">
      <motion.div
        className="bg-[#EEE5E9] max-w-4xl rounded-lg shadow-lg p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <Drumstick className="w-8 h-8 text-red-600 mr-3" />
          <h2 className="text-3xl font-bold text-red-600 rubik-vinyl-regular">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="profile.png"
              alt="Rupsa"
              width={300}
              height={300}
              className="rounded-full border-4 border-red-600"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="poppins-regular"
          >
            <p className="text-gray-700 text-lg mb-4">
            I'm a passionate developer with a secret recipe for cooking up delicious code. 
            Just like the {`Colonel's`} 11 herbs and spices, I bring a unique blend of skills 
            and creativity to every project I work on. 
            </p>
            <p className="text-gray-700 text-lg mb-4">
            With a keen eye for detail and a love for creating seamless user experiences, 
            I'm always ready to serve up some delicious code that will leave your taste buds (and users) 
            wanting more!
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 text-white px-6 py-2 rounded-full flex "
                onClick={handleOpenPdf}
              >
                Resume  <Download className="w-6 h-6"/>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
