import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  return (
    <Container className='hero-section'>
      <Row>
        <Col>
          <div>
            <h4>Discover my portfolio</h4>
          </div>
          <div>
                <h1>HI,I'M<br />SWAFVAN</h1>
                <span>Software Developer</span>
          </div>
          <ul className='social-icons d-flex'>
              <li> 
                <Link className='icon' to="https://twitter.com/SwafvanSFK" target="_blank">
                <FontAwesomeIcon className='i' icon={faTwitter} /> 
                </Link>
              </li>
              <li> 
                <Link className='icon' to="https://www.facebook.com/safwanks" target="_blank">
                <FontAwesomeIcon className='i'  icon={faFacebook} />
                </Link>
              </li>
              <li> 
                <Link className='icon' to="https://www.instagram.com/sf___k_/" target="_blank">
                <FontAwesomeIcon className='i'  icon={faInstagram} /> 
                </Link>
              </li>
              <li> 
                <Link className='icon' to="https://www.linkedin.com/in/safu-swafvan-137390290/"  target="blank">
                <FontAwesomeIcon className='i'  icon={faLinkedin} /> 
                </Link>
              </li>
          </ul>
          
        </Col>
      </Row>
    </Container>
  )
}

export default Home