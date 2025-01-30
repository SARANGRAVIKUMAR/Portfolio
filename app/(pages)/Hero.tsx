import React from "react"
import Image from 'next/image';
import { FaGithub, FaLinkedin } from "react-icons/fa";



const Hero = () => {
    return (
        <div className="bg-black min-h-screen">
            <div className="relative h-screen">
                <div className="absolute inset-0">
                    <div className="h-full w-1/2 bg-[#e5e5e5]"></div>
                    <div className="absolute top-0 right-0 h-full w-1/2 bg-black transform -skew-x-12 origin-top"></div>
            </div>

                <div className="relative container mx-auto h-full">
                    <div className="grid grid-cols-2 h-full items-center">
                        <div className="pr-20">
                            <p className="text-2xl mb-4 text-zinc-500">Hey Buddy, I&apos;m</p>
                            <h1 className="text-6xl text-zinc-600 font-bold mb-4">Sarang Ravikumar</h1>
                            <p className="text-xl text-gray-500 mb-2">Full Stack Developer / MERN Stack Developer</p>
                            <div className="flex gap-2">
                                <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors">
                                    <FaGithub size={24} />
                                </a>
                                <a href="#" className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition-colors">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="relative w-[600px] h-[800px]">
                                <Image
                                    src="/background.png"
                                    alt="Profile"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-full bg-zinc-800 text-white">
                <div className="container mx-auto py-12">
                    <h2 className="text-2xl font-bold mb-6">ABOUT ME</h2>
                    <p className="text-gray-400 mb-6 max-w-3xl">
                        A passionate Full-Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js) and a strong foundation in building scalable, high-performance web applications. With a keen eye for detail and a problem-solving mindset, I specialize in developing efficient, user-friendly, and responsive applications from end to end.
                    </p>
                    {/* TODO Need to add scroll feature to skills section */}
                    <button className=" ml-5 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent text-white hover:bg-white hover:text-black h-10 px-4 py-2">
                        <a href="/Sarang_Resume.pdf" download="Sarang Ravikumar Resume"> Download Resume</a>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Hero;