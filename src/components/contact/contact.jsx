import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import github from '../footer/img/github.svg';
import linkedIn from '../footer/img/linkedin.svg';
import './contact.css';
export class Contact extends React.Component {
    render() {
        return (
        <div className="profile-contact">
            <Card bg='dark' text='light'>
                <Card.Header>
                <Card.Img></Card.Img>
                <h1>Contact me</h1>
                </Card.Header>
                <Card.Body>
                <Card.Text>
                    Have questions or something to discuss? Get in touch with me here.
                </Card.Text>
                <Card.Text>
                    Phone: <Button href="tel:+3204922052" className='Btn-bg' variant='primary' >(320)-492-2052</Button>
                    </Card.Text>
                    <Card.Text>
                        Email:  <Button href="mailto:Bricedouviergore@gmail.com" className='Btn-bg' variant='primary' >Bricedouviergore@gmail.com</Button>
                    </Card.Text>
                    <Card.Footer>
                    <a href="https://github.com/Rythmere" className="contact-links">
			            <img className="social-media" src={github} alt="Github"/>
                        <span> GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/brice-douvier-gore-1643a4243/" className="contact-links">
                        <img className="social-media" src={linkedIn} alt="LinkedIn"/>
                        <span>LinkedIN</span>
                    </a>
                    </Card.Footer>
                </Card.Body>
        </Card>
        </div>
        )
    }
}