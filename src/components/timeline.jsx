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
                        <li>Monthly financial reconciliation within 1% variance.</li>
                        <li>Exceed corporate required 10% gross increase year over year. </li>
                        <li>Reduce customer vehicle downtime by 3 days on average.</li>
                        <li>Retail gross increase of $150,000 yearly.</li>
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
                        <li>Streamline workflow scheduling to achieve weekly 20-hour reduction.</li>
                        <li>Financial verification nightly with 100% accuracy.</li>
                        <li>Cross train employees increasing shift production by 30%.</li>
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
                <h2 className="colorlib-heading animate-box">Non-Profit/Volunteer Experience</h2>
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
                        <li>Non-profit organization concentrated on providing general needs and hygiene products to the less fortunate, focusing on providing emotional support 50% of the time and physical support 50% of the time.</li>
                        <li>Organize community events, fundraisers, and concerts to raise 100% of operational funds.</li>
                        <li>Manage audio and lighting equipment ensuring full functionality and increasing dependability by 100%.</li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Provide sound and lighting expertise 4-5 weekends a month.</h2>
                        <li>Manage stage coordination 50% and design concept 15%.</li>
                        <li>Troubleshoot and repair issues that occur with equipment decreasing downtime by 60%.</li>
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
