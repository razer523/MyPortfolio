import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Raymond Albright IV</a></h1>
              <span className="email"><i className="icon-mail"></i> <a href= "mailto: albrightriv@gmail.com">AlbrightRIV@Gmail.com </a> </span>
            </div>
            <br/>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <br/>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com/raymond.w.albright" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a>  <span>    </span>
                <a href="https://www.linkedin.com/in/raymond-albright-iv/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>  <span>    </span>
                <a href="https://github.com/razer523" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <br/>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-music2" aria-hidden="true" /> and <i className="icon-coffee" aria-hidden="true"></i><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> and Dhruv Barochiya for inspiration 
              </small></p>
              <p><small>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
