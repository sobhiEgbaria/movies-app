import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";
import MoviesCard from "../components/MoviesCard";
import NavBar from "../components/Header/NavBar";
import FilterBarBtns from "../components/Header/FilterBarBtns";
import PaginationComponent from "../components/Pagination";
import { Link } from "react-router-dom";
import SpinnerComponent from "../components/Spinner";

const HomePge = ({
  data,
  setData,
  searchQuery,
  setSearchQuery,
  setMediaTypeSearch,
  mediaTypeSearch,
  setPage,
  page,
  setSpinner,
  spinner,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${mediaTypeSearch}/${searchQuery}?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US&page=${page}`
      );
      setSpinner(true);
      setData(data.results);
    };

    fetchData();
  }, [searchQuery, mediaTypeSearch, page]);

  return (
    <>
      {spinner ? (
        <Container>
          <header>
            <NavBar setPage={setPage} />
            <FilterBarBtns
              setSearchQuery={setSearchQuery}
              setMediaTypeSearch={setMediaTypeSearch}
              setPage={setPage}
            />
          </header>

          <main className="mainContent">
            <Row>
              {data.map((item, index) => {
                return (
                  <Col key={index} sm={12} md={6} lg={4} xl={3}>
                    <Link to={`/MovieDetailsPage/${item.id}`} className="Link">
                      <MoviesCard
                        key={index}
                        title={item.title}
                        name={item.name}
                        firstAirDate={item.first_air_date}
                        releaseDate={item.release_date}
                        voteAverage={item.vote_average}
                        poster={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        mediaTypeSearch={mediaTypeSearch}
                      />
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </main>

          <footer>
            <PaginationComponent setPage={setPage} />
          </footer>
        </Container>
      ) : (
        <SpinnerComponent />
      )}
    </>
  );
};

export default HomePge;
