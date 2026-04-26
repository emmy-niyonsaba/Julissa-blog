import './App.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <a
        href="https://wa.me/000000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        aria-label="Open WhatsApp chat"
      >
        <WhatsAppIcon sx={{ fontSize: 22 }} />
        <span className="text-sm font-semibold">chart to me now</span>
      </a>
    </>
  )
}

export default App
