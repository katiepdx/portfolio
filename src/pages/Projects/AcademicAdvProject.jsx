import React from 'react'
import './Projects.scss'
import githubIcon from '../../assets/github-icon.png'
import linkIcon from '../../assets/link-icon.png'

export const AcademicAdvProject = () => {
  return (
    <section>
      <div>
        <h2>Academic Adventurer - July 2020</h2>
        <h3>
          VanillaJS | HTML5 | CSS3 | localStorage | GitHub
        </h3>
        <p>
          This JavaScript app aims to teach young students the English language alphabet in a fun and engaging way! Learners will pick their pack and embark on an academic adventure. To complete a challenge, they will need to find a match for the prompted letter that will be added to their learning journal. Once all challenges have been completed, the user will be able to print a certificate of completion.
        </p>
        <div className='project-link-icons'>
          <a href="https://github.com/Academic-Adventurer" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="academic adventurer github organization link" className='github-icon' />
          </a>

          <a href="https://github.com/Academic-Adventurer/academic-adventurer" target="_blank" rel="noreferrer">
            <img src={linkIcon} alt="academic adventurer deployed link" />
          </a>
        </div>
      </div>
      <div>
        Project photo/video
      </div>
    </section>
  )
}
