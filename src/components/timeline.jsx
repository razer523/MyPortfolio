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
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer Engineer in Test II<span>2022-2024</span><br/>
                        Cofense Inc.	<span>Remote</span></h2>
                        <li> Designed, owned and maintained API and UI test suites with over 11,000 specs, complete end-to-end automation test suites utilizing RSpec, Capybara, and Watir for Ruby web application coverage. </li>
	                      <li> Established, monitored, and maintained Gitlab CI/CD and Jenkins Pipelines with 24-hour monitoring of test environments and code changes at each stage of the SDLC alongside the infrastructure team. </li>
	                      <li> Maintained Cucumber and Selenium Test Suites in Ruby web application to continually support continuous integration and twice weekly production deployment. </li>
	                      <li> Tests built focusing on expanding complex user interactions to ensure security compliance and stability for thousands of clients over 7 production environments. </li>
	                      <li> Exported Amazon Aurora Database and Ruby on Rails database into reports, applying custom formatting to achieve 100% accuracy of data validation. </li>
                        <li> Paired with product owners, engineers, and customer support to develop test cases, ensuring testing infrastructure supports developing requirements and ongoing coverage for excellence. </li>
                        <li> Cross Agile-teams support; MR code reviews, pairing and mentoring sessions adhering to company policy. </li>
                        <li> Manual quality assurance testing of all merge-requests, new features, security updates, and bug fixes with Jira documentation, increasing developer productivity time by 65%. </li>
                        <li> Nightly regression testing for application stability and performance and load testing in various environments. </li>
                        <li> Replicated client bugs and documented reproduction steps decreasing time to resolution to under 6 hours. </li>
                        <li> Maintain software dependencies and lead efforts to improve QA tools and infrastructure increasing accuracy and usability by 400%. </li>
                        <li> Effectively covered complex application features in automation suites and manual testing strategies increasing coverage by 250%. </li>
                        <li> TestRail case plan creation verifying 100% coverage for application’s automation tests and regression testing. </li>
                        <li> Jira utilization for ticket tracking, documentation and prioritizing automation work by reducing backlog by 70%. </li>
                        <li> Documented daily activities for daily standup reporting to Agile/Scrum team to comply with SDLC standards. </li>
                        <li> Participated in backlog refinement ensuring full understanding of upcoming work and acceptance requirements. </li>
                        <li> Provision, implemented, and maintained Jenkins and Docker virtual machines for testing. </li>
                        <li> Coordinated with leadership to create and enforce department policies and procedures. </li>
                        <li> Maintained subject matter knowledge of development tools/principles to sustain advanced test automation and adhere to best practices. </li>
                      </div>
                    </div>
                  </article>
                  {/* <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Associate Government Program Analyst (AGPA)<span>2023-2024</span><br/>
                        California Department of Health Care Services, Drug Rebate Branch	<span>Remote</span></h2>
                        <li>	Planned and conducted large drug rebate disputes, developed recommendations and implemented solutions to disputes up to $1,000,000. </li>
                        <li>	Retrieved financial drug claims from databases, utilized excel for analysis and built custom VBA scripts increasing productivity by 250%. </li>
                        <li>	Developed and employed research techniques to identify aberrant claims data saving $1,000’s per error discovered. </li>
                        <li>	Verification of aberrant data utilizing analytical tools, researching, consulting with a staff pharmacist, and contacting providers. </li>
                        <li>	Proposal preparation and validation process sharing data and analyses with counterpart at the manufacturer, coordinating dispute resolution sessions with manufacturers' representatives. </li>
                        <li>	Prepared a final written resolution proposal and recommendation for management review and approval. </li>
                        <li>	Analyzed and evaluated policy regarding State and Federal drug rebate program requirements; developed, recommended, and facilitated solutions to resolve issues. </li>
                        <li>	Monitored drug rebate outstanding balances for assigned labelers. </li>
                        <li>	Performed quality control of invoices before they were sent to manufacturers. </li>
                        <li>	Tracks submission of AMP data and coordinated with PPCS on issues related to supplemental contracts. </li>
                        <li>	Developed manufacturers' rebate payment history reports, which were used in rebate contract negotiations by the pharmacists. </li>
                        <li>	Reviewed the historical drug rebate files to ensure all invoices, payments, and correspondence were present. </li>
                        <li>	Conducted or coordinated follow-up activities to obtain missing documentation needed by the fiscal intermediary, the invoicing and posting contractor, to reconcile invoices with manufacturers' payments. </li>
                        <li>	Developed and analyzed various data and prepared reports, briefing papers, executive management responses and evaluation of the Rebate Unit operation. </li>
                        <li>	Administered one or more of the less complex specified functions related to the drug rebate program operation, including program representation to other organizations within and outside of the Department. </li>
                      </div>
                    </div>
                  </article> */}
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Quality Assurance Engineer/Software Developer Engineer in Test<span>2021-2022</span><br/>
                        Terrene Web Solutions	<span>Remote </span></h2>
                        <li>	Owned and maintained API and UI test suites with over 3,000 specs, complete end-to-end automation test suites utilizing RSpec, Capybara, and Watir for Ruby web application coverage. </li>
                        <li>	Export Amazon Aurora Database and Ruby on Rails database into reports, applying custom formatting to achieve 100% accuracy of data validation. </li>
                        <li>	Paired with product owners, engineers, and customer support to develop test cases, ensuring testing infrastructure supports developing requirements and ongoing coverage for excellence. </li>
                        <li>	Cross Agile-teams support; MR code reviews, pairing and mentoring sessions adhering to company policy. </li>
                        <li>	Manual quality assurance testing of all merge-requests, new features, security updates, and bug fixes with Jira documentation, increasing developer productivity time by 65%. </li>
                        <li>	Weekly production deployment testing ensuring code integrity and stability for production release. </li>
                        <li>	Replicated client bugs and document reproduction steps decreasing time to resolution to under 6 hours. </li>
                        <li>	Maintained software dependencies and led efforts to improve QA tools and infrastructure increasing accuracy and usability by 400%. </li>
                        <li>	Effectively covered complex application features in automation suites and manual testing strategies increasing coverage by 250%. </li>
                        <li>	TestRail case plan creation verifying 100% coverage for application’s automation tests and regression testing. </li>
                        <li>	Jira utilization for ticket tracking, documentation and prioritizing automation work by reducing backlog by 70%. </li>
                        <li>	Documented daily activities for daily standup reporting to Agile/Scrum team to comply with SDLC standards. </li>
                        <li>	Participated in backlog refinement ensuring full understanding of upcoming work and acceptance requirements. </li>
                        <li>	Coordinated with leadership to create and enforce department policies and procedures. </li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Parts Director-Wholesale Parts Lead-Driver<span>2008-2020</span><br/>
                        AutoNation BMW of Roseville-Honda of Roseville	<span>Roseville, CA</span></h2>
                        <li>Develop VBA automation scripts to increase report accuracy and expedite daily tasks. </li>
                        <li>Manually validate stocking structure and reports to track issues and develop solutions to complex problems. </li>
                        <li>Maintained daily trend reporting and optimized monthly report structure by building custom Excel reports. </li>
                        <li>Retail gross increase of $150,000 yearly. </li>
                        <li>Monthly exceeded 10% gross increase year over year. </li>
                        <li>Pioneered new stocking structure and database increasing immediate product availability, reducing customer vehicle downtime by 3 days on average and saving an average of $100 a day per loaner vehicle. </li>
                        <li>Head dealership project manager coordinating monthly regular maintenance and emergency situations, including IT support and construction projects, reducing expenses by 70%. </li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
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
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Release Branch Test Engineer <span> 2015-Current</span><br/>
                        Microsoft Windows Insider</h2>
                        <li> Perform consumer side testing of upcoming deployment branches for Microsoft Windows. </li>
                        <li> Credited for discovering and documenting 7 release preventing issues specific to hardware configuration and user interaction. </li>
                        <li> Actively validate bug fixes based on provided release notes and provide feedback of findings. </li>
                        <li> Operate between 3 different release branches to ensure discovered issues are branch specific or existing. </li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Sound Technician <span> 2016-Current</span><br/>
                        Christ Community Church, Carmichael, CA</h2>
                        <li>Provide sound and lighting expertise on a monthly basis.</li>
                        <li>Manage stage coordination 50% and design concept 15%.</li>
                        <li>Troubleshoot and repair issues that occur with equipment decreasing downtime by 60%.</li>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Director <span> 2012-2016</span><br/>
                        The Open Door of Revelation 3:20</h2>
                        <li>Non-profit organization concentrated on providing general needs and hygiene products to the less fortunate, focusing on providing emotional support 50% of the time and physical support 50% of the time.</li>
                        <li>Organize community events, fundraisers, and concerts to raise 100% of operational funds.</li>
                        <li>Manage audio and lighting equipment ensuring full functionality and increasing dependability by 100%.</li>
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
