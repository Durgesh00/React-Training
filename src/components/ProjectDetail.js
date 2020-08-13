import React from 'react';
import { Media, Container, Row, Col } from 'reactstrap';

const ProjectDetail = (props) => {
  //console.log(props.project.image_url);
  const { image_url, name, description } = props.project
  return (
    <Media >
      <Media left href="#">
        <Media object variant="top" style={{ maxHeight: 80, maxWidth: 130 }} src={image_url} thumbnail alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading variant="top">
          {name}
        </Media >
        {description}
      </Media>
    </Media>
  );
};

export default ProjectDetail;