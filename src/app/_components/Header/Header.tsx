'use client'
import { useState } from "react"
import Navbar from "../Navbar/Navbar"

const Header = () => {
  const [open, setOpen] = useState(false)
  const [opacity, setOpacity] = useState(0)

  const handleNavbar = () => {

    if (open === false) {
      
      setOpen(true)      
      setTimeout(() => {
        setOpacity(1)
      }, 1)
    } else {
      setOpacity(0)
      setTimeout(() => {
        setOpen(false)
      }, 500)
    }
    
  }


  return (
    <header>
      <h1>PICANTE SERIGRAFÍA</h1>
      <button onClick={handleNavbar} >Menu</button>
      {open && <Navbar opacity={opacity} foo={handleNavbar}/>}
      {open && <button className="closeBtn" onClick={handleNavbar} style={{opacity: opacity, transition:"all 0.5s ease-in-out"}}>X</button>}
    </header>
  )
}

export default Header