import React from "react";
import { Form } from "react-bootstrap";

function Search(props) {
  const handleChange = (e) => {
    const name = e.target.value;
    props.onChange(name);
  };
  return (
    <>
      <Form.Control
        onChange={handleChange}
        className="mt-3"
        style={{ width: "50%", margin: "3px auto 3px auto" }}
        size="lg"
        type="text"
        placeholder="Search..."
      />
    </>
  );
}

export default Search;
