import React from "react";

const Rating = ({ voteAverage }) => {
  return (
    <>
      <span className="starsContainer">
        <i
          id="starsColor"
          className={
            voteAverage >= 1
              ? `fa-solid fa-star`
              : voteAverage >= 0.5
              ? `fa-regular fa-star-half-stroke`
              : `fa-regular fa-star`
          }
        ></i>
        <i
          id="starsColor"
          className={
            voteAverage >= 2
              ? `fa-solid fa-star`
              : voteAverage >= 1.5
              ? `fa-regular fa-star-half-stroke`
              : `fa-regular fa-star`
          }
        ></i>
        <i
          id="starsColor"
          className={
            voteAverage >= 3
              ? `fa-solid fa-star`
              : voteAverage >= 2.5
              ? `fa-regular fa-star-half-stroke`
              : `fa-regular fa-star`
          }
        ></i>
        <i
          id="starsColor"
          className={
            voteAverage >= 4
              ? `fa-solid fa-star`
              : voteAverage >= 3.5
              ? `fa-regular fa-star-half-stroke`
              : `fa-regular fa-star`
          }
        ></i>
        <i
          id="starsColor"
          className={
            voteAverage >= 5
              ? `fa-solid fa-star`
              : voteAverage >= 4.5
              ? `fa-regular fa-star-half-stroke`
              : `fa-regular fa-star`
          }
        ></i>
        <i
          id="starsColor"
          className={
            voteAverage >= 6
              ? `fa-solid fa-star`
              : voteAverage >= 5.5
              ? `fa-regular fa-star-half-stroke`
              : `fa-regular fa-star`
          }
        ></i>
        <i
          id="starsColor"
          className={
            voteAverage >= 7
              ? `fa-solid fa-star`
              : voteAverage >= 6.5
              ? `fa-regular fa-star-half-stroke`
              : `fa-regular fa-star`
          }
        ></i>
        <i
          id="starsColor"
          className={
            voteAverage >= 8
              ? `fa-solid fa-star`
              : voteAverage >= 7.5
              ? `fa-regular fa-star-half-stroke`
              : `fa-regular fa-star`
          }
        ></i>
        <i
          id="starsColor"
          className={
            voteAverage >= 9
              ? `fa-solid fa-star`
              : voteAverage >= 8.5
              ? `fa-regular fa-star-half-stroke`
              : `fa-regular fa-star`
          }
        ></i>
        <i
          id="starsColor"
          className={
            voteAverage >= 10
              ? `fa-solid fa-star`
              : voteAverage >= 9.5
              ? `fa-regular fa-star-half-stroke`
              : `fa-regular fa-star`
          }
        ></i>
      </span>
    </>
  );
};

export default Rating;
