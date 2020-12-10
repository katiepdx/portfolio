import React from 'react'
import './Projects.scss'
import githubIcon from '../../assets/icons/github-icon.png'
import herokuIcon from '../../assets/icons/heroku-icon.png'

export const AlchemyNetworkrProject = () => {
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
      <div>
        Project photo/video
      </div>
    </section>
  )
}
