import { useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import MiniHeader from "./components/MiniHeader"
import { useEffect } from "react"

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [width])
  console.log(width)
  return (
    <div className="flex items-center flex-col ">
      {width > 600 ? <Header /> : <MiniHeader />}

      <Hero />
    </div>
  )
}

export default App
