import React from 'react'
import '../App.scss'
import FadeIn from 'react-fade-in'

export const About = () => {
  return (
    <section className='about-container'>
      <FadeIn>
        <h1> &#123; Katie &#125; </h1>
      </FadeIn>
      <FadeIn delay={200}>
        <section>
          I am a <span className='bold'>full stack software developer</span> with experience managing teams in a <span className='bold'>bilingual</span> environment, developing curriculum for an overseas international school, and ESL <span className='bold'>teaching</span>. Passionate about <span className='bold'>software creation</span> and UI/UX design. I thrive in creative, fast-paced environments that involve collaboration and <span className='bold'>constant learning</span>!
        </section>
      </FadeIn>
    </section>
  )
}
