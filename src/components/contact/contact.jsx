import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

export class Contact extends React.Component {
    render() {
        return (
        <div className="profile-contact">
            <Card bg='dark' text='light'>
                <Card.Header>
                <Card.Title>Contact me</Card.Title>
                </Card.Header>
                <Card.Body>
                <Card.Text>
                    Phone: <Button href="tel:+3204922052" className='Btn-bg' variant='primary' >1-(320)-492-2052</Button>
                    </Card.Text>
                    <Card.Text>
                        Email:  <Button href="mailto:Rythmere@gmail.com" className='Btn-bg' variant='primary' >Rythmere@gmail.com</Button>
                    </Card.Text>
                </Card.Body>
        </Card>
        </div>
        )
    }
}