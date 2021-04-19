import React, { Component } from "react";

export default class About extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-about" data-section="about">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-12">
								<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
									<div className="col-md-12">
										<div className="about-desc">
											<span className="heading-meta"></span>
											<h2 className="colorlib-heading">Who Am I?</h2>
											<p>
												An influential, creative, engaging, full stack developer with a passion
												for front-end development. Specializing in customer satisfaction through
												communication, teamwork, and maintaining a commitment to exceed
												expectations. Actively pursuing a permanent opportunity to provide
												programming skills and leadership abilities to a fast-paced, progressive
												environment as a full stack developer.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="colorlib-about">
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
										<h3>Languages </h3>
										<p>React || JavaScript || ES6 || jQuery || NoSQL || HTML5 || CSS3 || JAVA</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-3">
									<span className="icon">
										<i className="icon-phone3" />
									</span>
									<div className="desc">
										<h3>Databases</h3>
										<p>
											Postman || MySQL || MongooseDB
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-3">
									<span className="icon">
										<i className="icon-phone3" />
									</span>
									<div className="desc">
										<h3>Hard Skills</h3>
										<p>
										Project Management || Inventory Management || Financial Forecasting || Automotive Collision And Service Parts
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
                    {/* <div className="colorlib-narrow-content">
						<div className="row">
							<div
								className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
								data-animate-effect="fadeInLeft"
							>
								<span className="heading-meta">Skills</span>
								<h2 className="colorlib-heading">Proffesional Skills</h2>
							</div>
						</div>
						<div className="row row-pt-md">
							<div className="col-md-4 text-center animate-box">
								<div className="services color-1">
									<span className="icon">
										<i className="icon-bulb" />
									</span>
									<div className="desc">
										<h3>Software Familiarity</h3>
										<p>Git || Microsoft Visual Studio Code || IntelliJ IDEA || MySQL Workbench || Eclipse IDE || Spring Tool Suite || Postman || Trello || Adobe Photoshop || Sony Vegas || CDK || ADP</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-3">
									<span className="icon">
										<i className="icon-phone3" />
									</span>
									<div className="desc">
										<h3>Industrial</h3>
										<p>
                                            Automotive Collision and Service Parts || Inventory Management || Financial Reporting || Forecasting and Projecting 
										</p>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</section>
			</div>
		);
	}
}
