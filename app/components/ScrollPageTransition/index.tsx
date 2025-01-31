'use client';

import { motion } from 'framer-motion';

const ScrollPageTransition = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state (hidden)
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            exit={{ opacity: 0, y: -20 }} // Animate out of view
            transition={{ duration: 1, ease: 'easeInOut' }} // Transition settings
            viewport={{ once: false, amount: 0.2 }} // Adjust when animation triggers
        >
            {children}
        </motion.div>
    );
};

export default ScrollPageTransition;
