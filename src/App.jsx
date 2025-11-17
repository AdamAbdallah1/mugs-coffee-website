import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />

      <section id='home' className="relative w-full min-h-screen bg-[url('/bg-coffee3.jpg')] bg-cover bg-center pt-16">
        <div className="absolute inset-0 bg-black/50"></div>
        <Home className="relative z-10"/>
      </section>

      <section id='about' className="w-full bg-white min-h-screen">
        <About />
      </section>

      <section id='menu' className='w-full bg-white min-h-screen'>
        <Menu />
      </section>

      <section id='contact' className='w-full bg-white min-h-screen'>
        <Contact />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
