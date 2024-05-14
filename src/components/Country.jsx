import React from "react";
import { Button, Card, CardBody, CardTitle } from "react-bootstrap";

function Country(props) {
  const { name, flags, capital, population, onRemove } = props;

  const handleClick = (name) => {
    onRemove(name);
  };

  return (
    <Card style={{ margin: "5px" }}>
      <CardBody>
        <Card.Img style={{ width: "260px", height: "150px" }} src={flags.png} />
        <CardTitle>{name.official}</CardTitle>
        <Card.Text>Capitla: {capital}</Card.Text>
        <Card.Text>Population: {population}</Card.Text>
        <Button
          onClick={() => handleClick(name.official)}
          className="bg-danger"
        >
          Romove
        </Button>
      </CardBody>
    </Card>
  );
}

export default Country;
