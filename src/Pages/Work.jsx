import React, { useContext } from 'react'
import Projects from '../components/Projects'
import { myContext } from '../context'


function Work() {
    const { refs } = useContext(myContext)
    return (
        <div ref={refs.projects}>
            <Projects />
        </div>
    )
}

export default Work