import React, { Component } from "react";

export default class Skills extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-about" data-section="skills">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div
								className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<span className="heading-meta"></span>
								<h2 className="colorlib-heading">Skills</h2>
							</div>
						</div>
						<div className="row row-pt-md">
							<div className="col-md-4 text-center animate-box">
								<div className="services color-1">
									<span className="icon">
										<i className="icon-bulb" />
									</span>
									<div className="desc">
										<h3>Linux Proficient Languages </h3>
										<p>RSpec || Watir || Ruby || Ruby on rails || Vue.js || TypeScript || Selenium </p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-2">
									<span className="icon">
										<i className="icon-bulb" />
									</span>
									<div className="desc">
										<h3>Familiar Languages</h3>
										<p>React || Redux || JavaScript || HTML || CSS || JAVA || SQL || NoSQL || Node.js || Spring Boot || jQuery || JSON || Object-Oriented Programming </p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-3">
									<span className="icon">
										<i className="icon-bulb" />
									</span>
									<div className="desc">
										<h3>Databases</h3>
										<p> Postman || MySQL || MongoDB || AWS || Azure || Postgres
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="row row-pt-md">
							<div className="col-md-4 text-center animate-box">
								<div className="services color-4">
									<span className="icon">
										<i className="icon-bulb" />
									</span>
									<div className="desc">
										<h3>Proficient Programs</h3>
										<p> PhishMe || GIT || Microsoft Word /Excel Outlook / PowerPoint / Exchange Server || IE || Chrome || Firefox || BrowserStack || OS X Command Line || PostMan
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-5">
									<span className="icon">
										<i className="icon-bulb" />
									</span>
									<div className="desc">
										<h3>Hard Skills</h3>
										<p>Quality Assurance in Software Development || Project Management || Inventory Management || Financial Forecasting || Automotive Collision/Service Parts  
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-6">
									<span className="icon">
										<i className="icon-bulb" />
									</span>
									<div className="desc">
										<h3>Soft Skills</h3>
										<p>Communication || Time Management || Reliability || Performance Optimization || Detail Oriented || Desire to learn || Leadership
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
