import React from 'react'

function Form() {
    return (
        <form  id="contact-form" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                    <label htmlFor="name" className="block mb-2 text-zinc-300">Your Name</label>
                    <input type="text" name="name" id="name" required placeholder="John Doe"
                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-zinc-300">Your Email</label>
                    <input type="email" name="email" id="email" required placeholder="sewanu@example.com"
                        className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400" />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block mb-2 text-zinc-300">Your Message</label>
                <textarea name="message" id="message" required rows={10} placeholder="Let’s work together on something awesome..."
                    className="w-full px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-400"></textarea>
            </div>
            <button type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-zinc-100 text-zinc-900 font-semibold hover:bg-zinc-300 transition-all ease-in-out cursor-pointer duration-300 hover:scale-110">
                Send Message
                <i className="fa-solid fa-paper-plane ml-2"></i>
            </button>
        </form>
    )
}

export default Form