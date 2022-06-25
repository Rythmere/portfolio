import React from "react";
import about from '../footer/img/about-picture.jpg';
import './about.css';

export class About extends React.Component {
    render() {
        return (
            <div >
                <div className="about">
                <img src={about} className="profile_portrait" alt=""/>
                <div>
                <h1>About me</h1><br></br>
                <p>My name is Brice Douvier-Gore. I am a <span>web</span> developer from The USA.</p>
                <p>I chose to persue web development and programing out of my love for technology</p>
                <p> and a desire to work with something I enjoy.</p>
                <p>Technology and languages I have experience with.</p>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Node.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Angular</li>
                    <li>MongoDB</li>
                    <li>Bootstrap</li>
                </ul>
                </div>
            </div>
            </div>
        )
    }
}