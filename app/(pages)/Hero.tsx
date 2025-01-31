import React from "react"
import { BiLogoGmail } from "react-icons/bi";
// import Image from "next/image"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoArrowDown, IoCodeSlashOutline } from "react-icons/io5";
import JobExperience from "../components/JobExperience";


const Hero = () => {



    return (
        <div className="min-h-screen bg-gradient-to-br from-black  to-zinc-00">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-20 lg:py-32">
                <div className="flex flex-col items-center text-center">
                    <div className="mb-8 relative">
                        <div className="w-44 h-44 rounded-full border-4 border-white/20 overflow-hidden relative z-10">
                            <img
                                src="/heroImage.jpeg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full blur-xl opacity-30 animate-pulse"></div>
                    </div>
                    <h1 className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold mb-4 text-gray-400 tracking-tight">
                        Hey Buddy I&apos;m
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                        Sarang Ravikumar
                    </h1>
                    <div className="flex items-center gap-3 mb-6">
                        <IoCodeSlashOutline className="text-md sm:text-md md:text-lg lg:text-xl text-gray-300 font-medium" />
                        <h2 className="text-md sm:text-md md:text-lg lg:text-xl text-gray-300 font-medium">
                            MERN Stack Developer
                        </h2>
                    </div>

                    <p className="text-gray-300 max-w-2xl text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl mb-8 leading-relaxed">
                        Crafting digital experiences with clean code and creative solutions.
                        Specialized in React, Node.js, and MongoDB, with <JobExperience />
                        years of
                        professional experience building scalable applications.
                    </p>

                    <div className="flex gap-6 mb-12">
                        <a href="https://github.com/SARANGRAVIKUMAR" target="_blank" className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors">
                            <FaGithub className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/sarang-ravikumar/" target="_blank" className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors">
                            <FaLinkedin className="w-6 h-6" />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sarangravikumar1999@gmail.com" target="_blank" className="bg-gray-900 p-3 rounded-full hover:bg-gray-800 transition-colors">
                            <BiLogoGmail className="w-6 h-6" />
                        </a>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full 
            font-medium transition-all duration-200 border border-white/20 hover:border-white/40
            flex items-center gap-4 group">
                            Know More
                            <IoArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero;