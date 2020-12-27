import React from 'react'
import '../../App.scss'
import githubIcon from '../../assets/icons/github-icon.png'
import linkIcon from '../../assets/icons/link-icon.png'

// image gallery slider imports
import ImageGallery from 'react-image-gallery'
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import welcome from '../../assets/academic-adventurer-assets/welcome.png'
import pickPack from '../../assets/academic-adventurer-assets/pick-pack.png'
import adventures from '../../assets/academic-adventurer-assets/adventures.png'
import activity from '../../assets/academic-adventurer-assets/activity.png'
import certificate from '../../assets/academic-adventurer-assets/certificate.png'

export const AcademicAdvProject = () => {
  const siteScreenshots = [
    { original: welcome, thumbnail: welcome },
    { original: pickPack, thumbnail: pickPack },
    { original: adventures, thumbnail: adventures },
    { original: activity, thumbnail: activity },
    { original: certificate, thumbnail: certificate }
  ]

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
      <div className='image-gallery-slider'>
        <ImageGallery
          items={siteScreenshots}
        />
      </div>
    </section>
  )
}
