'use client'

import { FC } from 'react'

import { SectionProps } from '.'
import { ProjectCard } from '../Projects/ProjectCard'
import { projects } from '../Projects/projectData'
import { VerticalGridLines } from '../VerticalGridLines'

const Projects: FC<SectionProps> = () => (
  <section
    data-anchor="projects"
    className="section bg-no-repeat bg-cover bg-center section-projects"
  >
    <VerticalGridLines />
    <div className="grid grid-cols-24 relative z-10">
      <div className="hidden md:block col-span-7" />
      <div className="col-span-24 px-4 md:col-span-15 lg:col-span-12 md:px-0 md:pl-2">
        <h2 className="text-green-fbit text-4xl md:text-5xl lg:text-6xl mb-2 font-bold">
          Einfach machen.
        </h2>
        <p className="text-white text-lg md:text-2xl mb-6">
          Gute Software entsteht nicht am Reißbrett. Diese Produkte sind live,
          werden genutzt und lösen echte Probleme.
        </p>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  </section>
)
export default Projects
