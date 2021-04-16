import React, { Component } from "react";
import "./projects.css";

export default class AllProjects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reactEtch: false,
            portfolioSite: false,
            yasa: false,
		};
		this.toggleShow = this.toggleShow.bind(this);
	}

    toggleShow(evt) {
        console.log(evt.target.id)
        let b = this.state[evt.target.id]
        console.log(b);
        this.setState({[evt.target.id]: !b})
        console.log(this.state)
      }

	render() {
		return (
			<div id="projects">
				{this.props.projects.map((item) => (
                    
					<div className="col-md-4" data-animate-effect="fadeInRight">
                        <div style={{display: this.state[item.id] === true ? 'block' : 'none'}} class="popup">
                            <button type="close" class="close" id={item.id} onClick={e => this.toggleShow(e)}>X</button>
                            <div id="functionContents">
                                <item.func class="function" />
                            </div>
                        </div>
						<div className="project" id={item.id} style={{ backgroundImage: `url(${item.imgURL})` }} alt={item.title} >
							<div className="desc">
								<div className="con">
									<h4 id={item.id}>
										<b id={item.id}>{item.title}</b>
									</h4>
									<h3><p id={item.id}>{item.description}</p></h3>
                                    <p id={item.id}>Technologies: {item.technologies}</p>
                                    <a href={item.githubRepo} target='_blank' > <h3>{item.github}</h3></a>
                                    <a href={item.githubRepo2} target='_blank' > <h3>{item.github2}</h3></a>
                                    {/* <a href="#etchaSketch" data-nav-section={item.navTo}><h3>{item.title}</h3></a> */}
                                    <button onClick={(e) => this.toggleShow(e)} id={item.id}>Explore {item.title}</button> 
						        </div>
							</div>
						</div>
                        
                        
					</div>
				))}
			</div>
		);
	}
}
