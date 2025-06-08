import React, { useRef } from 'react'
import me from '../assets/IMG_9729ED-removebg-preview.png'
import { IoDocumentTextOutline } from "react-icons/io5";
import { useInView,motion } from 'framer-motion';
function About() {
    const ref = useRef(null );
    const isInView = useInView(ref, { once: false })
    return (
        <motion.div ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.5 }} className='w-full px-6 md:px-12  h-auto font-jakarta mt-8'>
            <h1 className='font-[700] text-2xl xsm:text-3xl text-zinc-900'>About</h1>
            <div className='py-4 flex justify-between items-center gap-8 mlg:flex-row flex-col'>
                <div className='flex-1/4 text-zinc-400 leading-7'>
                    I’m Sewanu Isaiah, a Front-End Developer with a passion for crafting interactive and user-friendly web experiences. I specialize in HTML, CSS, tailwind JavaScript, and React.js, continuously refining my skills to build modern, responsive, and high-performance applications. I have experience working with JavaScript modules, APIs, and state management, and I’m currently deepening my knowledge of backend interactions and frontend optimizations.
                    <br />
                    <br /> My approach to development focuses on clean code, intuitive UI/UX, and efficient performance. Beyond web development, I’ve explored machine learning, working on classification, regression, and recognition projects to analyze data and build predictive models. However, my main focus remains on developing scalable front-end applications that enhance user experiences.
                </div>
                <div className='w-[200px] p-4 h-auto rounded shadow'>
                    <div className='rounded bg-zinc-200 '>
                        <img src={me} alt="" className='w-full h-auto' />
                    </div>

                </div>
            </div>

            <div className='transition-all w-[200px] duration-300 ease-in-out h-[50px]  bg-zinc-00 py-2 px-4 rounded-xl text-white flex items-center justify-center gap-2 hover:scale-105 font-[600] cursor-pointer hover:shadow-xl'>
                <IoDocumentTextOutline />  Download CV
            </div>
        </motion.div>
    )
}

export default About