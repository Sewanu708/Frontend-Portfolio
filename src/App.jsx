import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MiniHeader from "./components/MiniHeader"
import About from './components/About'
import { useEffect } from "react"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import Contact from "./components/Contact"
function App() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [width])
  console.log(width)
  return (
    <div className=" sm:mx-16 mx-4  relative">
      <Header />

      <div className="absolute flex xsm:hidden bg-zinc-800 text-white px-4 py-2 rounded-xl cursor-pointer font-semibold hover:bg-zinc-700 transition-all duration-300 shadow-md hover:shadow-lg right-0 top-20 items-center justify-center gap-2">
        <div className='w-4 h-4 rounded-[50%] bg-green-200 animate-pulse'> </div> <div> Open for projects!
        </div>
      </div>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  )
}

export default App
