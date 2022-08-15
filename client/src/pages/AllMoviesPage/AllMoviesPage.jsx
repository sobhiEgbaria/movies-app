import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../../components/Header/NavBar";
import PaginationComponent from "../../components/Pagination";
import { Row, Col } from "react-bootstrap";
import MoviesCard from "../../components/MoviesCard";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import axios from "axios";
// in this component i use promise all to fetch
const AllMoviesPage = ({
  page,
  setPage,
  mediaTypeSearch,
  setMediaTypeSearch,
}) => {
  const [allMoviesData, setAllMoviesData] = useState([]);
  const [searchHandler, setSearchHandler] = useState("");

  useEffect(() => {
    const fetchAllMovies = () => {
      const fetchData1 = fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      );
      const fetchData2 = fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${
          50 - page
        }`
      );

      Promise.all([fetchData1, fetchData2])
        .then((allData) => {
          return Promise.all(allData.map((item) => item.json()));
        })

        .then((allData) => {
          const allDataOneArr = [...allData[0].results, ...allData[1].results];

          setAllMoviesData(allDataOneArr);
        });
    };
    fetchAllMovies();
  }, [page]);
  useEffect(() => {
    const fetchSearchMovies = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US&page=1&include_adult=false&query=${searchHandler}`
      );
      setAllMoviesData(data.results);
    };

    const searchTimer = setTimeout(() => {
      fetchSearchMovies();
    }, 500);

    return () => {
      clearTimeout(searchTimer);
    };
  }, [searchHandler]);

  return (
    <>
      <header>
        <NavBar />
        <div
          className="searchHandler"
          value={searchHandler}
          onChange={(e) => {
            setSearchHandler(e.target.value);
          }}
        >
          <SearchBar />
        </div>
      </header>
      <main>
        <Row>
          {allMoviesData.map((item, index) => (
            <Col key={index} sm={11} md={6} lg={4} xl={3}>
              <Link
                to={`/MovieDetailsPage/${item.id}`}
                className="Link"
                onClick={(e) => {
                  setMediaTypeSearch("movie");
                }}
              >
                <MoviesCard
                  key={index}
                  title={item.title}
                  firstAirDate={item.first_air_date}
                  releaseDate={item.release_date}
                  voteAverage={item.vote_average}
                  mediaTypeSearch={mediaTypeSearch}
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

export default AllMoviesPage;
