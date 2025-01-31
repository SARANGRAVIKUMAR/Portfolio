'use client'
import React from "react"
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import JobExperience from "../components/JobExperience";


const Hero = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-gray-900 to-blue-950 text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Gradient Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-500/20 to-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-3xl w-full text-center relative z-10">
                {/* Name and Title Section */}
                <div className="mb-12">
                    <h2 className="text-xl mb-3 font-medium tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                        Hey Buddy I&apos;m
                    </h2>
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-gradient-x">
                        Sarang Ravikumar
                    </h1>
                    <div className="flex items-center justify-center gap-2">
                        <IoCodeSlashOutline className=" bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text" size={24} />
                        <span className="text-2xl font-light bg-gradient-to-r from-blue-200 to-purple-200 text-transparent bg-clip-text">
                            {/* Add Transition to show multiple skill section */}
                            Full Stack Developer
                        </span>
                    </div>
                </div>

                {/* Description */}
                <div className="relative mb-12 backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl" />
                    <p className="relative text-gray-200 max-w-2xl mx-auto leading-relaxed text-lg">
                        <JobExperience />
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-8 mb-12">
                    <a href="https://github.com/SARANGRAVIKUMAR" target="_blank" rel="noopener noreferrer"
                        className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                        <FaGithub size={28} className="relative text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110" />
                    </a>
                    <a href="https://www.linkedin.com/in/sarang-ravikumar/" target="_blank" rel="noopener noreferrer"
                        className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                        <FaLinkedin size={28} className="relative text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110" />
                    </a>
                    <a href="mailto:sarangravikumar1999@gmail.com"
                        className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                        <BiLogoGmail size={28} className="relative text-gray-300 hover:text-white transition-colors duration-300 transform hover:scale-110" />
                    </a>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center gap-4 items-center">
                    <button
                        className="relative group px-8 py-3 rounded-full overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 group-hover:scale-105" />
                        <div className="relative flex items-center gap-2 text-white">
                            <a href="/Sarang_Resume.pdf" download="resume.pdf"><span>Download Resume</span></a>
                        </div>
                    </button>

                    {/* <button
                        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                        className="relative group px-8 py-3 rounded-full overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 transition-transform duration-300 group-hover:scale-105" />
                        <div className="relative flex items-center gap-2 text-white">
                            <span>Know More</span>
                            <IoArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </div>
                    </button> */}
                </div>
            </div>
        </div>

    )
}

export default Hero;