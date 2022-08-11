import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../../components/Header/NavBar";
import PaginationComponent from "../../components/Pagination";
import { Container, Row, Col } from "react-bootstrap";
import MoviesCard from "../../components/MoviesCard";
import { Link } from "react-router-dom";

const AllTvPage = ({ page, setPage }) => {
  const [allTvData, setAllTvData] = useState([]);
  useEffect(() => {
    const fetchAllTvShows = () => {
      const fetchData1 = fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
      );
      const fetchData2 = fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US&sort_by=popularity.desc&page=${
          50 - page
        }&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`
      );

      Promise.all([fetchData1, fetchData2])
        .then((allData) => {
          return Promise.all(allData.map((item) => item.json()));
        })

        .then((allData) => {
          const allDataOneArr = [...allData[0].results, ...allData[1].results];
          console.log(allDataOneArr);

          setAllTvData(allDataOneArr);
        });
    };
    fetchAllTvShows();
  }, [page]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Row>
          {allTvData.map((item, index) => (
            <Col key={index} sm={12} md={6} lg={4} xl={3}>
              <Link to={`/MovieDetailsPage/${item.id}`} className="Link">
                <MoviesCard
                  key={index}
                  name={item.name}
                  firstAirDate={item.first_air_date}
                  releaseDate={item.release_date}
                  voteAverage={item.vote_average}
                  mediaTypeSearch="tv"
                  poster={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
              </Link>
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
