function About() {
  return (
    <div className="h-[100vh] flex bg-gradient-to-b from-slate-400 to-slate-500">
      <div className="mx-auto my-auto flex flex-col">
        <h2 className=" font-semibold text-7xl mx-auto text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
          About Me
        </h2>
        <div className="flex flex-row space-x-16 mt-5">
          <img
            src="/aboutImage.png"
            alt="About me image, which is me as a kid"
            className="max-h-[40vh] rounded-3xl my-auto drop-shadow-lg"
          />
          <p className="w-[35vw] text-xl">
            Hi there! I’m Daniel Nguyen, a passionate and driven second-year
            Vietnamese-American Computer Science student with a love for
            building innovative digital experiences.
            <br />
            <br /> I’ve got experience with a wide range of tools—React,
            TypeScript, MongoDB, Firebase, and more—that help bring my ideas to
            life. Whether it's a social media platform with a unique twist or an
            AI-powered wellness agent, I’m always excited to take on new
            challenges and collaborate with others to create something
            impactful.
            <br />
            <br />
            Additionally, I have been getting into a hackathons. I'm a firm
            believer in teamwork and creativity. When I’m not building the next
            big thing, you can find me experimenting with new tech or
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
  );
}
export default About;
