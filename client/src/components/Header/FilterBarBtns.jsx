import React from "react";
import { Button } from "react-bootstrap";

const FilterBarBtns = ({ setSearchQuery, setMediaTypeSearch, setPage }) => {
  const clickHandler = (e) => {
    setSearchQuery(e.target.value);
    setMediaTypeSearch(e.target.id);
    setPage(1);
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
    </>
  );
};

export default FilterBarBtns;
