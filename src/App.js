import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

class App extends React.Component {

  render() {
    return (
      <Router >
      <Container>
        <NavBar/>
        <Row className='home-card'>
          <Route exact path='/portfolio/' render={() => {
           return <Col md={6}>
            <Home/>
            </Col>
          }}/>
          <Route exact path='/portfolio/about' render={() => {
            return <Col md={6}>
            <About/>
            </Col>
          }}/>
          <Route path='/portfolio/projects' render={() => {
            return <Col md={12}>
            <Projects/>
            </Col>
          }}/>
          <Route exact path='/portfolio/contact' render={() => {
            return <Col md={4}>
            <Contact/>
            </Col>
          }}/>
        </Row>
        
      </Container>
      <Footer/>
      </Router>
    )
  }
}

export default App;