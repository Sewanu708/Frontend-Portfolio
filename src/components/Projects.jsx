import React from 'react'
import movie from '../assets/Home-screen.png'
import nft from '../assets/NFT Marketplace - 1x1 Cover.png'
import e_com from '../assets/Homepage mockup.png'
import { SlArrowRight } from "react-icons/sl";

const projectData = [
    {
        imagePath: e_com,
        header: 'Ecommerce',
        label: 'E-commerce Product Page',
    },
    {
        imagePath: nft,
        header: 'NFT Marketplace',
        label: 'Crypto Assets',
    },
    {
        imagePath: movie,
        header: 'Movie App',
        label: 'Website - Movie App',
    },
    {
        imagePath: e_com,
        header: 'Ecommerce',
        label: 'E-commerce Product Page',
    },
    {
        imagePath: nft,
        header: 'NFT Marketplace',
        label: 'Crypto Assets',
    },
    {
        imagePath: movie,
        header: 'Movie App',
        label: 'Website - Movie App',
    },
]

function Projects() {
    return (
        <div className='mx-auto px-6 md:px-12 max-w-7xl w-full  mt-8 font-jakarta'>
            <h1 className='font-extrabold text-2xl xsm:text-3xl text-zinc-900 text-start w-full'>Featured Projects</h1>

            <div className='mt-8 grid gap-6
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-3
                xl:grid-cols-3
                max-w-screen-lg mx-auto
            '>
                {projectData.map((item, index) => (
                    <div
                        key={index}
                        className='rounded-lg shadow-xl p-4 cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-in-out flex flex-col'
                    >
                        <div className='flex flex-col gap-1 mb-4'>
                            <p className='text-center font-semibold text-zinc-800'>{item.header}</p>
                            <p className='text-center text-xs text-zinc-400'>{item.label}</p>
                        </div>

                        <div className='border-[10px] rounded-2xl border-zinc-200 overflow-hidden'>
                            <img
                                src={item.imagePath}
                                alt={item.header}
                                className='w-full h-auto object-cover '
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-12 w-[150px] h-[50px] bg-zinc-900 py-2 px-4 rounded-xl text-white flex items-center justify-center gap-2 mx-auto cursor-pointer font-semibold hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl'>
                View all <SlArrowRight />
            </div>
        </div>
    )
}

export default Projects
