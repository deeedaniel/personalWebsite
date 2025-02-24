import { useState } from "react";
import { useEffect } from "react";

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
    <div className="fixed w-full top-0 pt-5 drop-shadow-lg z-50 hidden md:block">
      <nav
        className={`max-w-[80vw] mx-auto flex flex-row justify-between py-3 px-5 rounded-full transition duration-300 ${
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
          className="font-semibold lg:text-2xl md:xl text-white ml-3 hover:text-gray-300 transition duration-300"
        >
          Daniel Nguyen
        </button>
        <div className="space-x-10 mr-3">
          <button
            onClick={() => scrollToSection("about")}
            className="font-semibold lg:text-2xl md:xl text-white hover:text-gray-300 transition duration-300"
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
      </nav>
    </div>
  );
}
export default Navbar;
