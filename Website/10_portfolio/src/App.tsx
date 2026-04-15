import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import {
  Hero,
  About,
  Projects,
  Experience,
  Testimonials,
  Contact,
} from "./sections";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
