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
                <p>My name is Brice Douvier-Gore.  I’m pursuing a web development career out of a passion for technology and a desire to learn more about how technology used everyday works. I want to build things that are useful to people’s everyday lives and that challenge me to learn and develop new skills.</p>
                <p>You can check out my projects on github here.</p>
                <Button className="Btn-bg" href="/projects" variant='dark'>Check out some of my work</Button>
                

            </div>
            </div>
        )
    }
}