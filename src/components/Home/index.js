import React, { Component } from "react";
import axios from "axios";
import Banner from "./banner";

const URL_ARTISTS = "http://localhost:3004/artists";

function Home() {
  return (
    <>
      <Banner />
    </>
  );
}

export default Home;
