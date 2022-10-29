import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Movies = () => {
  const { term } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  const [searchTerm, setSearchTerm] = useState(term);

  function onSearch() {
    fetchMovies(searchTerm);
  }

  async function fetchMovies(termSearched) {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${termSearched || term}&apikey=ddf07056`
    );
    setMovies(data?.Search);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="SearchBar">
        <Link to="/">
          <button className="btn btn-rounded back-button">Back</button>
        </Link>
        <input
          className="input"
          type="text"
          placeholder="Titles, people, genres"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyPress={(event) => { 
            if (event.key === 'Enter') {
              onSearch();
            }
          }}
        />
        <button onClick={() => onSearch()} className="searchButton">
          <img
            className="searchIcon"
            src="https://static.vecteezy.com/system/resources/previews/000/442/657/non_2x/vector-search-icon.jpg"
            alt=""
          />
        </button>
      </div>
      <div className="card-container">
        {loading
          ? new Array(10).fill(0).map((_, index) => (
              <div className="card" key={index}>
                <div className="movie-skeleton"></div>
                <div className="movie-container">
                  <div className="movie-container-skeleton"></div>
                </div>
              </div>
            ))
          : movies.map((movie) => (
                <div className="card" key={movie.imdbID}>
                  <img className="movie-img" src={movie.Poster} alt="" />
                  <div className="movie-container" >
                    <h1>{movie.Title}</h1>
                    <h2>{movie.Year}</h2>
                    <h4 className="movie-type">{movie.Type}</h4>
                  </div>
                </div>
            ))}
      </div>
    </>
  );
};

export default Movies;
