import React, { Component } from 'react'

import "./projects.css";

export default class Yasa extends Component {
    render () {
        return (
            <div>
                <h1>Yasa
                <h3>The Yard Sale Locator</h3></h1>
                <p>Yasa is built utilizing several diffrent technologies. Those most notable are Java, Spring Boot, JWT Authentication, MySQL, React, Mapbox, and Axios. </p><p>The back-end Java build consists of full CRUD operations, including creating new users, logging in, updating user information, creating new posts, editing existing posts, and deleting posts.</p> <p>The front-end is built using React and several additional dependencies, including: Mapbox GL, Moment JS, Material UI, Validator, Yup, JQuery, Formik, Bootstrap, and Axios.  </p> <p>The following videos are walk through demonstrations of the final build, the front-end coding, back-end coding, and an overview of the MySQL database. </p>
                <div className="video-responsive">
                    <h3> Yasa Overview</h3>
                    <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/EVs5IMg_6p0`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
                <div className="video-responsive">
                    <h3>Yasa Front-end</h3>
                    <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/cmNJBUJiMpE`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
                <div className="video-responsive">
                    <h3>Yasa Back-end</h3>
                    <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/bwLo1oGAOJo`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
                <div className="video-responsive">
                    <h3>Yasa Database</h3>
                    <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/6QElQQzlliA`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    />
                </div>
            </div>
        )
    }
}