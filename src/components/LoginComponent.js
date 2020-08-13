import React from 'react';
import LoginContainer from '../containers/LoginContainer';
import { CardBody, Container, Row, Col, Card, Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

let LoginComponent = ({ userName, password, setUserName, setPassword, logValues }) => {
  const setUserNameWrapper = (evt) => {
    console.log(evt.target.value)
    setUserName(evt.target.value)
  };

  const setPasswordWrapper = (evt) => {
    setPassword(evt.target.value)
    console.log(evt.target.value)
  };
  
  return (
    <Container>
      <Row>
        <Col className="m-auto">
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail" value={userName} >Email</Label>
                  <Input type="email" name="email" id="exampleEmail" onChange={setUserNameWrapper}>
                  </Input>
                  <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword" value={password}>Password</Label>
                  <Input type="password" name="password" id="examplePassword" onChange={setPasswordWrapper}>
                  </Input>
                  <FormFeedback>Oh noes! that name is already taken</FormFeedback>
                </FormGroup>
                <Button onClick={logValues} >Login</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginComponent;

LoginComponent.propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUserName: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  logValues: PropTypes.func.isRequired
}

// LoginComponent.defaultProps = {
//     username: 'vikram'
// }