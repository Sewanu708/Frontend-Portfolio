import React from 'react'
import { RiMenu3Fill } from 'react-icons/ri'

function Header() {
    return (
        <header className="w-full px-6 md:px-12 py-4 bg-white shadow-sm font-jakarta sticky top-0 z-50">
            <nav className="flex justify-between items-center">
              
                <div className="font-bold text-2xl sm:text-3xl text-zinc-800">
                    Sewanu
                </div>

              
                <div className=" flex items-center gap-x-4 lg:gap-x-6 text-zinc-600 font-medium">

                    <div className="ml-4 hidden bg-zinc-800 text-white px-4 py-2 rounded-xl cursor-pointer font-semibold hover:bg-zinc-700 transition-all duration-300 shadow-md hover:shadow-lg  xsm:flex items-center justify-center gap-2">
                        <div className='w-4 h-4 rounded-[50%] bg-green-200 animate-pulse'> </div> <div>Hire Me
                        </div>
                    </div>
                    <div className=" text-3xl text-zinc-900 cursor-pointer hover:scale-105 transition-transform duration-300">
                        <RiMenu3Fill />
                    </div>
                </div>


            </nav>
        </header>
    )
}

export default Header
