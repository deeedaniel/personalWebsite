import Navbar from "../components/Navbar";
import Daniel from "../components/Daniel";
import About from "../components/About";
import Projects from "../components/Projects";
import Extra from "../components/Extra";

function Index() {
  return (
    <div className=" bg-slate-300">
      <Navbar />
      <main>
        <section id="daniel">
          <Daniel />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Projects />
        </section>
        <section id="extra">
          <Extra />
        </section>
      </main>
    </div>
  );
}
export default Index;
