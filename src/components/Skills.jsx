import { motion } from "framer-motion";
import {
  FileJson,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Github,
  ChefHat,
  Terminal,
  CodeXml

} from "lucide-react";

const Skills = () => {
  const skills = [
   
    { name: "HTML", category: "Frontend", icon:CodeXml },
    { name: "CSS", category: "Frontend", icon:Code2 },
    { name: "JavaScript", category: "Frontend/Backend", icon: FileJson }, 
    { name: "React", category: "Frontend", icon: Code2 },
    { name: "Node.js", category: "Backend", icon: Cpu }, 
    { name: "MongoDB", category: "Backend", icon: Database }, 
    { name: "Mongoose", category: "Backend", icon: Database },
    { name: "Express.js", category: "Backend", icon: Database }, 
    { name: "Git", category: "Version Control", icon: GitBranch }, 
    { name: "Github", category: "Version Control", icon: Github }, 
    { name: "VS Code", category: "IDE", icon:ChefHat }, 
    { name: "Vercel", category: "Deployment", icon: Terminal }, 
    { name: "Tailwind CSS", category: "Frontend", icon: FileJson },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <motion.div
        className="bg-white max-w-6xl w-full rounded-lg shadow-lg p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <ChefHat className="w-8 h-8 text-red-600 mr-3" />
          <h2 className="text-3xl font-bold text-red-600">
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
                className="bg-red-50 rounded-lg p-4 text-center"
              >
                <IconComponent className="w-16 h-16 mx-auto mb-3 text-red-600" />
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
