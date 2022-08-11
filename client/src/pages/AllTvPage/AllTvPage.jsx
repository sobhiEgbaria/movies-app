import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../../components/Header/NavBar";
import PaginationComponent from "../../components/Pagination";
import { Container, Row, Col } from "react-bootstrap";
import MoviesCard from "../../components/MoviesCard";

const AllTvPage = ({ page, setPage }) => {
  const [allTvData, setDataAllTvData] = useState([]);
  useEffect(() => {
    const fetchAllMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
      );

      setDataAllTvData(data.results);
    };
    fetchAllMovies();
  }, [allTvData]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Row>
          {allTvData.map((item, index) => (
            <Col key={index} sm={11} md={5} lg={3} xl={2}>
              <MoviesCard
                key={index}
                name={item.name}
                firstAirDate={item.first_air_date}
                releaseDate={item.release_date}
                voteAverage={item.vote_average}
                mediaTypeSearch="tv"
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

export default AllTvPage;
