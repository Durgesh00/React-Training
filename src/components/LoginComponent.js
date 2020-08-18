import React from 'react';
import {
  CardBody, Container, Row, Col, Card,
  Form, FormGroup, Label, Input, Button, FormFeedback
} from 'reactstrap';
import PropTypes from 'prop-types';

let LoginComponent = ({ validateData, state, dispatch }) => {
  const { username, password, usernameError, passwordError } = state

  const setUsernameWrapper = (evt) => {
    dispatch({ type: 'field', field: 'username', value: evt.target.value });
  }
  const setPasswordWrapper = (evt) => {
    dispatch({ type: 'field', field: 'password', value: evt.target.value });
  }

  // const setUsernameWrapper = (evt) => {
  //   console.log(evt.target.value)
  //   setUsername(evt.target.value)
  // };

  // const setPasswordWrapper = (evt) => {
  //   setPassword(evt.target.value)
  //   console.log(evt.target.value)
  // };

  return (
    <Container>
      <Row className="align-items-center">
        <Col sm={{ size: 6, offset: 3 }} className="mt-5">
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"
                    value={username} onChange={setUsernameWrapper}
                    invalid={(usernameError !== null)} />
                  <FormFeedback>{usernameError}</FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword"
                    placeholder="password placeholder" value={password}
                    onChange={setPasswordWrapper}
                    invalid={(passwordError !== null)} />
                  <FormFeedback>{passwordError}</FormFeedback>
                </FormGroup>
                <Button onClick={() => {
                  validateData();
                }}>Submit</Button>
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
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  logValues: PropTypes.func.isRequired
}

// LoginComponent.defaultProps = {
//     username: 'vikram'
// }