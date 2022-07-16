import React from "react";
import myFlixReact from '../footer/img/myFlix-React.jpg';
import myFlixApi from '../footer/img/myFlix-Api.jpg';
import myFlixLogin from '../footer/img/myFlix-login.jpg';
import './MyFlix.css';

export class MyFlix extends React.Component {
    render () {
        return (
            <div className="Myflix">
                <h1 className="MyFlixH1">MyFlix Case Study</h1> <br></br>
                <div className="Overview">
                    <img className="myflixReact" src={myFlixReact} />
                    <h4>Overview</h4>
                    <p>MyFlix is a web application, developed with the MERN tech stack, that allows users to create an account, view information about movies, directors, and genres. 
                        Users can update their account info, add or remove movies from their favourites, and delete their account.</p>
                    <h4>Purpose and Context</h4>
                    <p>MyFlix was a project I built as part of the CareerFoundry web development course to learn full-stack development and continue developing my JavaScript skills.</p>
                    <h4>Objective</h4>
                    <p>The goal was to built a complete web application back and front end from scratch, that I can add to my professional portfolio. 
                        The problem I wanted to solve was learning server-side development and continue refining my client-side development skills.</p>
                </div>
                <h4 className="Duration">Development</h4> 
                <div>
                <img className="myflixApi" src={myFlixApi} />
                    <h5>Server-Side</h5>
                    <p>The server-side of MyFlix was developed with Node.js and Express to create a RESTful api that interacts with a non-relational database made with MongoDB. 
                        The api is accessed using HTTP methods, GET, POST, PUT, and DELETE. The movies data is provided in JSON format, the data is retrieved and stored in the database with CRUD methods.</p>
                </div> <br></br><br></br>
                <div>
                <img className="myflixReact" src={myFlixLogin} />
                    <h5>Client-Side</h5>
                    <p>Once the api was completed, I began building the client interface users would use to request and receive data from the server-side. 
                        It is a single page application developed with React and React-Redux. 
                        It has a main view that displays a welcome page where users can login or register, once logged in the main view will display all the movies to the user where they can view 
                        individual movies details, view and update their profile, and add or remove movies from their favourites. </p>
                </div>
                <h4 className="Duration">Duration</h4> 
                <p>The development of myFlix took a few months to complete, due to containing 2 CareerFoundry achievements, 
                    amount of time I had to work on it due to work, the complexity of the project, and the challenges of working with and learning React, MongoDB, Node.js and Express for the first time. </p>
            </div>
        )
    }
}