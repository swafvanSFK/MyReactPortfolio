import React from "react";
import "./Services.css";
import services from "../services";
import { Col, Container, Row } from "react-bootstrap";


const Services = () => {
  return (
    <section id="services" className="service">
      <Container className="container">
        <h2 className="section-title">
          services
        </h2>
        <p className="section-desc">
          I SPECIALIZE IN CREATING CUSTOM WEBSITES AND WEB APPLICATIONS TAILORED
          TO YOUR UNIQUE NEEDS. FROM RESPONSIVE DESIGN TO INTERACTIVE FEATURES,
          I HAVE THE SKILLS TO BRING YOUR WEB PROJECT TO LIFE.
        </p>
        <div className="card-items d-flex align-content-center justify-content-center">
          <Row className="row">
            {services.map((item, index) => (
              <Col key={index}>
                <div
                  className="card"
                  style={{ width: "400px", height: "350px" }}
                >
                  <img
                    className="vector card-img-top"
                    src={item.vector}
                    alt="..."
                  />
                  <img
                    className="service-img"
                    src={item.image}
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.label}</h5>
                    <p className="card-text">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Services;
