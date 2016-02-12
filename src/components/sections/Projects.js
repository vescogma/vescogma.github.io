import React from 'react';
import Card from '../ui/Card';

const Projects = ({ toggleProject }) => {
  const projects = [
    { label: 'Mandelbrot Final Project', icon: 'mandelbrot' },
    { label: 'Miniature Car Body Design', icon: 'carbody' },
    { label: 'Real-Time Motor Control', icon: 'default' },
    { label: 'Automated Pill Dispenser', icon: 'default' },
    { label: 'Embedded Pacemaker & Monitor', icon: 'default' },
    { label: 'Skylight Reflector Heliostat', icon: 'default' },
  ];
  return (
    <Card
      title="Projects"
      colorClass="projects-title">
      {
        projects.map((p, i) => {
          return (
            <div key={ i } className="flex-auto">
              <div
                className="project"
                onClick={ () => toggleProject(i + 1) }>
                <div className="project-image"></div>
                <div className="project-title">
                  <div className={ `project-icon icon-${ p.icon }` }></div>
                  { p.label }
                </div>
              </div>
            </div>
          );
        })
      }
    </Card>
  )
}

export default Projects;