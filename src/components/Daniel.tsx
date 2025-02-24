function Daniel() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-80px)] space-x-10 bg-gradient-to-b from-slate-300 to-slate-400">
      <img
        className="max-h-[40vh] rounded-full my-auto drop-shadow-md"
        src={import.meta.env.BASE_URL + "homeImage.svg"}
        alt="Image of me holding a camera"
      />
      <div className="my-auto">
        <p className="text-2xl text-gray-950">Hello! I am</p>
        <p className="font-semibold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-800 to-gray-500 overflow-y-visible leading-tight">
          &#123;Daniel Nguyen&#125;
        </p>
        <p className="text-xl text-gray-900">CS@SJSU, Fullstack Engineer</p>
        <div className="flex space-x-3 mt-1">
          <a href="https://www.instagram.com/deeedaniel" target="_blank">
            <img
              className="w-10"
              src={import.meta.env.BASE_URL + "instagramIcon.svg"}
              alt="Instagram icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-nguyen-363330260/"
            target="_blank"
          >
            <img
              className="w-10"
              src={import.meta.env.BASE_URL + "linkedInIcon.svg"}
              alt="LinkedIn icon"
            />
          </a>
          <a href="https://github.com/deeedaniel" target="_blank">
            <img
              className="w-10"
              src={import.meta.env.BASE_URL + "gitHubIcon.svg"}
              alt="GitHub icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Daniel;
