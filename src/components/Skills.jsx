import { motion } from "framer-motion";

import { ChefHat } from "lucide-react";
import { skills } from "../utils/SkillsData";

const Skills = () => {
  

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <motion.div
        className="bg-[#EEE5E9] max-w-6xl w-full rounded-lg shadow-lg p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <ChefHat className="w-8 h-8 text-red-600 mr-3" />
          <h2 className="text-3xl font-bold text-red-600 rubik-vinyl-regular">
            My Secret Recipe (Skills)
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-red-50 rounded-lg p-4 text-center poppins-regular"
              >
                <IconComponent className="w-10 h-10 mx-auto mb-3 " />
                <h3 className="text-gray-800 font-medium">{skill.name}</h3>
                <span className="text-red-600 text-sm">{skill.category}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
