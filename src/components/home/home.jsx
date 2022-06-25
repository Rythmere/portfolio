import React from "react";
import Button from "react-bootstrap/Button";
import profile from '../footer/img/Profile-Portrait.jpg';
import './home.css';

export class Home extends React.Component {
    render() {
        return (
            <div >
                <div className="profile">
                <img src={profile} className="profile_portrait" alt=""/>
                <h1>Hello</h1>
                <p>My name is Brice Douvier-Gore. I am a <span>web</span> developer from The USA.</p>
                <p>You can check my projects on github here.</p>
                <Button className="Btn-bg" href="/portfolio/projects" variant='dark'>Check out some of my work</Button>

            </div>
            </div>
        )
    }
}