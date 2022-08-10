import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HomePge from "./pages/HomePge";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AllMoviesPage from "./pages/AllMoviesPage";
import AllTvPage from "./pages/AllTvPage";

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("popular");
  const [mediaTypeSearch, setMediaTypeSearch] = useState("movie");

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
          <Route path="AllTvPage" element={<AllTvPage />} />
          <Route path="AllMoviesPage" element={<AllMoviesPage />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
