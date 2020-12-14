import React from 'react'
import './Projects.scss'
import githubIcon from '../../assets/icons/github-icon.png'
import netlifyIcon from '../../assets/icons/netlify-icon.png'
import herokuIcon from '../../assets/icons/heroku-icon.png'

// image gallery slider imports
import ImageGallery from 'react-image-gallery'
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import placeholder from '../../assets/placeholder.png'


export const CumulusProject = () => {
  const siteScreenshots = [
    { original: placeholder, thumbnail: placeholder },
    { original: placeholder, thumbnail: placeholder },
    { original: placeholder, thumbnail: placeholder },
    { original: placeholder, thumbnail: placeholder },
    { original: placeholder, thumbnail: placeholder }
  ]

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
            <img src={githubIcon} alt="cumulus weather app github organization link" className='github-icon' />
          </a>

          <a href="https://cumuli.netlify.app/" target="_blank" rel="noreferrer">
            <img src={netlifyIcon} alt="cumulus weather app deployed netlify link" />
          </a>

          <a href="https://nameless-ridge-72993.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={herokuIcon} alt="cumulus weather app deployed heroku link" />
          </a>
        </div>
      </div>
      <div className='image-gallery-slider'>
        <ImageGallery items={siteScreenshots} />
      </div>
    </section>
  )
}
