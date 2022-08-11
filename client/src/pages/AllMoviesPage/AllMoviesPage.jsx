import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../../components/Header/NavBar";
import PaginationComponent from "../../components/Pagination";
import { Row, Col } from "react-bootstrap";
import MoviesCard from "../../components/MoviesCard";
import "./AllMoviesPage.css";

const AllMoviesPage = ({ page, setPage }) => {
  const [allMoviesData, setAllMoviesData] = useState([]);
  useEffect(() => {
    const fetchAllMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      );
      setAllMoviesData(data.results);
    };
    fetchAllMovies();
  }, [allMoviesData]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Row>
          {allMoviesData.map((item, index) => (
            <Col key={index} sm={11} md={5} lg={3} xl={2}>
              <MoviesCard
                key={index}
                title={item.title}
                firstAirDate={item.first_air_date}
                releaseDate={item.release_date}
                voteAverage={item.vote_average}
                mediaTypeSearch="movie"
                poster={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              />
            </Col>
          ))}
        </Row>
      </main>
      <footer>
        <PaginationComponent setPage={setPage} />
      </footer>
    </>
  );
};

export default AllMoviesPage;
