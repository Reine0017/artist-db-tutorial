import React, { useEffect, useState } from "react";
import axios from "axios";
import Banner from "./banner";
import ArtistsList from "./artistsList";

const URL_ARTISTS = "http://localhost:3004/artists";

function Home() {
  const [artists, setArtists] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchArtists = async () => {
      setIsError(false);

      try {
        const result = await axios(URL_ARTISTS);
        setArtists(result.data);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchArtists();
  }, []);
  return (
    <>
      <Banner />
      <ArtistsList allArtists={artists} />
      {console.log(artists)}
      {isError && <div>Something went wrong...</div>}
    </>
  );
}

export default Home;
