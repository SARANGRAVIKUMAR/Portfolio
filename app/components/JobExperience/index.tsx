"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect } from "react";

const JobExperience = () => {
    const getTotalMonthsOfExperience = () => {
        const dPast = "August 2, 2021";
        const indicatedD = new Date(dPast);
        const d = new Date();
        const elapsed = d.getTime() - indicatedD.getTime();
        const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44;
        const totalMonths = Math.floor(elapsed / millisecondsPerMonth);
        return totalMonths;
    };

    const count = useMotionValue(0);
    const totalMonths = getTotalMonthsOfExperience();

    const jobDescription = useTransform(count, (value) => {
        const years = Math.floor(value / 12);
        const months = Math.floor(value % 12);
        const description = ` Crafting digital experiences with clean code and creative solutions.
                        Specialized in React, Node.js, and MongoDB, with  ${years} yrs ${months} months  of professional
                        experience building scalable applications.`
        return description;
    });

    useEffect(() => {
        const controls = animate(count, totalMonths, { duration: 3, ease: "easeOut" });
        return () => controls.stop();
    }, [count, totalMonths]);

    return (
        <motion.div>
            <motion.span>
                {jobDescription}</motion.span>
        </motion.div>
    );
};

export default JobExperience;