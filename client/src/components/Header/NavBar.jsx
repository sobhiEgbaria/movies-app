import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = ({}) => {
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
            <div className="FilterBarBtns">
              <Link
                to="/AllMoviesPage"
                className="Link AllMoviesPageLink "
                id="movies"
              >
                ALL THE MOVIES
                <i className="fa-solid fa-film fa-fw  p-1 " id="movies"></i>
              </Link>

              <Link to="/AllTvPage" className="Link AllTvPageLink" id="tv">
                ALL THE TV-SHOW{" "}
                <i className="fa-solid fa-tv fa-fw  p-1" id="tv"></i>
              </Link>

              <Link to="/watchlist" className="Link AllTvPageLink">
                Watch List <i class="fa-solid fa-list p-1"></i>
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
