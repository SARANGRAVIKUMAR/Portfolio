import React from "react";
import Image from "next/image";


const Experience = () => {
    return (
        <section className="bg-[#1a1a1a] py-24 sm:py-32">
            <div className=" max-w-14xl px-6 lg:px-8">
                <div className="">
                    <div className="flex items-center justify-center">
                        <div className="w-2/3 ">
                            <div className="ml-12">
                                <h2 className="text-3xl font-bold tracking-tight mb-7 sm:text-4xl">Experience</h2>
                                <ol className="relative w-4/5 text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                                    <li className="mb-10 ms-6 flex justify-between">
                                        <div>
                                            <span className="absolute flex items-center justify-center w-4 h-4 bg-gray-300 rounded-full -start-2 ring-4 ring-white dark:ring-gray-900 ">
                                            </span>
                                            <h3 className="font-medium leading-tight">Travancore Analytics <span className="text-gray-500 text-sm">2021-Present</span> </h3>
                                            <div className="ml-6 flex flex-col gap-1">
                                                <span className="text-sm text-white-100">Senior Software Developer</span>
                                                <span className="text-sm text-gray-400"> Developed and maintained full-stack web applications using the MERN stack, optimizing performance and scalability. Built RESTful APIs,and integrated third-party services. Worked on database optimization, and cloud deployments (AWS, Docker). Collaborated with designers for a responsive UI, ensured code quality with testing and reviews.</span>
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