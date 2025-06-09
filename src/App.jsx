import { useRef, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from './components/About'
import { useEffect } from "react"
import Projects from "./components/Projects"
import TechStack from "./components/TechStack"
import Contact from "./components/Contact"
import { easeIn, motion } from "framer-motion"
import { Routes, Route } from "react-router"
import LandingPage from "./Pages/LandingPage"
import Layout from "./Pages/Layout"
import Work from "./Pages/Work"
function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/work" index element={<Work />}/> 
      </Route>

    </Routes>
  )
}

export default App
