import { createContext, useRef } from "react";

export const myContext = createContext('light');

export function GlobalState({ children }) {
    const refs = {
        home: useRef(null),
        about: useRef(null),
        projects: useRef(null),
        skills: useRef(null),
        contact: useRef(null)
    }

    const onNavigate = (section) => {
        refs[section].current?.scrollIntoView({ behavior: 'smooth' })
    }
    return <myContext.Provider value={{ refs, onNavigate }}>{children}</myContext.Provider>
}