import axios from "axios";
import React from "react";
import { useEffect } from "react";
import NavBar from "../components/Header/NavBar";

const AllMoviesPage = () => {
  useEffect(() => {
    const tetchAllMovies = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=8c5382be42ac80e40fd763bc48f73c07&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      );
    };
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>gogo lolo say hi AllMoviesPage </h1>
      </header>
      <main></main>
    </>
  );
};

export default AllMoviesPage;
