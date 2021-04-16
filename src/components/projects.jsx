import React, { Component } from 'react'
import AllProjects from './projects/allProjects'
import { projectData } from './projects/projectData'

export default class Projects extends Component {
  render() {
    return (
							<div id="projectDiv">
								<section className="colorlib-experience" data-section="projects">
									<AllProjects projects={projectData} />
								</section>
							</div>
    )
  }
}


