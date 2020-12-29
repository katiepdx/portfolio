import React from 'react'
import emailjs from 'emailjs-com'
import '../App.scss'
import linkedInIcon from '../assets/icons/linkedin-icon.png'
import githubIcon from '../assets/icons/github-icon.png'
import emailIcon from '../assets/icons/email-icon.png'


export const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('click')

    const successEvent = (result) => {
      console.log('Success', result.text)
    }

    const errorEvent = (error) => {
      console.log('Error', error.text)
    }

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      e.target,
      process.env.REACT_APP_USER_ID)
      .then((successEvent), (errorEvent))

    e.target.reset()
  }
  return (
    <div className='contact-container'>
      <h1>Let's Connect!</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" placeholder="John Smith" name="from_name" required />
        </label>

        <label htmlFor="email">
          Email:
          <input type="text" id="email" placeholder="john@email.com" name="from_email" required />
        </label>

        <label htmlFor="subject">
          Subject:
          <input type="text" id="subject" placeholder="Subject" name="subject" required />
        </label>

        <label htmlFor="message">
          Message:
          <textarea type="text" id="message" placeholder="Message..." name="message" required />
        </label>

        <button>Send</button>
      </form>

      <div className='contact-icons'>
        <a href="https://github.com/katiepdx" target="_blank" rel="noreferrer" >
          <img src={githubIcon} alt="black and white github icon" className="github-icon" />
        </a>
        <a href="https://www.linkedin.com/in/katiepdx/" target="_blank" rel="noreferrer" >
          <img src={linkedInIcon} alt="black and white linkedin icon" className="linkedin-icon" />
        </a>
        <a href="mailto:katieperry.dev@gmail.com">
          <img src={emailIcon} alt=" black and white envelope icon" className='email-icon' />
        </a>
      </div>
    </div>
  )
}
