import React from "react";

const Skills = () => {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        I&apos;m a passionate developer with expertise in creating modern web applications. My focus is on building
                        responsive, user-friendly interfaces using the latest technologies.
                    </p>
                    <button className="mt-8 inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-900 bg-transparent text-gray-900 hover:bg-gray-900 hover:text-white h-10 px-4 py-2">
                        Download CV
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Skills;