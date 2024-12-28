import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Drumstick, BoxIcon as Bucket } from "lucide-react";
const Home = () => {
  const [currentText, setCurrentText] = useState("Web Developer");
  const titles = ["Web Developer", "MERN Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev === titles[0] ? titles[1] : titles[0]));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-12 max-w-3xl w-full text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 bg-red-600 rounded-full mx-auto mb-8 flex items-center justify-center"
        >
          <Drumstick className="w-16 h-16 text-white" />
        </motion.div>

        <motion.h1
          className="text-2xl font-bold text-red-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hi, I am Rupsa
        </motion.h1>

        <div className="h-12 mb-6">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentText}
              className="text-3xl text-gray-700"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {currentText}
            </motion.h2>
          </AnimatePresence>
        </div>

        <motion.p
          className="text-xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Cooking up delicious web experiences with a secret blend of
          technologies
        </motion.p>

        <motion.button
          className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </motion.div>
    </section>
  );
};
export default Home;
