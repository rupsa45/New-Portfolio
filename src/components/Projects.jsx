import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../utils/data";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalPages = 3;
  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalPages - 1)); // Adjust totalPages to 0-based index
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0)); // Ensure it doesn't go below 0
  };
  

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <motion.div
        className="bg-white max-w-6xl w-full rounded-lg shadow-lg p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Utensils className="w-8 h-8 text-red-600 mr-3" />
            <h2 className="text-3xl font-bold text-red-600">
              My Menu (Projects)
            </h2>
          </div>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `${-currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="w-full flex-shrink-0 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Link to={project.link} key={project.id} target="_blank">
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[400px] object-cover rounded-lg"
                      />
                    </a>

                    {/* Basic Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80">{project.shortDesc}</p>
                    </div>

                    {/* Detailed Info */}
                    <motion.div className="absolute inset-0 bg-black/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-6 h-full flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-4">
                            {project.title}
                          </h3>
                          <p className="text-white/90 mb-6 text-lg">
                            {project.longDesc}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-3">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                              <motion.span
                                key={index}
                                className="px-3 py-1 bg-red-600 text-white rounded-full text-sm"
                                initial={{ opacity: 0, y: 20 }}
                                whileHover={{ scale: 1.1 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-red-600" : "bg-red-200"
              }`}
              onClick={() => setCurrentSlide(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
