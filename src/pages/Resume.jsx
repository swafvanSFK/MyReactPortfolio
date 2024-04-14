import React from 'react'
import './Resume.css'
import { Container } from 'react-bootstrap'

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <Container className="container">
        <h2 className="section-title">Resume</h2>
        <p className="section-desc">
          I’M A DEDICATED AND RESULTS-DRIVEN SOFTWARE DEVELOPER AND WEB DESIGNER
          WITH STRONG PASSION FOR TECHNOLOGY AND PROVEN TRACK RECORD OF
          DELIVERING HIGH-QUALITY SOUTIONS
        </p>
        <div className="row">
          <div className="col">
            <div className="resume-details">
              <h2 className="resume-item">SUMMARY</h2>
              <div className="resume-desc">
                <h3>SWAFVAN</h3>
                <p>
                  Karuthedath house vaniyannur iringavoor post tirur-3
                  ashupathripadi
                </p>
                <ul>
                  <li>tirur-3 kerala,india</li>
                  <li>+91 8086727471</li>
                  <li>safuswafvan1@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="resume-details">
              <h2 className="resume-item">EDUCATION</h2>
              <div className="resume-desc">
                <h3>BACHELOR OF COMPUTER APPLICATION & WEB DESIGNING</h3>
                <p className="working-year">2020 - 2022</p>
                <p className="worked-place">
                  Ignou University of Distance Education
                </p>
                <p>
                  A dedicated and well-rounded individual with a Bachelor of
                  Computer Applications (BCA) degree from a prestigious
                  institution. Equipped with strong analytical and problem
                  solving
                </p>
              </div>
              <div className="resume-desc">
                <h3>COMPUTER HARDWARE & SOFTWARE</h3>
                <p className="working-year">2010 - 2014</p>
                <p className="worked-place">ISIT Computer College, Tirur</p>
                <p>
                  Computer Hardware and Software Graduate from ISIT College:
                  Highly motivated and dedicated individual with a strong
                  foundation in computer hardware and software systems.
                  Proficient in troubleshooting, hardware assembly, and software
                  development, with a passion for staying up-to-date with the
                  latest industry trends
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="resume-details">
              <h2 className="resume-item">Professional Experience</h2>
              <div className="resume-desc">
                <h3>JUNIOR WEB DESIGNER</h3>
                <p className="working-year">2023 - Present</p>
                <p className="worked-place">ABC Pvt.ltd, Calicut, Kerala ,India</p>
                <ul>
                  <li>
                    Lead in the design, development, and implementation of the
                    graphic, layout, and production communication materials
                  </li>
                  <li>
                    Delegate tasks to the 7 members of the design team and
                    provide counsel on all aspects of the project.
                  </li>
                  <li>
                    Supervise the assessment of all graphic materials in order
                    to ensure quality and accuracy of the design
                  </li>
                  <li>
                    Oversee the efficient use of production project budgets
                    ranging from 2,000 - 25,000
                  </li>
                </ul>
              </div>
              <div className="resume-desc">
                <h3>SOFTWARE DEVELOPING SPECIALIST</h3>
                <p className="working-year">2023 - Present</p>
                <p className="worked-place">Freelancer PixDynamics ,Calicut</p>
                <ul>
                  <li>
                    Developed numerous marketing programs (logos,
                    brochures,infographics, presentations, and advertisements).
                  </li>
                  <li>
                    Managed up to 5 projects or tasks at a given time while
                    under pressure
                  </li>
                  <li>
                    Recommended and consulted with clients on the most
                    appropriate graphic design
                  </li>
                  <li>
                    Created 4+ design presentations and proposals a month for
                    clients and account managers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Resume