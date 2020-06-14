import React from "react";
import { Link } from "react-router-dom";

const ArtistsList = (props) => {
  console.log(props);
  return (
    <div className="artists_list">
      <h4>Browse the artists</h4>
      <div className="artist_container"></div>
    </div>
  );
};

export default ArtistsList;
