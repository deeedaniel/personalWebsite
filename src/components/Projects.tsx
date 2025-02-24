import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Projects() {
  return (
    <div className="h-[100vh] flex bg-gradient-to-b from-slate-700 to-slate-800">
      <div className="mx-auto my-auto flex flex-col w-full max-w-[90vw]">
        <h2 className="md:text-6xl sm:text-4xl text-2xl mx-auto mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-blue-300 to-blue-500 font-semibold leading-tight">
          Experience + Projects
        </h2>
        <div className="2xl:px-96 px-12">
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                <a
                  href="https://cooledtured.com/"
                  target="_blank"
                  className="h-[50vh] lg:w-[700px] bg-slate-950 rounded-3xl md:grid md:grid-cols-2 gap-4 drop-shadow-md mx-auto"
                >
                  <div className="w-full h-full overflow-hidden md:rounded-l-3xl rounded-3xl relative">
                    <img
                      src="/cooledturedbg.png"
                      alt="internship background image"
                      className="w-full h-full object-cover md:rounded-l-3xl rounded-3xl brightness-50 hover:brightness-75 transition duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center md:hidden">
                      <h3 className="text-white text-2xl font-semibold">
                        Web Dev Intern
                      </h3>
                    </div>
                  </div>

                  <div className="md:flex hidden flex-col justify-center p-4">
                    <p className="text-white text-3xl mb-4">
                      Cooledtured Web Dev Intern
                    </p>
                    <p className="text-sm text-white overflow-hidden md:block hidden">
                      • Collaborate with a team of 5 web developers and 2 UI/UX
                      designers, turning Figma designs into fully functional
                      pages.
                      <br />
                      • Developed and deployed Firebase-based quiz and poll
                      systems, including monthly and yearly rankings for anime,
                      games, movies and shows.
                      <br />
                      • Developed a Firebase authentication system for user
                      login and quiz progress tracking.
                      <br />
                      • Implemented real-time leaderboards using Firebase
                      Realtime Database, tracking user scores dynamically.
                      <br />• Participated in quality assurance meetings twice a
                      week.
                    </p>
                  </div>
                </a>
              </CarouselItem>
              <CarouselItem>
                <a
                  href="https://devpost.com/software/chillguy-ai"
                  target="_blank"
                  className="h-[50vh] lg:w-[700px] bg-slate-950 rounded-3xl md:grid md:grid-cols-2 gap-4 drop-shadow-md mx-auto"
                >
                  <div className="w-full h-full overflow-hidden md:rounded-l-3xl rounded-3xl relative">
                    <img
                      src="/chillguyGroupPic.jpeg"
                      alt="Image of my project ChillGuy.ai"
                      className="w-full h-full object-cover md:rounded-l-3xl rounded-3xl brightness-50 hover:brightness-75 transition duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center md:hidden">
                      <h3 className="text-white text-2xl font-semibold">
                        👑 ChillGuy.ai
                      </h3>
                    </div>
                  </div>

                  <div className="md:flex hidden flex-col justify-center p-4">
                    <p className="text-white text-3xl mb-4">👑 ChillGuy.ai</p>
                    <p className="text-sm text-white overflow-hidden md:block hidden">
                      • Developed an AI-powered wellness bot that schedules and
                      initiates stress-relief calls using Twilio and Eleven Labs
                      AI.
                      <br />
                      • Designed and implemented scheduling functionality,
                      allowing users to book automated check-in calls. •
                      Integrated Google OAuth and Google Calendar API to sync
                      user schedules seamlessly.
                      <br />
                      • Leveraged Fastify and MongoDB to handle authentication,
                      scheduling, and data persistence efficiently.
                      <br />• Earned 2nd place out of 50+ teams at Santa Clara
                      University's Hack for Humanity.
                    </p>
                  </div>
                </a>
              </CarouselItem>
              <CarouselItem>
                <a
                  href="/2025resume.pdf"
                  target="_blank"
                  className="h-[50vh] lg:w-[700px] bg-slate-950 rounded-3xl md:grid md:grid-cols-2 gap-4 drop-shadow-md mx-auto"
                >
                  <div className="w-full h-full overflow-hidden md:rounded-l-3xl rounded-3xl relative">
                    <img
                      src="/resumeImage.jpg"
                      alt="Image of my resume"
                      className="w-full h-full object-cover md:rounded-l-3xl rounded-3xl brightness-50 hover:brightness-75 transition duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center md:hidden">
                      <h3 className="text-white text-2xl font-semibold">
                        Resume
                      </h3>
                    </div>
                  </div>

                  <div className="md:flex hidden flex-col justify-center p-4">
                    <p className="text-white text-3xl mb-4 ">Resume</p>
                    <p className="text-sm text-white overflow-hidden md:block hidden">
                      I have some other stuff on my resume!
                    </p>
                  </div>
                </a>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className=" " />
            <CarouselNext className=" " />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default Projects;
