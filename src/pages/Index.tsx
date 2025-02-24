import Navbar from "../components/Navbar";
import Daniel from "../components/Daniel";
import About from "../components/About";
import Projects from "../components/Projects";
import Extra from "../components/Extra";

function Index() {
  return (
    <div className=" bg-slate-300">
      <Navbar />
      <main className="">
        <section id="daniel" className="">
          <Daniel />
        </section>
        <section id="about" className="">
          <About />
        </section>
        <section id="project" className="">
          <Projects />
        </section>
        <section id="extra" className=" ">
          <Extra />
        </section>
      </main>
    </div>
  );
}
export default Index;
