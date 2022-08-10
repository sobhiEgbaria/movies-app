import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const FilterBarBtns = ({
  setSearchQuery,
  searchQuery,
  mediaTypeSearch,
  setMediaTypeSearch,
  setPage,
}) => {
  const clickHandler = (e) => {
    setSearchQuery(e.target.value);
    setMediaTypeSearch(e.target.id);
    setPage(1);
    console.log(searchQuery, mediaTypeSearch);
  };
  return (
    <>
      <div
        aria-label="Basic example"
        className="FilterBarBtns"
        onClick={(e) => {
          clickHandler(e);
        }}
      >
        <Button variant="outline-dark" value="upcoming" id="movie">
          Upcoming Movies
        </Button>
        <Button variant="outline-dark" value="top_rated" id="movie">
          Top Rated Movies
        </Button>
        <Button variant="outline-dark" value="popular" id="movie">
          Popular Movies
        </Button>
        <Button variant="outline-dark" value="now_playing" id="movie">
          Now Playing
        </Button>
      </div>
      <div
        aria-label="Basic example"
        className="FilterBarBtns"
        onClick={(e) => {
          clickHandler(e);
        }}
      >
        <Button variant="outline-primary" value="on_the_air" id="tv">
          TV-SHOW On The Air
        </Button>
        <Button variant="outline-primary" value="top_rated" id="tv">
          Top Rated TV-SHOW
        </Button>
        <Button variant="outline-primary" value="popular" id="tv">
          Popular TV-SHOW
        </Button>

        <Button variant="outline-primary" value="airing_today" id="tv">
          TV-SHOW Airing Today
        </Button>
      </div>
      <div
        aria-label="Basic example"
        className="FilterBarBtns allMoviesAndTvBtn"
        onClick={(e) => {
          clickHandler(e);
        }}
      >
        <Link to="/AllMoviesPage" className="link">
          <i className="fa-solid fa-film"></i> GET ALL THE MOVIES{" "}
          <i className="fa-solid fa-film"></i>
        </Link>

        <Link to="/AllTvPage" className="link">
          <i className="fa-solid fa-tv"></i> GET ALL THE TV-SHOW{" "}
          <i className="fa-solid fa-tv"></i>
        </Link>
      </div>
    </>
  );
};

export default FilterBarBtns;
