import React, { useContext } from 'react'
import { myContext } from '../context'
import { motion } from 'framer-motion'
import Hero from "../components/Hero"
import About from '../components/About'
import Projects from "../components/Projects"
import TechStack from "../components/TechStack"
import { easeIn } from 'framer-motion'
import Contact from '../components/Contact'
function LandingPage() {
    const { refs } = useContext(myContext)
    return (
        <div> <motion.div
            className="absolute flex xsm:hidden bg-zinc-800 text-white px-4 py-2 rounded-xl cursor-pointer font-semibold hover:bg-zinc-700 transition-all duration-300 shadow-md hover:shadow-lg right-0 top-25 items-center justify-center gap-2"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2, ease: easeIn }}
        >
            <div className="w-4 h-4 rounded-[50%] bg-green-200 animate-pulse"></div>
            <div>Open for projects!</div>
        </motion.div>


            <div ref={refs.home}>
                <Hero />
            </div>

            <div ref={refs.about}>
                <About />
            </div>

            <div ref={refs.projects}>
                <Projects />
            </div>
            <div ref={refs.skills}>
                <TechStack />
            </div>
            <div ref={refs.contact}>
                <Contact />
            </div></div>
    )
}

export default LandingPage