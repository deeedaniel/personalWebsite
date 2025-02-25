import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrollY, setScrollY] = useState(false);

  // Scroll section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setActiveSection(sectionId);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY > 3000); // Change navbar on scroll

      // Auto-detect the active section
      const sections = ["home", "about", "project", "extra"];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -300, opacity: 0 }} // Start off-screen to the left
      animate={{ y: 0, opacity: 1 }} // Move into view
      transition={{
        type: "spring",
        stiffness: 120, // Adjust bounce intensity
        damping: 10,
        duration: 3, // Animation speed
        delay: 0,
      }}
      className="z-50"
    >
      <div className="fixed w-full top-0 pt-5 drop-shadow-lg z-50">
        <nav
          className={`max-w-[80vw] mx-auto flex flex-row md:justify-between justify-center py-3 px-5 rounded-full transition duration-300 ${
            scrollY || activeSection === "project" || activeSection === "extra"
              ? "bg-slate-600"
              : "bg-gray-800 text-gray-800"
          }`}
        >
          <button
            onClick={() => {
              window.scrollTo({ top: 0 });
              setActiveSection("");
            }}
            className="font-semibold lg:text-2xl md:xl text-white ml-3 hover:text-gray-300 transition duration-300 md:block hidden"
          >
            Daniel Nguyen
          </button>
          <button
            onClick={() => {
              window.scrollTo({ top: 0 });
              setActiveSection("");
            }}
            className="font-semibold lg:text-2xl md:xl text-white ml-3 hover:text-gray-300 transition duration-300 md:hidden block"
          >
            Daniel
          </button>
          <div className="space-x-10 mr-3 flex">
            <div className="hidden md:flex space-x-10">
              <button
                onClick={() => scrollToSection("about")}
                className="font-semibold lg:text-2xl md:xl text-white hover:text-gray-300 transition duration-300 "
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("project")}
                className="font-semibold lg:text-2xl md:xl text-white hover:text-gray-300 transition duration-300"
              >
                Experience/Projects
              </button>
              <button
                onClick={() => scrollToSection("extra")}
                className="font-semibold lg:text-2xl md:xl text-white hover:text-gray-300 transition duration-300"
              >
                Extra
              </button>
            </div>
            <div className="flex justify-between md:hidden space-x-4 sm:space-x-14">
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-gray-300"
              >
                <img
                  className="w-5 filter invert"
                  src={import.meta.env.BASE_URL + "aboutIcon.svg"}
                  alt="about icon"
                />
              </button>
              <button
                onClick={() => scrollToSection("project")}
                className="text-white hover:text-gray-300"
              >
                <img
                  className="w-5 filter invert"
                  src={import.meta.env.BASE_URL + "expIcon.svg"}
                  alt="experience and projects icon"
                />
              </button>
              <button
                onClick={() => scrollToSection("extra")}
                className="text-white hover:text-gray-300"
              >
                <img
                  className="w-5 filter invert"
                  src={import.meta.env.BASE_URL + "extraIcon.svg"}
                  alt="extra icon"
                />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}
export default Navbar;
