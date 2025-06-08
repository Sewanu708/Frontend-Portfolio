import React, { useState } from 'react'
import { useEffect } from 'react';
import { motion } from 'framer-motion';
function Pract() {
    const text = 'Hello World'
    const [animatedText, setAnimatedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeout = 50;

    useEffect(() => {
        if (currentIndex < text.length) {
            const clearId = setTimeout(() => {
                setAnimatedText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, timeout);

            return () => {
                clearTimeout(clearId)
            }
        } else {

        }



    }, [text, animatedText])
    return (
        <motion.div>
            <p className='sr-only'>{text}</p>
            <motion.p>{animatedText}</motion.p>
        </motion.div>

    )
}

export default Pract