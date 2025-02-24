function About() {
  return (
    <div className="h-[100vh] flex bg-gradient-to-b from-slate-400 to-slate-500">
      <div className="mx-auto my-auto flex flex-col">
        <div className="flex lg:flex-row flex-col lg:space-x-16 space-x-0 mt-5">
          <img
            src="/aboutImage.png"
            alt="About me image, which is me as a kid"
            className="max-h-[40vh] max-w-[40vw] rounded-3xl my-auto drop-shadow-lg object-cover mx-auto"
          />
          <div className="my-auto flex flex-col">
            <h2 className=" font-semibold lg:text-7xl text-5xl mx-auto lg:mx-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 mb-3 lg:mt-0 mt-5">
              About Me
            </h2>
            <p className="lg:w-[35vw] 2xl:text-xl lg:text-sm md:text-sm text-xs text-sm my-auto w-[70vw]">
              Hi there! I’m Daniel Nguyen, a passionate and driven second-year
              Vietnamese-American Computer Science student with a love for
              building innovative digital experiences.
              <br />
              <br /> I’ve got experience with a wide range of tools—React,
              TypeScript, MongoDB, Firebase, and more—that help bring my ideas
              to life. Whether it's a social media platform with a unique twist
              or an AI-powered wellness agent, I’m always excited to take on new
              challenges and collaborate with others to create something
              impactful.
              <br />
              <br />
              Additionally, I have been getting into a hackathons. I'm a firm
              believer in teamwork and creativity. When I’m not building the
              next big thing, you can find me experimenting with new tech or
              brainstorming my next project.
              <br />
              <br />
              Outside of programming, I have a love for video production,
              specifically filming and editing. You can check out some of my
              videos in extra!
              <br />
              <br />
              Don’t hesitate to reach out—I’d love to connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
