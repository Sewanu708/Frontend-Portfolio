import React, { useEffect } from 'react'
import Projects from '../components/Projects'

function Work() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Projects />
    )
}

export default Work