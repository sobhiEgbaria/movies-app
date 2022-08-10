import React from "react";
import NavBar from "../components/Header/NavBar";

const MovieDetailsPage = ({ data }) => {
  return (
    <>
      <NavBar />

      <h1>gogo lolo say hi MovieDetailsPage {data.id}</h1>
    </>
  );
};

export default MovieDetailsPage;
