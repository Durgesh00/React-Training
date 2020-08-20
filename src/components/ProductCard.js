import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,  CardHeader, CardFooter, Button
} from 'reactstrap';

const ProductCard = (props) => {
  const  {name, stocked, category, description, price} = props.product
  return (
    <div>
      <Card>
        <CardHeader>{name}</CardHeader>
        <CardBody>
          {!  stocked && <p>Out of Stock</p>}
          <CardSubtitle>{category}</CardSubtitle>
          <CardText>{description}</CardText>
          <Button>Add to Cart</Button>

        </CardBody>
       
       <CardFooter>
         Price: ${price}
       </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard
