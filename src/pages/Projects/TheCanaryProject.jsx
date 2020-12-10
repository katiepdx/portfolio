import React from 'react'
import './Projects.scss'
import githubIcon from '../../assets/github-icon.png'
import netlifyIcon from '../../assets/netlify-icon.png'
import herokuIcon from '../../assets/heroku-icon.png'

export const TheCanaryProject = () => {
  return (
    <section>
      <div>
        <h2>The Canary - Nov 2020</h2>
        <h3>
          React | Redux | SCSS | TensorFlow | Socket.io | Node | Express | PostgreSQL
        </h3>
        <p>
          Canary is a learning platform that engages students in the learning process through movement. Teachers on the platform can pose questions to the classroom and students can select their answers through hand gestures, which are trained through TensorFlow. Prompts, answers, and chat messages are transferred between clients using Socket.io.
        </p>
        <div className='project-link-icons'>
          <a href="https://github.com/The-Canary-Project" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="the canary project github organization link" className='github-icon'/>
          </a>

          <a href="https://thecanary.netlify.app/" target="_blank" rel="noreferrer">
            <img src={netlifyIcon} alt="the canary project deployed netlify link" />
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
