import React from "react";
import NavBar from "../components/Header/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Figure, Row, Col } from "react-bootstrap";

const MovieTvDetailsPage = ({ mediaTypeSearch }) => {
  const params = useParams();
  const [detailsData, setDetailsData] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${mediaTypeSearch}/${params.id}?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US`
      );
      setDetailsData(data);
      console.log(detailsData);
    };

    fetchDetails();
  }, [mediaTypeSearch]);

  return (
    <>
      <NavBar />
      <div></div>

      <main>
        <Row>
          <Col>
            <Figure>
              <h3>{detailsData.original_title || detailsData.name}</h3>
              <Figure.Caption>
                {detailsData.release_date || detailsData.first_air_date}
                <i id="starsColor" className={`fa-solid fa-star`}></i>{" "}
                {detailsData.vote_average}
                {detailsData.runtime}m
              </Figure.Caption>
              <Figure.Image
                width={300}
                height={300}
                alt="171x180"
                src={`https://image.tmdb.org/t/p/w500/${detailsData.poster_path}`}
              />
              <Figure.Caption>{detailsData.overview}</Figure.Caption>
            </Figure>
          </Col>
          <Col></Col>
        </Row>
      </main>
    </>
  );
};

export default MovieTvDetailsPage;

// img
//
//         alt=""
//       />
//       <div> </div>
//       <h1>{detailsData.original_title}</h1>
