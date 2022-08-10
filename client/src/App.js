import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HomePge from "./pages/HomePge";

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("popular");
  const [mediaTypeSearch, setMediaTypeSearch] = useState("movie");

  return (
    <>
      <Container>
        <HomePge
          setData={setData}
          data={data}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          mediaTypeSearch={mediaTypeSearch}
          setMediaTypeSearch={setMediaTypeSearch}
        />
      </Container>
    </>
  );
}

export default App;
