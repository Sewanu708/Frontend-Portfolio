import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from './components/About'
import { useEffect } from "react"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import Contact from "./components/Contact"
import { easeIn, motion } from "framer-motion"
function App() {


  return (
    <div className=" sm:mx-16 mx-4  relative">
      <Header />

      <motion.div className="absolute flex xsm:hidden bg-zinc-800 text-white px-4 py-2 rounded-xl cursor-pointer font-semibold hover:bg-zinc-700 transition-all duration-300 shadow-md hover:shadow-lg right-0 top-25 items-center justify-center gap-2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 2,ease:easeIn }}>
        <div className='w-4 h-4 rounded-[50%] bg-green-200 animate-pulse'> </div> <div> Open for projects!
        </div>
      </motion.div>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />

    </div>
  )
}

export default App
