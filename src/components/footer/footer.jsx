import React from "react";
import  Navbar  from "react-bootstrap/Navbar";
import github from './img/github.svg';
import linkedIn from './img/linkedin.svg';
import email from './img/mail-142.svg';
import phone from './img/phone.svg';
import './footer.css';

export function Footer() {
    return (
        <Navbar fixed="bottom" className="page-footer" bg='dark'>
        <footer>
		<p>Contact Me</p>
        <div className="Phone">
        <a href="tel:+3204922052">
                <img className="social-media" src={phone} alt='Email'/>
                <span>1-(320)-492-2052</span>
            </a>
        </div>
        <div className="Email">
            <a href="mailto:Rythmere@gmail.com">
                <img className="social-media" src={email} alt='Email'/>
                <span>Rythmere@gmail.com</span>
            </a>
        </div>
		<div>
            <a href="https://github.com/Rythmere">
			<img className="social-media" src={github} alt="Github"/>
            </a>
            <a href="https://www.linkedin.com/in/brice-douvier-gore-1643a4243/">
            <img className="social-media" src={linkedIn} alt="LinkedIn"/>
            </a>
		</div>
	</footer>
    </Navbar>
    );
}