import React from 'react'

function ContactCard({ icon: Icon, title, value, link }) {
    return (
        <div className="bg-zinc-800 p-6 rounded-xl flex items-start gap-4 shadow-md hover:shadow-lg transition">
            <div className="text-zinc-200 text-2xl mt-1">
                <Icon />
            </div>
            <div>
                <h4 className="text-lg font-semibold text-zinc-100">{title}</h4>
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 text-sm hover:underline">
                        {value}
                    </a>
                ) : (
                    <p className="text-zinc-400 text-sm">{value}</p>
                )}
            </div>
        </div>
    )
}

export default ContactCard
