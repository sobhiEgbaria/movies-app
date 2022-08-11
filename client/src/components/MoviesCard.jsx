import React from "react";
import { Row, Col, Card } from "react-bootstrap/";
import Rating from "./RatingStars";

const MoviesCard = ({
  title,
  releaseDate,
  voteAverage,
  poster,
  name,
  firstAirDate,
  mediaTypeSearch,
}) => {
  return (
    <Card className="  cardsContainer">
      <Card.Img
        variant="top"
        src={poster}
        className="cardPoster"
        alt="if the image doesn't show please refresh the page"
      />
      <Row>
        <Col>
          <span>
            <Rating voteAverage={voteAverage} />
          </span>
          {voteAverage}
        </Col>
      </Row>
      <Card.Body>
        <Card.Title>{mediaTypeSearch === "movie" ? title : name}</Card.Title>
        <Card.Text>
          <Row>
            <Col>Release Date</Col>
            <Col>
              {mediaTypeSearch === "movie" ? releaseDate : firstAirDate}
            </Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MoviesCard;
