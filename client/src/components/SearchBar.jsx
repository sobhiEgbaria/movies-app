import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const SearchBar = () => {
  return (
    <Container>
      <Form className="d-flex formSearch">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-3 searchBar"
          aria-label="Search"
        />
      </Form>
    </Container>
  );
};

export default SearchBar;
