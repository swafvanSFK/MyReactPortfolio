import React from 'react'
import './Footer.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer text-center mt-4">
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">SWAFVAN</h1>
          <p>
            Thank you for visiting my website, and I look forward to the
            oppertunity of working with you to turn your digital dreams into
            reality
          </p>
          <div className="footer-social-icons">
            <Link to="https://twitter.com/SwafvanSFK" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
            <Link to="https://www.instagram.com/sf___k_/" target="_blank"><i className="fa-brands fa-instagram"></i></Link>
            <Link to="https://www.facebook.com/safwanks" target="_blank"><i className="fa-brands fa-facebook"></i></Link>
            <Link to="https://www.linkedin.com/in/safu-swafvan-137390290/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
          </div>
          <span>&#169; copyright MyPortfolio.All rights deserved.</span>
          <span>Designed by Swafvan</span>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer