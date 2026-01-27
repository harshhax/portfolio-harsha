import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import "./styles/global.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
    </>
  );
}

export default App;
