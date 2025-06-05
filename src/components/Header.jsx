import React from 'react'
import { RiMenu3Fill } from "react-icons/ri";
function Header() {
    return (
        <div className='flex justify-between items-center w-full px-16 py-4 font-jakarta'>
            <div className='font-[700] text-3xl text-zinc-600'>
                Sewanu.
            </div>
            <div className='flex justify-center items-center md:gap-x-8 gap-x-4'>
                <div className='cursor-pointer hover:scale-115 hover:font-[600] transition-all hover:text-zinc-600 duration-300 hidden md:flex' >
                    Home
                </div>
                <div className='cursor-pointer hover:scale-115 hover:font-[600] transition-all  hover:text-zinc-600  duration-300 hidden md:flex'>
                    About
                </div>
                <div className='cursor-pointer hover:scale-115 hover:font-[600] transition-all  hover:text-zinc-600  duration-300 hidden md:flex'>
                    Skills
                </div>
                <div className='cursor-pointer hover:scale-115 hover:font-[600] transition-all  hover:text-zinc-600  duration-300 hidden md:flex'>
                    Blog
                </div>
                <div>

                </div>
                <div className='  transition-all  duration-300 ease-in-out h-[50px]  bg-zinc-600 py-2 px-4 rounded-xl text-white flex items-center justify-center hover:scale-105 font-[600] cursor-pointer hover:shadow-xl'>
                    Contact
                </div>
                <div className='md:hidden text-3xl cursor-pointer hover:scale-105 transition-all  duration-300 ease-in-out'>
                    <RiMenu3Fill />
                </div>
            </div>
        </div>
    )
}

export default Header