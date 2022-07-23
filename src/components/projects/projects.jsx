import './projects.css';
import React from 'react';
import  Container  from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import myFlixReact from '../footer/img/myFlix-React.jpg';
import myFlixAngular from '../footer/img/myFlix-Angular.jpg';
import myFlixApi from '../footer/img/myFlix-Api.jpg';
import meetApp from '../footer/img/meet-app.jpg';
import ChatApp from '../footer/img/ChatApp.jpg';
import pokedex from '../footer/img/pokedex.jpg';

export class Projects extends React.Component {

  render() {
    return (
        <Container className='container-projects'>
        <Row>
            <h1 className='title'>My Work</h1>
            <Col md={4} >
            <Card  bg='dark' text='light'>
                <Card.Img variant='top' src={myFlixReact} />
                <Card.Body>
                    <Card.Title>MyFlix React Client</Card.Title>
                    <Card.Text>
                    MyFlix-client is a single page react app using a mongo db and the movie_api (see my other repository for details about the api), that allows a user to sign-up, view information about movies (Synopsis, genre, director) and add movies to their favourites.
                    </Card.Text>
                    <Card.Text>
                        Built with:
                    </Card.Text>
                    <Card.Text>
                        React | React Redux | React bootstrap | Axios | Parcel
                    </Card.Text>
                    <Button href='https://github.com/Rythmere/movieApi-client' className='Btn-bg' variant='primary' >GitHub</Button>
                    <Button href='https://mymoviesbdg.netlify.app' className='Btn-bg' variant='primary' >Live Site</Button>
                    <Button className="Btn-bg" href="/myflix" variant='dark'>Case Study</Button>
                </Card.Body>
        </Card>
            </Col>
            <Col md={4}>
            <Card bg='dark' text='light'>
                <Card.Img variant='top' src={myFlixApi} />
                <Card.Body>
                    <Card.Title>MyFlix Api</Card.Title>
                    <Card.Text>Movie api is a server side component for a movies web page that allows a user to access a database to sign-up, access information about movies (genre, director, synopsis) and add movies to their favourites</Card.Text>
                    <br></br>
                    <Card.Text>
                        Built with:
                    </Card.Text>
                    <Card.Text>
                        Node.js | Express | MongoDB | Mongoose | Postman
                    </Card.Text>
                    <br></br>
                    <Button href='https://github.com/Rythmere/movie_api' className='Btn-bg' variant='primary' >Github</Button>
                </Card.Body>
        </Card>
            </Col>
            <Col md={4} >
            <Card  bg='dark' text='light'>
                <Card.Img variant='top' src={myFlixAngular} />
                <Card.Body>
                    <Card.Title>MyFlix Angular Client</Card.Title>
                    <Card.Text>
                    MyFlix Angular client is a angular app using a mongo db and the movie_api (see my other repository for details about the api), that allows a user to sign-up, view information about movies (Synopsis, genre, director) and add movies to their favourites.
                    </Card.Text>
                    <Card.Text>
                        Built with:
                    </Card.Text>
                    <Card.Text>
                        Angular | Angular Material
                    </Card.Text>
                    <br></br>
                    <Button href='https://github.com/Rythmere/myFlix-Angular-client' className='Btn-bg' variant='primary' >GitHub</Button>
                    <Button href='https://rythmere.github.io/myFlix-Angular-client/welcome' className='Btn-bg' variant='primary' >Live Site</Button>
                </Card.Body>
        </Card>
            </Col>
            <Col md={4} >
            <Card bg='dark' text='light'>
                <Card.Img variant='top' src={meetApp} />
                <Card.Body>
                <Card.Title>Meet App</Card.Title>
                <Card.Text>
                Meet is a progressive, serverless web application, built with test driven development, that uses the Google Calendar API to provide information about educational events to full-stack developers. Users can filter events by location, expand events to see detailed descriptions and view summary event information using charts.
                    </Card.Text>
                    <Card.Text>
                        Built with:
                    </Card.Text>
                    <Card.Text>
                        React | Jest | Jest Cucumber | Enzyme | Pupperteer | Googleapis | AWS
                    </Card.Text>
                    <br></br>
                    <Button href='https://github.com/Rythmere/meet' className='Btn-bg' variant='primary' >GitHub</Button>
                    <Button href='https://rythmere.github.io/meet/' className='Btn-bg' variant='primary' >Live Site</Button>
                </Card.Body>
        </Card>
            </Col>
            <Col md={4} >
            <Card  bg='dark' text='light'>
                <Card.Img  variant='top' src={ChatApp} />
                <Card.Body>
                    <Card.Title>Chat App</Card.Title>
                    <Card.Text>
                    Chat app is a chatting application for mobile devices, created in React Native. The app provides users with a chat interface created with gifted chat and options to share images and their location while saving their messages to firestore and locally.
                    </Card.Text>
                    <Card.Text>
                        Built with:
                    </Card.Text>
                    <Card.Text>
                        React Native | Expo | Cloud Firestore | Gifted Chat
                    </Card.Text>
                    <br></br>
                    <Button href='https://github.com/Rythmere/chat-app' className='Btn-bg' variant='primary' >GitHub</Button>
                </Card.Body>
        </Card>
            </Col>
            <Col md={4} >
            <Card  bg='dark' text='light'>
                <Card.Img variant='top' src={pokedex} />
                <Card.Body>
                    <Card.Title>Pokedex</Card.Title>
                    <Card.Text>
                    Pokedex Javascript App: This a javascript application where the use can view a list of pokemon, with buttons that open a modal that displays detail about each pokemon.
                    Key features: Load data from external source (RESTful Pokemon API) View a list of all pokemon Click on a list item to open a modal with further details
                    </Card.Text>
                    <Card.Text>
                        Built with:
                    </Card.Text>
                    <Card.Text>
                        HTML | CSS | JavaScript | Bootstrap | Jquery
                    </Card.Text>
                    <br></br>
                    <Button href='https://github.com/Rythmere/Simple-js-app' className='Btn-bg' variant='primary' >GitHub</Button>
                    <Button href='https://rythmere.github.io/Simple-js-app/' className='Btn-bg' variant='primary' >Live Site</Button>
                </Card.Body>
        </Card>
            </Col>
            </Row>
        </Container>
    )
  }
}
