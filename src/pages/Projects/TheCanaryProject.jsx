import React from 'react'
import '../../App.scss'
import githubIcon from '../../assets/icons/github-icon.png'
import netlifyIcon from '../../assets/icons/netlify-icon.png'
import herokuIcon from '../../assets/icons/heroku-icon.png'

// image gallery slider imports
import ImageGallery from 'react-image-gallery'
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import studentLogin from '../../assets/canary-assets/student-login.png'
import studentCalibrate from '../../assets/canary-assets/student-calibrate-page.png'
import studentAnswerQuestion from '../../assets/canary-assets/student-answer-question.png'
import teacherLogin from '../../assets/canary-assets/teacher-login.png'
import teacherDashboard from '../../assets/canary-assets/teacher-dashboard.png'

export const TheCanaryProject = () => {
  const siteScreenshots = [
    { original: studentLogin, thumbnail: studentLogin },
    { original: studentCalibrate, thumbnail: studentCalibrate },
    { original: teacherLogin, thumbnail: teacherLogin },
    { original: studentAnswerQuestion, thumbnail: studentAnswerQuestion },
    { original: teacherDashboard, thumbnail: teacherDashboard }
  ]

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
            <img src={githubIcon} alt="the canary project github organization link" className='github-icon' />
          </a>

          <a href="https://thecanary.netlify.app/" target="_blank" rel="noreferrer">
            <img src={netlifyIcon} alt="the canary project deployed netlify link" />
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
