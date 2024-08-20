import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import '../styles/ContactUs.css';

export function ContactUs() {
    return (
        <Container fluid className="contact-us-container">
            <Alert variant="primary" className="text-center contact-alert">
                <h2 className="main-title">Contact Us</h2>
            </Alert>

            <Row className="my-4">
                <Col md={6} className="mx-auto">
                    <div className="contact-info">
                        <h3 className="contact-heading">Our Contact Details</h3>
                        <p>
                            <b>Address:</b><br />
                            "Sports Zone", Sports Accessories Building, Kharghar, Mumbai, Batch March-24
                        </p>
                        <p>
                            <b>Website:</b> <a href="http://www.sportszone.com" className="contact-link">www.sportszone.com</a>
                        </p>
                        <p>
                            <b>Email:</b> <a href="mailto:aratisomwanshi@gmail.com" className="contact-link">aratisomwanshi@gmail.com</a>
                        </p>
                        <p>
                            <b>Contact:</b> +91 8999328191
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
