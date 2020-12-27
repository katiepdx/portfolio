import React from 'react'
import '../App.scss'

export const TechStack = () => {
  return (
    <section className='tech-stack-container'>
      <h1>Tech Stack</h1>

      <section className='tech-stack'>
        <div>
          {/* LANGUAGES */}
          <section>
            <h2>Languages</h2>
            <li>
              <ul>JavaScript</ul>
              <ul>HTML</ul>
              <ul>CSS</ul>
            </li>
          </section>

          {/* TESTING */}
          <section>
            <h2>Testing</h2>
            <li>
              <ul>QUnit</ul>
              <ul>Jest</ul>
              <ul>Supertest</ul>
            </li>
          </section>
        </div>

        {/* FRAMEWORKS/LIBRARIES */}
        <section>
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
        </section>

        <div>
          {/* DATABASE */}
          <section>
            <h2>Database</h2>
            <li>
              <ul>PostgreSQL</ul>
            </li>
          </section>

          {/* TOOLS */}
          <section>
            <h2>Tools</h2>
            <li>
              <ul>Github</ul>
              <ul>Postman</ul>
              <ul>PGAdmin</ul>
              <ul>Heroku</ul>
              <ul>Netlify</ul>
              <ul>VSCode</ul>
            </li>
          </section>
        </div>

      </section>
    </section>
  )
}
