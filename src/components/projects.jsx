import React, { Component } from 'react'
import AllProjects from './projects/allProjects'
import { projectData } from './projects/projectData'

export default class Projects extends Component {
  render() {
    return (
							<div id="projectDiv">
								<section className="colorlib-experience" data-section="projects">
									<div className="colorlib-narrow-content">
										<div className="row">
											<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
												<h2 className="colorlib-heading animate-box">Projects</h2>
											</div>
										</div>
									</div>
									<AllProjects projects={projectData} />
								</section>
							</div>
    )
  }
}


