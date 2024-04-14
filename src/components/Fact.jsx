import React from 'react'
import './Fact.css'
import happyClients from '../Assets/images/happy clients.svg'
import projects from '../Assets/images/projects.svg'
import history from '../Assets/images/clock-history.svg'
import awards from '../Assets/images/awards.svg'

const Fact = () => {
  return (
    <section className="fact-section">
      <div className="container">
        <h2 className="text-center section-title">facts</h2>
        <span className="section-desc">
          I’am always excited to collaborate on new projects,share ideas,or
          simply chat about the latest developments in the tech world.
        </span>
        <div className="fact-icons row d-flex align-items-center justify-content-center text-center">
          <div className="col-md-3">
            <img src={happyClients} alt="img" />
            <h2 id="count">25</h2>
            <p>happy clients</p>
          </div>
          <div className="col-md-3">
            <img src={projects} alt="img" />
            <h2>3</h2>
            <p>projects</p>
          </div>
          <div className="col-md-3">
            <img src={history} alt="img" />
            <h2>1463</h2>
            <p>hour of support</p>
          </div>
          <div className="col-md-3">
            <img src={awards} alt="img" />
            <h2>2</h2>
            <p>awards</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fact