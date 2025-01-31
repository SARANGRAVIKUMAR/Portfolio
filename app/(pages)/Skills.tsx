import React from "react";
import Image from 'next/image';
import CircularProgress from "../components/CircularProgress";
import { Constants } from "../utils/constants";

const Skills = () => {
    return (
        <section className="bg-zinc-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="">
                    <div className="flex items-center justify-center gap-10">
                        <div className="lg:w-1/2 flex  flex-col gap-4">
                            <h2 className="text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">Skills and Expertise</h2>
                            <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
                                {Constants.skills.map((skill) => (
                                    <CircularProgress value={skill.value} key={skill.key} name={skill.name} />
                                ))}
                            </div>
                        </div>
                        <div className="w-1/2 lg:block hidden">
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