import React from 'react'

export default function Hero() {
    return (
        <div className='w-full h-auto pt-16 pb-16 mt-4 mx-auto bg-zinc-900 text-white rounded-[5px] font-jakarta'>
            <div className='flex flex-col justify-center items-center w-full px-4 sm:px-6'>
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

                <button className='mt-6 bg-white text-zinc-900 font-semibold py-2 px-6 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out shadow-md'>
                    Let’s Connect
                </button>
            </div>
        </div>
    )
}
