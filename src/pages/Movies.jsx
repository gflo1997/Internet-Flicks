import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Movies = () => {
  const { movie } = useParams();
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState(movie);

  function onSearch() {
    fetchMovies(searchMovie);
  }

  async function fetchMovies(movie) {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?s=${movie}&apikey=ddf07056`
    );
    setMovies(data);
  }
 
  useEffect(() => {
    fetchMovies();
  }, []);



  return (
    <div>
      <div className="SearchBar">
        <input
          className="input"
          type="text"
          value={searchMovie}
          placeholder="Titles, people, genres"
          onChange={(event) => setSearchMovie(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
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
        <div className="card">
          <img
            className="movie-img"
            src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg"
            alt=""
          />
          <div className="movie-container">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              optio quos earum! Iure, quos corporis! Pariatur esse quas nemo est
              ad dolor facere, quod molestias, quia voluptatum officiis?
              Consequatur, asperiores!
            </p>
            <h2>3.5</h2>
          </div>
        </div>
        <div className="card">
          <img
            className="movie-img"
            src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg"
            alt=""
          />
          <div className="movie-container">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              optio quos earum! Iure, quos corporis! Pariatur esse quas nemo est
              ad dolor facere, quod molestias, quia voluptatum officiis?
              Consequatur, asperiores!
            </p>
            <h2>3.5</h2>
          </div>
        </div>
        <div className="card">
          <img
            className="movie-img"
            src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg"
            alt=""
          />
          <div className="movie-container">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              optio quos earum! Iure, quos corporis! Pariatur esse quas nemo est
              ad dolor facere, quod molestias, quia voluptatum officiis?
              Consequatur, asperiores!
            </p>
            <h2>3.5</h2>
          </div>
        </div>
        <div className="card">
          <img
            className="movie-img"
            src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg"
            alt=""
          />
          <div className="movie-container">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              optio quos earum! Iure, quos corporis! Pariatur esse quas nemo est
              ad dolor facere, quod molestias, quia voluptatum officiis?
              Consequatur, asperiores!
            </p>
            <h2>3.5</h2>
          </div>
        </div>
        <div className="card">
          <img
            className="movie-img"
            src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg"
            alt=""
          />
          <div className="movie-container">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              optio quos earum! Iure, quos corporis! Pariatur esse quas nemo est
              ad dolor facere, quod molestias, quia voluptatum officiis?
              Consequatur, asperiores!
            </p>
            <h2>3.5</h2>
          </div>
        </div>
        <div className="card">
          <img
            className="movie-img"
            src="https://cdn.pocket-lint.com/r/s/1200x630/assets/images/148310-tv-feature-what-order-should-you-watch-the-fast-and-furious-films-in-image1-rzgajwfo2x.jpg"
            alt=""
          />
          <div className="movie-container">
            <h1>Title</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              optio quos earum! Iure, quos corporis! Pariatur esse quas nemo est
              ad dolor facere, quod molestias, quia voluptatum officiis?
              Consequatur, asperiores!
            </p>
            <h2>3.5</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
