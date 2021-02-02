import React from 'react'
import '../App.scss'
import FadeIn from 'react-fade-in'

export const TechStack = () => {
  return (
    <section className='tech-stack-container'>
      <h1>Tech Stack</h1>

      <section className='tech-stack'>
        <section>
          {/* LANGUAGES */}
          <section>
            <FadeIn>
              <h2>Languages</h2>
              <li>
                <ul>JavaScript</ul>
                <ul>HTML</ul>
                <ul>CSS</ul>
              </li>
            </FadeIn>
          </section>

          {/* TESTING */}
          <section>
            <FadeIn>
              <h2>Testing</h2>
              <li>
                <ul>QUnit</ul>
                <ul>Jest</ul>
                <ul>Supertest</ul>
              </li>
            </FadeIn>
          </section>
        </section>

        {/* FRAMEWORKS/LIBRARIES */}
        <section>
          <FadeIn>
            <h2>Frameworks/<br></br>Libraries</h2>
            <li>
              <ul>React</ul>
              <ul>Redux</ul>
              <ul>Node</ul>
              <ul>Express</ul>
              <ul>PugJS</ul>
              <ul>SCSS</ul>
              <ul>socket.io</ul>
            </li>
          </FadeIn>
        </section>

        <section>
          {/* DATABASE */}
          <section>
            <FadeIn>
              <h2>Database</h2>
              <li>
                <ul>PostgreSQL</ul>
              </li>
            </FadeIn>
          </section>

          {/* DEV TOOLS */}
          <section>
            <FadeIn>
              <h2>Dev Tools</h2>
              <li>
                <ul>Github</ul>
                <ul>Postman</ul>
                <ul>PGAdmin</ul>
                <ul>Heroku</ul>
                <ul>Netlify</ul>
                <ul>VSCode</ul>
              </li>
            </FadeIn>
          </section>
        </section>
      </section>
    </section>
  )
}
