import { motion } from "framer-motion";

function Daniel() {
  return (
    <div className="md:h-[100vh] flex md:flex-row flex-col justify-center min-h-[calc(100vh-80px)] md:space-x-10 space-x-0 bg-gradient-to-b from-slate-300 to-slate-400">
      <motion.div
        initial={{ opacity: 0, x: -1000 }} // Start invisible and slightly lower
        animate={{ opacity: 1, x: 0 }} // Animate to visible and normal position
        transition={{ duration: 0.75, delay: 0.33, ease: "easeInOut" }} // Smooth transition
        className="flex justify-center"
      >
        <img
          className="lg:max-h-[40vh] md:max-h-[30vh] max-w-[60vw] rounded-full md:my-auto my-0 md:mx-0 mx-auto drop-shadow-md"
          src={import.meta.env.BASE_URL + "homeImage.png"}
          alt="Image of me holding a camera"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 1000 }} // Start invisible and slightly lower
        animate={{ opacity: 1, x: 0 }} // Animate to visible and normal position
        transition={{ duration: 0.75, delay: 0.33, ease: "easeInOut" }} // Smooth transition
        className="flex justify-center"
      >
        <div className="md:my-auto my-0 md:mx-0 mx-auto grid mt-5">
          <p className="text-2xl text-gray-950 mx-auto md:mx-0">Hello! I am</p>
          <p className="font-semibold lg:text-7xl md:text-5xl text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-800 to-gray-500 overflow-y-visible leading-tight mx-auto md:mx-0 md:leading-snug lg:leading-tight">
            &#123;Daniel Nguyen&#125;
          </p>
          <p className="text-xl text-gray-900 mx-auto md:mx-0">
            CS@SJSU, Fullstack Engineer
          </p>
          <div className="flex space-x-3 mt-1 mx-auto md:mx-0">
            <a
              href="https://www.linkedin.com/in/daniel-nguyen-363330260/"
              target="_blank"
            >
              <img
                className="w-10 transform hover:scale-105 transition-all duration-300 ease-in-out"
                src={import.meta.env.BASE_URL + "linkedInIcon.svg"}
                alt="LinkedIn icon"
              />
            </a>
            <a href="https://github.com/deeedaniel" target="_blank">
              <img
                className="w-10 transform hover:scale-105 transition-all duration-300 ease-in-out"
                src={import.meta.env.BASE_URL + "githubIcon.svg"}
                alt="GitHub icon"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default Daniel;
