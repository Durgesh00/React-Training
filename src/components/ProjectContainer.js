import React from 'react'
import ProjectDetail from './ProjectDetail';
import { Container, Row, Col } from 'reactstrap';

let ProjectContainer = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="6"><ProjectDetail project={props.project1} /></Col>
        <Col xs="6"><ProjectDetail project={props.project2} /></Col>
      </Row>
    </Container>
  );
};

export default ProjectContainer;