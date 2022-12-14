import axios from "axios";
import React from "react";
import NavBar from "../components/Header/NavBar";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Figure, Row, Col, Card } from "react-bootstrap";
import Rating from "../components/RatingStars";
import CastCarousel from "../components/CastCards";
import AddToWatchList from "../components/AddToWatchList";

const MovieTvDetailsPage = ({ mediaTypeSearch }) => {
  const params = useParams();
  const [detailsData, setDetailsData] = useState([]);
  const [youtubeVideo, setYoutubeVideo] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${mediaTypeSearch}/${params.id}?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US`
      );
      setDetailsData(data);
    };

    fetchDetails();
  }, [mediaTypeSearch]);

  useEffect(() => {
    const fetchVideos = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${mediaTypeSearch}/${params.id}/videos?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US`
      );
      setYoutubeVideo(data.results[0].key);
    };

    fetchVideos();
  }, [mediaTypeSearch]);

  return (
    <>
      <NavBar />

      <main>
        <Row>
          <Col sm={12} md={6} lg={4} xl={3}>
            <Figure>
              <Figure.Image
                width={300}
                height={200}
                alt="171x180"
                src={`https://image.tmdb.org/t/p/w500/${detailsData.poster_path}`}
              />
            </Figure>
          </Col>
          <Col>
            <Card className="    VideoContainer ">
              <div className="ui embed">
                <iframe
                  width="420"
                  height="415"
                  title="video-player"
                  src={`https://www.youtube.com/embed/${youtubeVideo}`}
                />
              </div>
            </Card>
          </Col>
          <Col>
            <span>
              <h3>{detailsData.title || detailsData.name}</h3>{" "}
              <Link to="/watchlist" className="Link AllTvPageLink">
                <AddToWatchList />
              </Link>
            </span>

            <Figure.Caption>
              {detailsData.release_date || detailsData.first_air_date}
            </Figure.Caption>
            <Figure.Caption>
              <Rating voteAverage={detailsData.vote_average} />
              <strong className="p-1">{detailsData.vote_average}</strong>{" "}
            </Figure.Caption>
            <Figure.Caption>{detailsData.overview} </Figure.Caption>
          </Col>
          <Row className="m-4 ">
            <CastCarousel mediaTypeSearch={mediaTypeSearch} id={params.id} />
          </Row>
        </Row>
      </main>
    </>
  );
};

export default MovieTvDetailsPage;
