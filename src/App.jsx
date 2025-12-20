import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";
import Gallery from './pages/Gallery'
import Snowfall from 'react-snowfall';

function App() {

  useEffect(() => {
    const handleScrollBar = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      const scrollBar = document.getElementById("scrollBar");
      if (scrollBar) scrollBar.style.width = scrollPercent + "%";

      const backToTopBtn = document.getElementById("backToTop");
      if (backToTopBtn) {
        if (scrollTop > 300) {
          backToTopBtn.classList.remove("hidden");
        } else {
          backToTopBtn.classList.add("hidden");
        }
      }
    };

    window.addEventListener("scroll", handleScrollBar);
    return () => window.removeEventListener("scroll", handleScrollBar);
  }, []);

  return (
    <div className="App">
            <div
        id="scrollBar"
        className="fixed top-16 left-0 h-1 bg-[#0F8B8D] w-0 z-50"
      ></div>
      <Navbar />


      <section
        id="home"
        className="relative w-full min-h-screen bg-[url('/background.jpg')] bg-cover bg-center pt-16"
      >
              <Snowfall color="white"/>

        <div className="absolute inset-0 bg-black/50"></div>
        <Home className="relative z-10" />
      </section>

       <section id="menu" className="w-full bg-white min-h-screen">
        <Menu />
      </section>

      <section id="about" className="w-full bg-white min-h-screen">
        <About />
      </section>

      <section id='gallery'>
        <Gallery />
      </section>

      <section id="contact" className="w-full bg-white min-h-screen">
        <Contact />
      </section>

      <button
        id="backToTop"
        className="hidden fixed bottom-6 right-6 bg-[#0F8B8D] text-white p-3 rounded-full shadow-lg 
          hover:bg-[#074b4d] hover:scale-105 transition-all duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <HiArrowUp size={20} />
      </button>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
