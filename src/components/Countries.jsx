import React from "react";

import Country from "./Country";
import { Col } from "react-bootstrap";

function Countries(props) {
  return (
    <Col lg="4">
      <Country {...props} />
    </Col>
  );
}

export default Countries;
