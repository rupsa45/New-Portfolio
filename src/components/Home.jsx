import { motion } from "framer-motion";
import { Drumstick,  } from "lucide-react";
import '../App.css'

const Home = () => {
  
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 "
    >
      <motion.div
        className="bg-[#EEE5E9] rounded-lg shadow-lg p-12 max-w-3xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          className="w-32 h-32 bg-red-600 rounded-full mx-auto mb-8 flex items-center justify-center "
        >
          <Drumstick className="w-16 h-16 text-white" />
        </motion.div>

        <motion.h1
          className="text-2xl font-bold text-red-600 mb-6 poppins-medium-italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I am Rupsa
        </motion.h1>

        <motion.h2 
          className="text-2xl text-gray-700 mb-4 poppins-regular"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.73 }}
        >
          Web Developer
        </motion.h2>

        <motion.p
          className="text-xl text-gray-600 mb-8 poppins-regular"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Cooking up delicious web experiences with a secret blend of
          technologies
        </motion.p>

        {/* <motion.button
          className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button> */}
      </motion.div>
    </section>
  );
};
export default Home;
