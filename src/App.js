import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Footer } from './nav-footer/Footer';
import { Navbar } from './nav-footer/Navbar';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects/Projects';
import { TechStack } from './pages/TechStack';

export default function App() {
  return (
    <div>
      {/* Router */}
      <Router>
        <Navbar />

        <Switch>
          {/* About Page/Top of landing page */}
          <Route
            exact path="/"
            component={About}
          />

          {/* Tech stack */}
          <Route
            exact path="/tech-stack"
            component={TechStack}
          />

          {/* Projects */}
          <Route
            exact path="/projects"
            component={Projects}
          />

          {/* Contact */}
          <Route
            exact path="/contact"
            component={Contact}
          />
        </Switch>

        {/* <Footer /> */}
      </Router>
    </div>
  )
}
