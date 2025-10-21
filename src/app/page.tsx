import Hero from "./components/home/Hero";
import Projects from "./components/home/Projects";
import Skills from "./components/home/Skills";
import About from "./components/home/About";
import Education from "./components/home/Education";
import Contact from "./components/home/Contact";


export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects/>
      <Education/>
      <Contact/>
    </div>
    
  );
}
