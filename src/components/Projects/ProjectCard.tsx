import { FC } from 'react'

import { ExternalLink } from '@@components/ExternalLink'
import type { Project } from './projectData'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => (
  <ExternalLink href={project.url} className="group">
    <div className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-gray-900/60 backdrop-blur-sm transition-all duration-300 hover:border-green-fbit/50 hover:bg-gray-900/80 md:flex-row">
      <div className="relative h-48 w-full flex-shrink-0 overflow-hidden md:h-auto md:w-64 lg:w-80">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {project.badge && (
          <span className="absolute top-3 right-3 rounded-full bg-fbit px-3 py-1 text-xs font-bold text-white">
            {project.badge}
          </span>
        )}
      </div>
      <div className="flex flex-col justify-center p-6">
        <h3 className="mb-2 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-green-fbit md:text-3xl">
          {project.title}
        </h3>
        <p className="mb-4 text-base text-white/80 md:text-lg">
          {project.description}
        </p>
        <span className="text-sm font-bold text-green-fbit">
          &rarr; {project.url.replace('https://', '')}
        </span>
      </div>
    </div>
  </ExternalLink>
)
