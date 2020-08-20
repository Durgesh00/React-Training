import React from 'react';
import { CardBody, Container, Row, Col, Card, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';
import {LOGIN_REDUCER} from '../shared/actionConstants'
import { setUsername, setPassword } from '../actions/loginActions';

let LoginComponent = ({ dispatch, showError, passwordError, usernameError, password, username }) => {
    const setUsernameWrapper = (evt) => {
        dispatch(setUsername(evt));
    };
    const setPasswordWrapper = (evt) => {
        dispatch(setPassword(evt));
    };
    
    return (
        <>
        <Container style = {{paddingTop: '25vh', minHeight: '50vh', }}>
            <Row>
                <Col sm= {{size:6, offset:3}}>
                    <Card>
                        <CardBody>
                            <Form>
                                <FormGroup>
                                    <Label for="exampleEmail" value={username} >Email</Label>
                                    <Input type="email" name="email" id="exampleEmail" onChange={setUsernameWrapper} invalid = {usernameError !== null }></Input>
                                    <FormFeedback>{usernameError}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword" value={password}>Password</Label>
                                    <Input type="password" name="password" id="examplePassword" onChange={setPasswordWrapper} invalid = {passwordError !== null }></Input>
                                    <FormFeedback>{passwordError}</FormFeedback>
                                </FormGroup>
                                <Button onClick={ showError } >Login</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
        <p id= '1'></p>
        </>
    );
};

export default LoginComponent;

LoginComponent.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
}

// LoginComponent.defaultProps = {
//     username: 'vikram'
// }