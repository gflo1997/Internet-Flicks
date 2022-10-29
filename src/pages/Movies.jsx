import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Movies = () => {
  const { movie } = useParams();
  const [movies, setMovies] = useState([]);

  
  }
 
  useEffect(() => {
    async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${movie}&apikey=ddf07056`
    );

    setMovies(data);
    }
    fetchMovies();

  }, []);



  return (
    <>
      <div className="SearchBar">
        <input
          className="input"
          type="text"
          value={searchMovie}
          placeholder="Titles, people, genres"

        />
        <button className="searchButton">
          <img
            className="searchIcon"
            src="https://static.vecteezy.com/system/resources/previews/000/442/657/non_2x/vector-search-icon.jpg"
            alt=""
          />
        </button>
      </div>
      <div className="card-container">

      {movies.map((card) => (
        <div className="card">
          <img
            className="movie-img"
            src={card.Poster}
            alt=""
          />
          <div className="movie-container">
            <h1>{card.Title}</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              optio quos earum! Iure, quos corporis! Pariatur esse quas nemo est
              ad dolor facere, quod molestias, quia voluptatum officiis?
              Consequatur, asperiores!
            </p>
            <h2>3.5</h2>
          </div>
      </div>
      ))}
      </div>
    </>
  );
};

export default Movies;
