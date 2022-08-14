import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = ({ setMediaTypeSearch, setPage, mediaTypeSearch }) => {
  return (
    <>
      <Navbar bg="light" variant="light" className="mb-5">
        <Container fluid>
          <Navbar.Brand className="logo">
            <Link to="/" className="Link">
              <div>Unit Entertainment</div>
              <div>
                <i className="fa-solid fa-tv"></i>
              </div>
            </Link>
          </Navbar.Brand>

          <Nav className="me-auto">
            <div
              className="FilterBarBtns"
              // onClick={(e) => {
              //   setPage(1);
              //   setMediaTypeSearch(e.target.id);
              //   console.log(mediaTypeSearch);
              // }}
            >
              <Link
                to="/AllMoviesPage"
                className="Link AllMoviesPageLink "
                id="tv"
              >
                ALL THE MOVIES<i className="fa-solid fa-film fa-fw"></i>
              </Link>
              <Link to="/AllTvPage" className="Link AllTvPageLink" id="tv">
                ALL THE TV-SHOW <i className="fa-solid fa-tv fa-fw"></i>
              </Link>
              <Link
                to="/watchlist"
                className="Link AllTvPageLink FilterBarBtns"
              >
                Watch List
              </Link>
            </div>
          </Nav>

          <div className="leftLinks">
            <Link to="/login" className="Link leftLink">
              Sing In
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
