import React from 'react'
import { motion } from 'framer-motion'
import resume from '../../public/Sewanu Isaiah Resume.pdf'
function Menu({ handleNavigate }) {
    return (

        <motion.div animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.8, y: -50, opacity: 0 }} initial={{ scale: 0.8, y: -50, opacity: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className='min-w-[200px]  max-w-[300px] h-auto  px-4 py-4 bg-zinc-700 absolute right-0 top-20 '>

            <div className="flex flex-col items-start justify-center w-full h-full  gap-4 ">
                {[
                    'home', 'about', 'projects', 'skills', 'resume', 'contact'
                ].map((item, index) => {
                    const content = item === 'resume' ? <a key={index} className='w-full h-[40px] cursor-pointer capitalize text-white py-2 px-4 hover:bg-zinc-900' href={resume} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                        : <div
                            key={index}
                            className="w-full h-[40px] cursor-pointer capitalize text-white py-2 px-4 hover:bg-zinc-900"
                            onClick={() => {
                                handleNavigate(item)
                            }}
                        >
                            {item}
                        </div>
                    return content

                })}
            </div>
        </motion.div>
    )
}

export default Menu