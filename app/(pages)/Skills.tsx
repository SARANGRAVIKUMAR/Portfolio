import React from "react";
import Image from 'next/image';
import CircularProgress from "../components/CircularProgress";
import { Constants } from "../utils/constants";

const Skills = () => {
    return (
        <section className="bg-zinc-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="">
                    <div className="flex items-center justify-center">
                        <div className="w-1/2">
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">Skills and Expertise</h2>
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