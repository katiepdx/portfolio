import React from 'react'
import { AcademicAdvProject } from './AcademicAdvProject'
import { AlchemyNetworkrProject } from './AlchemyNetworkrProject'
import { CumulusProject } from './CumulusProject'
import './Projects.scss'
import { TheCanaryProject } from './TheCanaryProject'

export const Projects = () => {
  return (
    <div className='projects-container'>
      <h1>Projects</h1>

      <div className='all-projects'>
        <TheCanaryProject />
        <AlchemyNetworkrProject />
        <CumulusProject />
        <AcademicAdvProject />
      </div>
    </div>
  )
}
