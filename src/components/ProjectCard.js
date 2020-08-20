import React from 'react';
import { Media, Container, Row, Col } from 'reactstrap';

const ProjectCard = (props) => {
    const { image_url, name, description } = props.project
    return (
        <Media>
            <Media left href="#">
                <Media object style={ { maxHeight: 64, maxWidth: 64} } className="img-responsive" src={image_url} alt="Generic placeholder image"  />
            </Media>
            <Media body>
                <Media heading className="text-left">
                    {name}
                </Media>
                <h6 className="text-left">{description}</h6>
            </Media>
        </Media> 
    );
};

export default ProjectCard;