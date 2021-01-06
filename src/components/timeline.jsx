import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Professional Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Parts Director-Wholesale Parts Lead-Driver<span>2008-2020</span><br/>
                        AutoNation BMW of Roseville-Honda of Roseville	<span>Roseville, CA</span></h2>
                        <li>Continual profit increase monthly of 5% minimum</li>
                        <li> Monthly financial reconciliation within 1% variance </li>
                        <li>Exceed corporate yearly 10% gross profit increase requirement</li>
                        <li>Reduce customer vehicle downtime by 50%</li>
                        <li>Retail growth of over 200%</li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Assistant Manager-Production Specialist<span>2003-2008</span> <br/>
                        Krispy Kreme Doughnuts	<span>Roseville, CA - Citrus Heights, CA</span></h2>
                        <li>Streamline workflow scheduling achieving 20%-hour reduction</li>
                        <li> Financial verification of 100% nightly </li>
                        <li>Cross train employees enabling productive work hours</li>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading animate-box">Volunteer Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Director -2012-2016<br/>
                        The Open Door of Revelation 3:20</h2>
                        <li>Non-profit organization focused on providing general needs and hygiene products to the less fortunate</li>
                        <li>Organize community events, fundraisers, and community concerts </li>
                        <li>Manage audio and lighting equipment- music and sound engineer</li>
                        <li>Program lighting shows- DMX software</li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Non-Profit Organizations-2008-Current</h2>
                        <li>Provide sound and lighting expertise</li>
                        <li>Manage stage coordination and design</li>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
