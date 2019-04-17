import React from 'react';
import './resumepage.css';
import {Button, Container, Row, Col} from 'react-bootstrap';

export default class ResumePage extends React.Component{
    render(){
        return(
            <div id="resume">
                <a href="./resume.pdf"><Button style = {{backgroundColor: 'skyblue'}}>Click here for a PDF</Button></a>
                <Container>
                  <Row>
                    <Col><h3>Work Experience</h3></Col>
                  </Row>
                  <Row>
                    <Col>JP Morgan Chase, Jersey City</Col>
                    <Col>Sept 2018 - Present</Col>
                  </Row>
                  <Row>
                    <Col>Software Engineering Intern</Col>
                  </Row>
                  <Row>
                    Created and updated front-end features for assessing maturity levels of teams 
                    converting to Agile
                  </Row>
                </Container>
            </div>
        )
    }
}