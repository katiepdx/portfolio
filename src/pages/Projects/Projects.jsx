import React from 'react'
import { AcademicAdvProject } from './AcademicAdvProject'
import { AlchemyNetworkrProject } from './AlchemyNetworkrProject'
import { CumulusProject } from './CumulusProject'
import { TheCanaryProject } from './TheCanaryProject'
import '../../App.scss'
import FadeIn from 'react-fade-in'

export const Projects = () => {
  return (
    <div className='projects-container'>
      <h1>Projects</h1>

      <div className='all-projects'>
        <FadeIn>
          <TheCanaryProject />
          <AlchemyNetworkrProject />
          <CumulusProject />
          <AcademicAdvProject />
        </FadeIn>
      </div>
    </div>
  )
}
