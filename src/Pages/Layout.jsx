import React, { useContext } from 'react'
import { myContext } from '../context'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Contact from '../components/Contact'

function Layout() {
    const { refs, onNavigate } = useContext(myContext)
    return (
        <div className="sm:mx-16 mx-4 relative">
            
            <Header handleNavigate={onNavigate} />
            <Outlet />
            <div ref={refs.contact}>
                <Contact />
            </div>
        </div>
    )
}

export default Layout