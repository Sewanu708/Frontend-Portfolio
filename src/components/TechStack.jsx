import React from 'react';
import html from '../assets/html-5.png';
import js from '../assets/java-script.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import git from '../assets/Git-Icon-1788C.png'
import vs from '../assets/images.png';
import github from '../assets/download.png';
const techStack = [
    { imgPath: html, label: 'HTML' },
    { imgPath: js, label: 'JavaScript' },
    { imgPath: python, label: 'Python' },
    { imgPath: react, label: 'React' },
];
const techTools = [
    { imgPath: git, label: 'Git' },
    { imgPath: vs, label: 'VS Code' },
    { imgPath: github, label: 'Github' }
];

function TechStack() {
    return (
        <section className="w-full mt-8 px-6 md:px-12 bg-white">
            <h2 className="text-2xl xsm:text-3xl font-bold text-zinc-800 mb-10">
                Skills & Technologies
            </h2>

            <div className="grid md:grid-cols-2 gap-12">

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-zinc-700">Core Skills</h3>
                    <div className="flex flex-wrap gap-4">
                        {techStack.map((item, index) => (
                            <div key={index} className="w-[120px] h-[120px] flex flex-col items-center justify-center bg-zinc-100 rounded-lg shadow-sm hover:shadow-md transition">
                                <img src={item.imgPath} alt={item.label} className="w-10 h-10 mb-2" />
                                <p className="text-sm text-zinc-600">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4 text-zinc-700">Tools</h3>
                    <div className="flex flex-wrap gap-4">
                        {techTools.map((item, index) => (
                            <div key={index} className="w-[120px] h-[120px] flex flex-col items-center justify-center bg-zinc-100 rounded-lg shadow-sm hover:shadow-md transition">
                                <img src={item.imgPath} alt={item.label} className="w-10 h-10 mb-2" />
                                <p className="text-sm text-zinc-600">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TechStack;
