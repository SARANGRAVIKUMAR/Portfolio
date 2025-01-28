import React from "react"
import Image from 'next/image';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";



const Hero = () => {
    return (
        <>
            <div className="absolute inset-0 lg:bg-[#e5e5e5] bg-black">
                <div className="absolute inset-0 lg:bg-black bg-[#e5e5e5] bg-opacity-50 lg:z-0 z-10
                lg:[clip-path:polygon(55%_0,100%_0,100%_100%,35%_100%)]
                md:[clip-path:polygon(0%_71%,100%_49%,100%_100%,0%_100%)]
                sm:[clip-path:polygon(0%_71%,100%_49%,100%_100%,0%_100%)]
                "
                />
            </div>

            <div className="grid mt-10 lg:mt-28 grid-cols-1 lg:grid-cols-2">
                <div className="relative flex justify-center align-items-center lg:mt-0 order-1 lg:order-2">
                    <Image
                        src="/background.png"
                        alt="Image"
                        width={500}
                        height={600}
                    />
                </div>

                {/* Left content */}
                <div className="flex flex-col  justify-center z-10 py-12 lg:py-0 order-2 lg:order-1">
                    <p className="text-lg text-gray-600 dark:text-gray-400">Hey Buddy, Myself</p>
                    <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">Sarang Ravikumar</h1>
                    <p className="mt-4 text-lg text-gray-600">Full Stack Developer</p>
                    <div className="mt-8 flex gap-4">
                        <Link href="#" className="rounded-full bg-gray-900 p-2 text-white hover:bg-gray-700">
                            <IoLogoGithub />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="#" className="rounded-full bg-gray-900 p-2 text-white hover:bg-gray-700">
                            <FaLinkedin />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Hero;