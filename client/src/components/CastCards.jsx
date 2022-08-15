import AliceCarousel from "react-alice-carousel";
import axios from "axios";
import { useEffect, useState } from "react";

const handleDragStart = (e) => e.preventDefault();

const CastCarousel = ({ mediaTypeSearch, id }) => {
  const [casts, setCasts] = useState([]);

  const items = casts.map((item) => {
    return (
      <>
        <div class="CastCard ">
          <img
            src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
            alt="Avatar"
            className="CastCardImg"
          />
          <div class="container">
            <b> {item.name}</b>

            <p>{item.character}</p>
          </div>
        </div>
      </>
    );
  });

  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 8,
    },
  };

  useEffect(() => {
    const fetchCasts = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${mediaTypeSearch}/${id}/credits?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US`
      );
      setCasts(data.cast);
    };

    fetchCasts();
  }, [mediaTypeSearch]);
  return <AliceCarousel responsive={responsive} mouseTracking items={items} />;
};

export default CastCarousel;
