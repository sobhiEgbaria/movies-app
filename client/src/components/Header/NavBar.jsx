import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand className="logo" href="/homePage">
            <div>Unit Entertainment</div>
            <div>
              <i className="fa-solid fa-tv"></i>
            </div>
          </Navbar.Brand>

          <Form className="d-flex formSearch">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3 searchBar"
              aria-label="Search"
            />
            <Button variant="outline-secondary">Search</Button>
          </Form>

          <div className="leftLinks">
            <Nav className="me-auto my-2 my-lg-0">
              <Nav.Link href="/watchlist">Watch List</Nav.Link>
              <Nav.Link href="/login">Sing In</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
