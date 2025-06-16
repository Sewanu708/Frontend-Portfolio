import movie from '../assets/Home-screen.png'
import nft from '../assets/NFT Marketplace - 1x1 Cover.png'
import e_com from '../assets/Homepage mockup.png'
import nexcent from '../assets/Thumbnail'
import { SlArrowRight } from "react-icons/sl";
import { Link } from 'react-router';
import { useLocation } from 'react-router';

const projectData = [
    {
        imagePath: e_com,
        header: 'Ecommerce',
        label: 'E-commerce Product Page',
        path:'/https://sewanu708.github.io/Exclusive-/'
    },
    {
        imagePath: nft,
        header: 'NFT Marketplace',
        label: 'Crypto Assets',
        path:'https://sewanu708.github.io/NFT/'
    },
    {
        imagePath: movie,
        header: 'Movie App',
        label: 'Website - Movie App',
        path:'https://movie-app-nmmu.vercel.app/'
    },
    {
        imagePath: nexcent,
        header: 'Nexcent',
        label: 'Product Landing Page',
        path:'https://sewanu708.github.io/Nexcent/'
    },
]

function Projects() {
    const location = useLocation()
    const workPage = location.pathname === '/work';
    const data = workPage ? projectData : projectData.slice(0, 4)
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
                {data.map((item, index) => (
                    <Link to={item.path}
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
                    </Link>
                ))}
            </div>
            
            <Link to={'work'} className='mt-12 w-[150px] h-[50px] bg-zinc-900 py-2 px-4 rounded-xl text-white flex items-center justify-center gap-2 mx-auto cursor-pointer font-semibold hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-xl' style={{display:workPage? 'none' : 'flex'}}>
                View all <SlArrowRight />
            </Link>
        </div>
    )
}

export default Projects
