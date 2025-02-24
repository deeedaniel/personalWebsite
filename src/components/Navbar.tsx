import { useState } from "react";

function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setActiveSection(sectionId);
  };

  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="top-0 sticky pt-5 drop-shadow-lg z-50">
      <nav
        className={`max-w-[80vw] mx-auto flex flex-row justify-between py-3 px-5 rounded-full transition duration-300 ${
          activeSection === "project" || activeSection === "extra"
            ? "bg-slate-600"
            : "bg-gray-800 text-gray-800"
        }`}
      >
        <button
          onClick={() => {
            window.scrollTo({ top: 0 });
            setActiveSection("");
          }}
          className="font-semibold text-2xl text-white ml-3 hover:text-gray-300 transition duration-300"
        >
          Daniel Nguyen
        </button>
        <div className="space-x-10 mr-3">
          <button
            onClick={() => scrollToSection("about")}
            className="font-semibold text-2xl text-white hover:text-gray-300 transition duration-300"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("project")}
            className="font-semibold text-2xl text-white hover:text-gray-300 transition duration-300"
          >
            Experience/Projects
          </button>
          <button
            onClick={() => scrollToSection("extra")}
            className="font-semibold text-2xl text-white hover:text-gray-300 transition duration-300"
          >
            Extra
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
