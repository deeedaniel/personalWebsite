function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="top-0 sticky pt-5 drop-shadow-lg">
      <nav className="max-w-[90vw] mx-auto flex flex-row justify-between bg-gray-800 text-white py-3 px-5 rounded-full">
        <button
          onClick={() => scrollToSection("daniel")}
          className="font-semibold text-2xl ml-3 hover:text-gray-300 transition duration-300"
        >
          Daniel Nguyen
        </button>
        <div className="space-x-10 mr-3">
          <button
            onClick={() => scrollToSection("about")}
            className="font-semibold text-2xl hover:text-gray-300 transition duration-300"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("project")}
            className="font-semibold text-2xl hover:text-gray-300 transition duration-300"
          >
            Experience/Projects
          </button>
          <button
            onClick={() => scrollToSection("extra")}
            className="font-semibold text-2xl hover:text-gray-300 transition duration-300"
          >
            Extra
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
