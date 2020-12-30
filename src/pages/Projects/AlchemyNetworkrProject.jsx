import React from 'react'
import '../../App.scss'
import githubIcon from '../../assets/icons/github-icon.png'
import herokuIcon from '../../assets/icons/heroku-icon.png'

// image gallery slider imports
import ImageGallery from 'react-image-gallery'
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import dashboard from '../../assets/networkr-assets/dashboard.png'
import projects from '../../assets/networkr-assets/projects.png'
import portfolios from '../../assets/networkr-assets/portfolios.png'
import filter from '../../assets/networkr-assets/filter.png'
import detailComments from '../../assets/networkr-assets/detail-comments.png'

export const AlchemyNetworkrProject = () => {
  const siteScreenshots = [
    { original: dashboard, thumbnail: dashboard },
    { original: projects, thumbnail: projects },
    { original: portfolios, thumbnail: portfolios },
    { original: filter, thumbnail: filter },
    { original: detailComments, thumbnail: detailComments }
  ]

  return (
    <section>
      <div>
        <h2>Alchemy Networkr - Oct 2020</h2>
        <h3>
          Node | Express | PostgreSQL | Heroku | PugJS | ChanceJS | Jest
        </h3>
        <p>
          Alchemy Networkr is a secure platform for Alchemy students and alum to search for past projects using a variety of methods (e.g., findAll, findById), upload a project to share, and find project collaborators using the app's commenting functionality.
        </p>
        <div className='project-link-icons'>
          <a href="https://github.com/Alchemy-Networkr" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="alchemy networkr github organization link" className='github-icon' />
          </a>

          <a href="https://networkr-be.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={herokuIcon} alt="alchemy networkr deployed heroku link" />
          </a>
        </div>
      </div>
      <div className='image-gallery-slider'>
        <ImageGallery items={siteScreenshots} />
      </div>
    </section>
  )
}
