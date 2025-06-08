import React from 'react'
import { FiHome } from "react-icons/fi";
import { motion } from 'framer-motion';
import { MdOutlineWorkOutline, MdOutlineContactPage } from "react-icons/md";
import { LuNotebook } from "react-icons/lu";
import { PiUserCircleLight } from "react-icons/pi"; // for About

const headerData = [
    {
        id: '1',
        label: 'Home',
        icons: <FiHome />
    },
    {
        id: '2',
        label: 'Projects',
        icons: <MdOutlineWorkOutline />
    },
    {
        id: '3',
        label: 'Resume',
        icons: <LuNotebook />
    },
    {
        id: '4',
        label: 'About',
        icons: <PiUserCircleLight />
    },
    {
        id: '5',
        label: 'Contact',
        icons: <MdOutlineContactPage />
    }
];


function Menu() {
    return (

        <motion.div animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.8, y: -50, opacity: 0 }} initial={{ scale: 0.8, y: -50, opacity: 0 }} transition={{ duration: 0.5, ease: 'easeInOut' }} className='min-w-[200px]  max-w-[300px] h-auto  px-4 py-4 backdrop-blur-2xl absolute right-0 top-20 '>

            <div className="flex items-center justify-center w-full h-full flex-wrap gap-4 ">
                {headerData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="sm:w-[100px] sm:h-[80px] w-[80px] h-[60px] flex flex-col items-center justify-center bg-zinc-100 rounded-lg shadow-sm hover:shadow-md transition"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {item.icons}
                        <p className="text-sm capitalize text-zinc-600">{item.label}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Menu