import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="bg-red-600 min-h-screen">
      <Header />
      <main className="container mx-auto px-4">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      </main>
      <motion.footer 
        className="bg-white text-red-600 text-center py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-lg">© {new Date().getFullYear()} Rupsa - Finger Lickin' Good Code</p>
      </motion.footer>
    </div>
  );
}

export default App;
