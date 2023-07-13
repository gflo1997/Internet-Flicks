import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState();

  function handleClick() {
    navigate(`/${searchTerm}`)
  }

  function handleSignInClick() {
    alert('Option not available :(  Please search a movie!');
  }

  return (
    <div>
      <header className="showcase">
        <div className="showcase-top">
          <img className="logo-small" src="./Internetflickslogo.png" alt="" />
          <a onClick={handleSignInClick} className="btn btn-rounded no-show">
            Sign In
          </a>
        </div>
        <div className="showcase-content">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere. Cancel Anytime</p>
          <a href="#" className="btn btn-xl">
            Watch Free For 30 Days{" "}
            <i className="fas fa-chevron-right btn-icon"></i>
          </a>
        </div>

        <div className="SearchBar">
          <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyPress={(event) => { 
            if (event.key === 'Enter') {
              handleClick();
            }
          }}
            className="input input-small"
            type="text"
            placeholder="Titles, people, genres"
          />
          <button 
          onClick={handleClick}
          className="searchButton">
            <img
              className="searchIcon"
              src="https://static.vecteezy.com/system/resources/previews/000/442/657/non_2x/vector-search-icon.jpg"
              alt=""
            />
          </button>
        </div>


      </header>
      <section className="tabs">
        <div className="container">
          <div id="tab-1" className="tab-item tab-border">
            <i className="fas fa-door-open fa-3x"></i>
            <p className="hide-sm">Cancel at any time</p>
          </div>
          <div id="tab-2" className="tab-item">
            <i className="fas fa-tablet-alt fa-3x"></i>
            <p className="hide-sm">Watch anywhere</p>
          </div>
          <div id="tab-3" className="tab-item">
            <i className="fas fa-tags fa-3x"></i>
            <p className="hide-sm">Pick your price</p>
          </div>
        </div>
      </section>
      <section className="tab-content">
        <div className="container">
          <div id="tab-1-content" className="tab-content-item show">
            <div className="tab-1-content-inner">
              <div>
                <p className="text-lg">
                  If you decide Internet Flicks isn't for you - no problem. No
                  commitment. Cancel online anytime.
                </p>
                <a className="btn btn-lg">
                  Watch Free For 30 Days
                </a>
              </div>
              <img src="https://www.howtogeek.com/wp-content/uploads/2020/03/netflix-cancel-account-cancel-membership.png?trim=1,1&bg-color=000&pad=1,1" alt="" />
            </div>
          </div>
          <div id="tab-2-content" className="tab-content-item">
            <div className="tab-2-content-top">
              <p className="text-lg">
                Watch TV shows and movies anytime, anywhere — personalized for
                you.
              </p>
              <a className="btn btn-lg">
                Watch Free For 30 Days
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>Questions? Call 1-407-875-7885</p>
        <div className="footer-cols">
          <ul>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Investor Relations</a>
            </li>
            <li>
              <a>Ways To Watch</a>
            </li>
            <li>
              <a>Corporate Information</a>
            </li>
            <li>
              <a>Internet Flicks Originals</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Help Center</a>
            </li>
            <li>
              <a>Jobs</a>
            </li>
            <li>
              <a>Terms Of Use</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Account</a>
            </li>
            <li>
              <a>Redeem Gift Cards</a>
            </li>
            <li>
              <a>Privacy</a>
            </li>
            <li>
              <a>Speed Test</a>
            </li>
          </ul>
          <ul>
            <li>
              <a>Media Center</a>
            </li>
            <li>
              <a>Buy Gift Cards</a>
            </li>
            <li>
              <a>Cookie Preferences</a>
            </li>
            <li>
              <a>Legal Notices</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
