'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import React from 'react';

const CircularProgress = ({ value, name }: { value: number; name: string }) => {
    const count = useMotionValue(0);
    const displayValue = useTransform(count, (latest) => Math.round(latest)); 
    return (
        <div className="flex flex-col items-center">
            <h1 className="m-3">{name}</h1>
            <motion.div
                className="radial-progress flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                onViewportEnter={() => {
                    animate(count, value, {
                        duration: 1,
                        ease: 'easeOut',
                    });
                }}
                style={
                    {
                        '--value': displayValue,
                        '--thickness': '0.27rem',
                    } as React.CSSProperties
                }
                transition={{ duration: 1, ease: 'linear' }}
                viewport={{ once: true }} 
            >
                <motion.span>{displayValue}</motion.span>
                <span>%</span>
            </motion.div>
        </div>
    );
};

export default CircularProgress;