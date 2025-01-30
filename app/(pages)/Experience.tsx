import React from "react";
import Image from "next/image";


const Experience = () => {
    return (
        <section className="bg-zinc-800 py-24 sm:py-32">
            <div className=" max-w-14xl px-6 lg:px-8">
                <div className="">
                    <div className="flex  ">
                        <div className="w-2/3 ">
                            <div className="ml-12">
                                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent mb-10">Experience</h2>
                                <ol className="relative w-4/5 text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                                    <li className="mb-10 ms-6 flex justify-between">
                                        <div>
                                            <span className="absolute flex items-center justify-center w-4 h-4 bg-green-500 rounded-full -start-2" />
                                            <div className="max-w rounded overflow-hidden shadow-lg bg-zinc-800/50  p-6 hover:bg-zinc-700/50 transition-all duration-300 ">
                                                <div className="px-6 py-4">
                                                    <div className="flex justify-between">
                                                        <div className="font-bold text-xl mb-2 text-green-500">Travancore Analytics</div>
                                                        <p className="text-gray-500 text-base">2021-Present</p>
                                                    </div>
                                                    <span className="font-bold text-white text-md mb-2">Senior Software Developer</span>
                                                    <ul className="ml-5 mt-4 space-y-2 text-zinc-300 list-disc list-inside marker:text-emerald-500">
                                                        <li>
                                                            Developed and maintained full-stack web applications using the MERN stack, optimizing performance
                                                            and scalability.
                                                        </li>
                                                        <li>
                                                            Built RESTful APIs and integrated third-party services. Worked on database optimization, and cloud
                                                            deployments (AWS, Docker).
                                                        </li>
                                                        <li>
                                                            Collaborated with designers for a responsive UI, ensured code quality with testing and reviews.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className=" from-gray-100 via-transparent to-gray-100 opacity-70">
                                <Image
                                    src="/experience.jpg"
                                    alt="skills"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience;