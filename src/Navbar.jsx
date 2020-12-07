import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <li><Link to="/">About</Link></li>
        <li><Link to="/tech-stack">Tech Stack</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </nav>
    </div>
  )
}



export default Navbar
