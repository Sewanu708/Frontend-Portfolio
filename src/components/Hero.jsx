import { motion } from 'framer-motion'
const containerVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.2
        }
    }

}

const buttonVariants = {
    hidden: {
        opacity: 0,
    
    },
    visible: {
        opacity: 1,
        
       
    },
    hover: {
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
        }
    }
}
export default function Hero() {
    return (
        <div className='w-full h-auto pt-16  mt-4 mx-auto bg-zinc-900 text-white rounded-[5px] font-jakarta'>
            <motion.div variants={containerVariants} animate='visible' initial='hidden' className='flex flex-col justify-center items-center w-full px-4 sm:px-6'>
                <p className='text-center font-[630] text-2xl sm:text-3xl mlg:text-4xl leading-10 sm:leading-13'>
                    Hey! I'm 👨🏾‍💻 Sewanu Isaiah. <br />
                    A frontend developer 🧑🏾‍💻 <br />
                    <span className='sm:text-3xl text-2xl'>
                        Building clean, fast, and accessible web experiences.
                    </span>
                </p>
                <p className='text-center text-[14px] mt-4 max-w-2xl'>
                    <span className='font-[500]'>
                        Based in 🌍, available for freelance, full-time, or collaborative projects.
                    </span>
                    <br />
                    <b className='italic'>Let’s build something awesome together. 🤝</b>
                </p>

                <motion.button variants={buttonVariants} className='mt-12 mb-8  bg-white text-zinc-900 font-semibold py-2 px-6 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out shadow-md'>
                    Let’s Connect
                </motion.button>
            </motion.div>
        </div>
    )
}
