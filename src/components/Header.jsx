import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 poppins-regular ${
        scrolled ? "bg-[#EEE5E9] shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div className="flex items-center" whileHover={{ scale: 1.05 }}>
          <img 
            src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" 
            alt="" 
            width={35}
            height={35}
          />
          <h1 className="text-2xl font-bold text-red-600">Rupsa</h1>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[#000000] hover:text-red-700 font-medium"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#EEE5E9] shadow-lg"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <motion.li
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block text-[#000000] hover:text-red-700 font-medium py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;