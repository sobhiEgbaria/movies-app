import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import HomePge from "./pages/HomePge";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AllMoviesPage from "./pages/AllMoviesPage";
import AllTvPage from "./pages/AllTvPage";
import LogIn from "./pages/LogIn";
import Watchlist from "./pages/Watchlist";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("popular");
  const [mediaTypeSearch, setMediaTypeSearch] = useState("movie");

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Container>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePge
                setData={setData}
                data={data}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                mediaTypeSearch={mediaTypeSearch}
                setMediaTypeSearch={setMediaTypeSearch}
              />
            }
          />
          <Route path="/AllTvPage" element={<AllTvPage />} />
          <Route path="/AllMoviesPage" element={<AllMoviesPage />} />
          <Route path="/watchlist" element={<LogIn />} />
          <Route path="/login" element={<Watchlist />} />
          <Route
            path="/MovieDetailsPage/:id"
            element={<MovieDetailsPage data={data} />}
          />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
