import React from 'react'
import './Projects.scss'
import githubIcon from '../../assets/github-icon.png'
import netlifyIcon from '../../assets/netlify-icon.png'
import herokuIcon from '../../assets/heroku-icon.png'

export const CumulusProject = () => {
  return (
    <section>
      <div>
        <h2>Cumulus Weather App - Sept 2020</h2>
        <h3>
          React | CSS | localStorage | Heroku | Netlify | PostgreSQL | WeatherBit API
        </h3>
        <p>
          Cumulus is a full-stack desktop and mobile-friendly weather app built for travel enthusiasts and people on the go. Users can search for a location anywhere in the world and save weather tiles to their favorites.
        </p>
        <div className='project-link-icons'>
          <a href="https://github.com/CumulusWeatherApp" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="cumulus weather app github organization link" className='github-icon'/>
          </a>

          <a href="https://cumuli.netlify.app/" target="_blank" rel="noreferrer">
            <img src={netlifyIcon} alt="cumulus weather app deployed netlify link" />
          </a>

          <a href="https://nameless-ridge-72993.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={herokuIcon} alt="cumulus weather app deployed heroku link" />
          </a>
        </div>
      </div>
      <div>
        Project photo/video
      </div>
    </section>
  )
}