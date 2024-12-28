import { SiExpress } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoVercel } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

export const skills = [
  { name: "HTML", category: "Frontend", icon: FaHtml5 },
  { name: "CSS", category: "Frontend", icon: IoLogoCss3 },
  { name: "JavaScript", category: "Frontend/Backend", icon: IoLogoJavascript },
  { name: "Tailwind CSS", category: "Frontend", icon: RiTailwindCssFill },
  { name: "React", category: "Frontend", icon: FaReact },
  { name: "Node.js", category: "Backend", icon: FaNodeJs },
  { name: "MongoDB", category: "Database", icon: SiMongodb },
  { name: "Express.js", category: "Backend", icon: SiExpress },
  { name: "Git", category: "Version Control", icon: FaGitAlt },
  { name: "Github", category: "Version Control", icon: FaGithub },
  { name: "VS Code", category: "IDE", icon: VscVscode },
  { name: "Vercel", category: "Deployment", icon: IoLogoVercel },
];
