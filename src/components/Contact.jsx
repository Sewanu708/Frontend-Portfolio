import React from 'react'
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import Form from './Form'
import ContactCard from './ContactCard'
import { HiOutlinePhone } from "react-icons/hi2";


function Contact() {
    return (
        <section className="bg-zinc-900 px-6 sm:px-12 lg:px-32 py-20 mt-8 text-zinc-100 font-jakarta">

            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-zinc-50 tracking-wide">Let's Connect</h2>
                <p className="text-zinc-400 mt-4">Available for freelance and full-time opportunities</p>
                <div className="flex items-center justify-center mt-4 gap-4">
                    <a href="https://x.com/Pelz_2023" className="text-zinc-300 hover:text-zinc-100 text-2xl">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/sewanuisaiah/" className="text-zinc-300 hover:text-zinc-100 text-2xl">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Sewanu708" className="text-zinc-300 hover:text-zinc-100 text-2xl">
                        <FaGithub />
                    </a>
                </div>
            </div>

          
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                <ContactCard
                    icon={FaEnvelope}
                    title="Email"
                    value="sewanu708@gmail.com"
                />
                <ContactCard
                    icon={HiOutlinePhone}
                    title="Phone"
                    value="+234 802 228 7813"
                />
                <ContactCard
                    icon={BsLinkedin}
                    title="LinkedIn"
                    value="Sewanu Isaiah"
                    link="https://www.linkedin.com/in/sewanuisaiah/"
                />
                
            </div>

            
            <div className="max-w-4xl mx-auto bg-zinc-800 rounded-xl p-4 shadow-xl">
                <h3 className="text-2xl font-semibold mb-6 text-zinc-50">Send Me a Message</h3>
                <Form />
            </div>

            
        </section>
    )
}

export default Contact
