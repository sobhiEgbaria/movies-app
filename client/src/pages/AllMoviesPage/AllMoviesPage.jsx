import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../../components/Header/NavBar";
import PaginationComponent from "../../components/Pagination";
import { Row, Col } from "react-bootstrap";
import MoviesCard from "../../components/MoviesCard";
import "./AllMoviesPage.css";

// in this component i use promise all to fetch
const AllMoviesPage = ({ page, setPage }) => {
  const [allMoviesData, setAllMoviesData] = useState([]);
  useEffect(() => {
    const fetchAllMovies = () => {
      const data1 = fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      );
      const data2 = fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
          page + 1
        }&with_watch_monetization_types=flatrate`
      );

      Promise.all([data1, data2])
        .then((allData) => {
          return Promise.all(allData.map((item) => item.json()));
        })

        .then((allData) => {
          const all = [...allData[0].results, ...allData[1].results];

          setAllMoviesData(all);
        });
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
            <Col key={index} sm={11} md={6} lg={4} xl={3}>
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
