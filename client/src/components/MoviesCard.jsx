import React from "react";
import { Button, Row, Col, Card, Badge } from "react-bootstrap/";
import Rating from "./RatingStars";

const MoviesCard = ({ title, releaseDate, voteAverage, poster, name }) => {
  return (
    <Card className="  cardsContainer">
      <Card.Img variant="top" src={poster} className="cardPoster" />
      <Row>
        <Col>
          <span>
            <Rating voteAverage={voteAverage} />
          </span>
          {voteAverage}
        </Col>
      </Row>
      <Card.Body>
        <Card.Title>
          {title}
          {name}
        </Card.Title>
        <Card.Text>
          <Row>
            <Col>Release Date</Col>
            <Col>{releaseDate}</Col>
          </Row>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MoviesCard;
