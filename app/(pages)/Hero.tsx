import Link from "next/link"
import React from "react"
import Image from 'next/image';


const Hero = () => {
    return (
        <>
            <div className="absolute inset-0 bg-[#e5e5e5] z-0">
                <div className="absolute inset-0 bg-black z-0
                [clip-path:polygon(55%_0,100%_0,100%_100%,35%_100%)]
                lg:[clip-path:polygon(55%_0,100%_0,100%_100%,35%_100%)]
                sm:[clip-path:polygon(0%_0,100%_0,100%_100%,0%_100%)]
                "
                />
            </div>

            <div className="grid min-h-screen grid-cols-1 items-center lg:grid-cols-2 lg:gap-28">
                {/* Right content - Image */}
                <div className="relative z-10 mt-8 lg:mt-0 order-1 lg:order-2">
                    <Image
                        src=""
                        alt=""
                        width={500}
                        height={700}
                        className="mx-auto object-cover lg:mx-0"
                    />
                </div>

                {/* Left content */}
                <div className="z-10 py-12 lg:py-0 order-2 lg:order-1">
                    <div className="mb-8">
                        <Link href="/" className="text-2xl font-bold">
                            TG
                        </Link>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400">Hi, I am</p>
                    <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">Tomasz Gajda</h1>
                    <p className="mt-4 text-lg text-gray-600">Front-end Developer / UI Designer</p>
                    {/* <div className="mt-8 flex gap-4">
                        <Link href="#" className="rounded-full bg-gray-900 p-2 text-white hover:bg-gray-700">
                            <Globe className="h-5 w-5" />
                            <span className="sr-only">Website</span>
                        </Link>
                        <Link href="#" className="rounded-full bg-gray-900 p-2 text-white hover:bg-gray-700">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="#" className="rounded-full bg-gray-900 p-2 text-white hover:bg-gray-700">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                    </div> */}
                </div>
            </div>
        </>

    )
}

export default Hero;