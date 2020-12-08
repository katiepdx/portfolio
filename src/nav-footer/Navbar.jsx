import React from 'react'
import { Link } from 'react-router-dom'
import './NavFooter.scss'

export const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">About</Link>

        <Link to="/tech-stack">Tech Stack</Link>

        <Link to="/projects">Projects</Link>

        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}
