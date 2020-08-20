import React from 'react';
import { Form, Input, FormGroup, Col, Container, Row } from 'reactstrap';
import {useSelector} from 'react-redux';

const divStyle = {
    background: 'skyblue',
    padding: 20,
    textAlign: 'center'
};
let DashboardComponent = ({userDetails}) => {
    return (
        <>
        <h4>Username: {userDetails.full_name}</h4>
        <div style = {divStyle}>
            <h1>DISCOVER PROJECTS</h1>
            <h6 style = {{color: 'maroon'}}>16098 public projects to discover</h6>
            <Form>
                <Col md={6} style = {{margin: 'auto', padding: 10}}>
                    <FormGroup>
                        <Input type="search" name="search" id="exampleSearch" placeholder="Search Something..." />
                    </FormGroup>
                </Col>
            </Form>
        </div>
        <Container style = {{padding: 20}}>
            <Row>
                <Col md = {6}>
                    <h1>Most Liked</h1>
                </Col>
                <Col md = {6}>
                    <h1>Most Active</h1>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default DashboardComponent;