import React from "react";
import Image from 'next/image';
import CircularProgress from "../components/CircularProgress";
import { Constants } from "../utils/constants";

const Skills = () => {
    return (
        <section className="bg-[#e5e5e5] py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="">
                    <div className="flex items-center justify-center">
                        <div className="w-1/2">
                            <h2 className="text-3xl font-bold tracking-tight mb-7 text-gray-900 sm:text-4xl">Skills</h2>
                            <div className="flex space-x-14 flex-wrap">
                                {Constants.skills.map((skill) => (
                                    <CircularProgress value={skill.value} key={skill.key} name={skill.name} />
                                ))}
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className=" from-gray-100 via-transparent to-gray-100 opacity-70">
                                <Image
                                    src="/skills.jpg"
                                    alt="Profile"
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
};

export default Skills;