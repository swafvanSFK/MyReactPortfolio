import React from 'react'
import aboutImg from '../Assets/images/about-img.jpg'
import './About.css'
import Fact from '../components/Fact'
import Skills from '../components/Skills'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">about</h2>
        <div className="row about-details">
          <div className="col-6 about-txt-area">
            <h1 className="about-name">SWAFVAN</h1>
            <ul className="skills-area">
              <li className="skills">SOFTWARE ENGINEER</li>
              <li className="skills">WEB DESIGNER</li>
              <li className="skills">APP DEVELOPER</li>
              <li className="skills">FULL STACK DEVELOPER</li>
              <li className="skills">MEAN STACK</li>
            </ul>
            <p>
              Hello, I’m Swafvan, a passionate and versatile software developer
              and web designer. I bring creativity and technical expertise
              together to craft innovate and user-friendly digital solutions
              with a strong foundation in coding, designing and problem solving.
              I’m dedicated to delivering outstanding web experiences and
              software solutions that make a real impact.
            </p>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center about-img-wrapper justify-content-center"
          >
            <img
              className="about-image img-fluid"
              src={aboutImg}
              alt="humanImage"
            />
          </div>
        </div>
      </div>
      <Fact/>
      <Skills/>
    </section>
  )
}

export default About