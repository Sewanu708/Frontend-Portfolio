import React, { useContext } from 'react'
import { themeContext } from '../context'
import { FiHome } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { LuNotebook } from "react-icons/lu";
function MiniHeader() {
    const headerData = [
        {
            id: '1',
            label: 'twitter',
            icons: <FaXTwitter className="text-zinc-500 group-hover:text-black text-xl transition-colors duration-200 group-hover:scale-105" />
        }, {
            id: '2',
            label: 'github',
            icons: <FaGithub className="text-zinc-500 group-hover:text-black text-xl transition-colors duration-200 group-hover:scale-105" />
        }, {
            id: '3',
            label: 'resume',
            icons: <LuNotebook className="text-zinc-500 group-hover:text-black text-xl transition-colors duration-200 group-hover:scale-105" />
        }
    ]
    const { theme, setTheme } = useContext(themeContext);

    return (
        <div className='text-black flex gap-2 items-center w-fit justify-between sticky top-5 rounded-2xl px-2 py-2 border-[1.25px] border-zinc-300  cursor-pointer dark:text-accent backdrop-blur-md'
        >
            <div className='border-zinc-700 hover:bg-zinc-200 w-[40px] h-[40px] hover:w-[50px] flex items-center justify-center hover:rounded-xl transition-all duration-200 ease-in-out group relative'>
                <FiHome className="text-zinc-500 text-xl group-hover:text-black transition-colors duration-200 group-hover:scale-105" size={20} />
                <div className='group-hover:flex hidden group-hover: absolute bottom-[-40px]  rounded  text-white px-2 bg-zinc-800 capitalize' >
                    Home
                </div>
            </div>
            <div className='h-4 w-[1px] bg-zinc-300'>

            </div>
            <div className='flex items-center w-full justify-between flex-1/3 xsm:flex-1/2 '>
                {headerData.map((item, index) => (
                    <div key={index} className=' border-zinc-700 hover:bg-zinc-200 w-[40px] h-[40px] flex items-center justify-center  hover:w-[50px] hover:rounded-xl transition-all  duration-300 ease-in-out group relative'>
                        {item.icons}

                        <div className='group-hover:flex hidden group-hover: absolute bottom-[-40px]  rounded  text-white px-2 bg-zinc-800 capitalize' >
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
            <div className='h-4 w-[1px] bg-zinc-300'></div>
            <div className='w-fit xsm:w-[100px] transition-all  duration-300 ease-in-out h-[50px] hover:w-[120px] bg-zinc-700 p-2 rounded-xl text-white flex items-center justify-center xsm:text-[16px] text-14px  font-[400]'>
                My Blog
            </div>
        </div>
    )
}

export default MiniHeader