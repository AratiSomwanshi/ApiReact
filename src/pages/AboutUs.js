import React from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import arati from "../images/AboutUs/arati.jpg";
import anshita from "../images/AboutUs/anshita.jpg";
import pushpak from "../images/AboutUs/pushpak.jpg";
import madhuri from "../images/AboutUs/madhuri.jpg";
import jayant from "../images/AboutUs/jayant.jpg";

import Footer from '../components/Footer';  
import '../styles/AboutUs.css';

export function AboutUs() {
    return (
        <>
            <Container fluid className="about-us-container">
                <Alert
                    variant="success"
                    className="text-center"
                    style={{
                        backgroundColor: "#343a40",
                        color: "white",
                        borderRadius: '0'
                    }}>
                    <h1>About Us</h1>
                </Alert>

                <Row className="my-4">
                    <Col lg={6}>
                        <h3 className="about-us-heading">Vision</h3>
                        <p className="about-us-text">
                            Sportify is committed to providing the best sports accessories and gear to enhance your performance. We aim to offer high-quality products with exceptional customer service to support athletes at every level.
                        </p>
                    </Col>
                    
                    <Col lg={6}>
                        <h3 className="about-us-heading">Our History</h3>
                        <p className="about-us-text">
                            Founded in 2024, Sportify is the brain child of five passionate sports enthusiasts. Our headquarters is located in the heart of Mumbai, where we work tirelessly to bring you the finest sports gear available.
                        </p>
                    </Col>
                </Row>

                <Alert
                    variant="danger"
                    className="text-center"
                    style={{
                        backgroundColor: "#dc3545",
                        color: "white",
                        borderRadius: '0'
                    }}>
                    <h1>Meet Our Team</h1>
                </Alert>

                <Row className="my-4">
                    <Col lg={4} className="text-center">
                        <Card className="team-card">
                            <Card.Img variant="top" src={arati} />
                            <Card.Body>
                                <Card.Title>Arati Somwanshi</Card.Title>
                                <Card.Text>
                                    PRN: 240340320017  <br />
                                    PG-DAC Student, March-24 batch <br />
                                    CDAC Mumbai KH
                                </Card.Text>
                                <Button variant="success"><Link to="http://www.linkedin.com/in/arati-somwanshi-804364241" className="text-white">LinkedIn</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="text-center">
                        <Card className="team-card">
                            <Card.Img variant="top" src={anshita} />
                            <Card.Body>
                                <Card.Title>Anshita Shukla</Card.Title>
                                <Card.Text>
                                    PRN: 240340520021 <br />
                                    PG-DAC Student, March-24 batch <br />
                                    CDAC Mumbai JH 
                                </Card.Text>
                                <Button variant="success"><Link to="https://www.linkedin.com/in/anshita-shukla-571129226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white">LinkedIn</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="text-center">
                        <Card className="team-card">
                            <Card.Img variant="top" src={madhuri} />
                            <Card.Body>
                                <Card.Title>Madhuri Khote</Card.Title>
                                <Card.Text>
                                    PRN: 240340320057 <br />
                                    PG-DAC Student, March-24 batch <br />
                                    CDAC Mumbai JH 
                                </Card.Text>
                                <Button variant="success"><Link to="https://www.linkedin.com/in/anshita-shukla-571129226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white">LinkedIn</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="text-center">
                        <Card className="team-card">
                            <Card.Img variant="top" src={pushpak} />
                            <Card.Body>
                                <Card.Title>Pushpak Pandharpatte</Card.Title>
                                <Card.Text>
                                    PRN: 240340520067 <br />
                                    PG-DAC Student, March-24 batch <br />
                                    CDAC Mumbai JH 
                                </Card.Text>
                                <Button variant="success"><Link to="https://www.linkedin.com/in/pushpak-pandharpatte-a75872210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white">LinkedIn</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="text-center">
                        <Card className="team-card">
                            <Card.Img variant="top" src={jayant} />
                            <Card.Body>
                                <Card.Title>Jayant Sharma</Card.Title>
                                <Card.Text>
                                    PRN: 240340320044 <br />
                                    PG-DAC Student, March-24 batch <br />
                                    CDAC Mumbai KH 
                                </Card.Text>
                                <Button variant="success"><Link to="https://www.linkedin.com/in/jayant-sharma-a75872210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white">LinkedIn</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer /> 
        </>
    );
}
