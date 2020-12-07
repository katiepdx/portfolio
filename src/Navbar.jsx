import React from 'react'
import { Link } from 'react-router-dom'
import'./Navbar.scss'

const Navbar = () => {
  return (
    <div>
      <nav>
        <li><Link to="/">About</Link></li>
        <div>|</div>

        <li><Link to="/tech-stack">Tech Stack</Link></li>
        <div>|</div>

        <li><Link to="/projects">Projects</Link></li>
        <div>|</div>

        <li><Link to="/contact">Contact</Link></li>
      </nav>
    </div>
  )
}

export default Navbar
