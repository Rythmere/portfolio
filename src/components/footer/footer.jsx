import React from "react";
import  Navbar  from "react-bootstrap/Navbar";
import Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import  Button  from "react-bootstrap/Button";
import github from './img/github.svg';
import linkedIn from './img/linkedin.svg';
import twitter from './img/twitter.svg';
import './footer.css';

export function Footer() {
    return (
        <Navbar fixed="bottom" className="page-footer" bg='dark'>
        <footer>
		<p>Find me on</p>
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