import React from "react";
import about from '../footer/img/about-picture.jpg';
import Button from "react-bootstrap/Button";
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Resume from '../footer/img/Brice-Douvier-Gore-Resume.pdf';
import './about.css';

export class About extends React.Component {
    render() {
        return (
            <div >
                <div className="about-container">
                <img src={about} className="profile_portrait" alt=""/>
                <div className="about">
                <h1>About me</h1><br></br>
                <p>
                Hello, I’m Brice Douvier-Gore. I have a  background in automotive maintenance and warehouse order selection. 
                My previous roles included supervising a quicklane department, consulting customers, selling repair services to customers, and working independently to complete tasks within the deadline. 
                I’m switching to web development out of a passion for technology and a desire to learn more about how technology used everyday works. 
                I want to build things that are useful to people’s everyday lives and that challenge me to learn and develop new skills
                </p>
                <Button className="Btn-bg" href={Resume} variant='dark' download='Brice-Douvier-Gore-Resume.pdf'>Download My Resume</Button>
                <Container>
                <Row>
                <Col>
                <h6>Technical Skills</h6>
                <ul>
                    <li>HTML and CSS</li>
                    <li>JavaScript</li>
                    <li>React and React Native</li>
                    <li>Angular</li>
                    <li>Node JS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Bootstrap</li>
                </ul>
                </Col>
                <Col>
                <h6>Tools</h6>
                <ul>
                    <li>Visual Studio Code</li>
                    <li>Git</li>
                    <li>Postman</li>
                    <li>Unix Command Line</li>
                </ul>
                </Col>
                </Row>
                </Container>
                </div>
                </div>
            </div>
        )
    }
}