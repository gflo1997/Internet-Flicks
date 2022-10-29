import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Movies = () => {
  const { searchTerm } = useParams();
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=ddf07056`
      );
      setMovies(data?.Search)
    }
    fetchMovies();
  }, []);

  return (
    <div>
      {movies.map(movie => (<div className="white">{movie.Title}</div>))}
      <h1 className="white">Hello</h1>
    </div>
  );
};

export default Movies;
