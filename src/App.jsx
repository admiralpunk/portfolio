import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Leadership from "./components/Leadership";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark-theme bg-cover bg-center md:bg-contain min-h-screen">
      <Sidebar />
      <main className="md:ml-64">
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Leadership />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

export default App;
