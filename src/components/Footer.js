import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <ul className="list-unstyled align-left offset-5">
                      <li><h3>Interview Test System</h3></li>
                      <li><h3>Apply for other SG licences</h3></li>
                      <li><h3>GoBusiness</h3></li>
              </ul>
          </Col>
        </Row>
        <Row>
          <Col md="4" className="footer-copywright">
            <h3></h3>
          </Col>
          <Col md="4" className="footer-copywright align-right">
            <h3>Contact Us</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Feedback</h3>
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;
