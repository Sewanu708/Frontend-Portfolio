import React from 'react'

export default function Hero() {
    return (
        <div className=' mlg:w-[850px] w-full h-auto pt-16 pb-16 mt-4 mx-auto sm:mt-4 mlg:shadow-[0_4px_6px_-2px_rgba(0,0,0,0.1)] rounded-[5px] shadow-none font-jakarta'>
            <div className='flex flex-col justify-center items-center w-full'>
                <p className='text-center font-[630] text-2xl mlg:text-4xl sm:text-3xl leading-10 sm:leading-13'>Hey! I'm 👨🏾‍💻 Sewanu Isaiah. <br />
                    A frontend developer  🧑🏾‍💻 <br /> <span className='sm:text-3xl text-2xl'>Building clean, fast, and accessible web experiences.</span>

                </p>
                <p className='text-center text-[14px] mt-2'> <span className='font-[500]'>
                    Based in 🌍, available for freelance, full-time, or collaborative projects.
                </span>
                    <br />
                    <b className='italic'>Let’s build something awesome together. 🤝</b>

                </p>
            </div>
        </div>
    )
}
