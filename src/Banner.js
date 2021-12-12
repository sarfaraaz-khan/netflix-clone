import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);

      return request;
    }
    fetchData();
  }, []);

  return (
    <header>
      {/* background in=mage */}
      {/* title */}
      {/* two buttons in a div */}
      {/* Discreption */}
    </header>
  );
}

export default Banner;
