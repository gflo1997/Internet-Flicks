import React from "react";

const Home = () => {
  return (
    <div>
      <header className="showcase">
        <div className="showcase-top">
          <img src="./Netflix logo.png" alt="" />
          <a href="#" className="btn btn-rounded no-show">
            Sign In
          </a>
        </div>
        <div className="showcase-content">
          <h1>See what's next</h1>
          <p>Watch anywhere. Cancel Anytime</p>
          <a href="#" className="btn btn-xl">
            Watch Free For 30 Days <i className="fas fa-chevron-right btn-icon"></i>
          </a>
        </div>
        <div className="SearchBar">
            <input className="input" type="text" placeholder="Titles, people, genres"/>
            <button className="searchButton"><img className="searchIcon" src="https://static.vecteezy.com/system/resources/previews/000/442/657/non_2x/vector-search-icon.jpg" alt="" /></button>
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
                <a href="#" className="btn btn-lg">
                  Watch Free For 30 Days
                </a>
              </div>
              <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
            </div>
          </div>
          <div id="tab-2-content" className="tab-content-item">
            <div className="tab-2-content-top">
              <p className="text-lg">
                Watch TV shows and movies anytime, anywhere — personalized for
                you.
              </p>
              <a href="#" className="btn btn-lg">
                Watch Free For 30 Days
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>Questions? Call 1-866-579-7172</p>
        <div className="footer-cols">
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Investor Relations</a>
            </li>
            <li>
              <a href="#">Ways To Watch</a>
            </li>
            <li>
              <a href="#">Corporate Information</a>
            </li>
            <li>
              <a href="#">Internet Flicks Originals</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Terms Of Use</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Redeem Gift Cards</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Speed Test</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Media Center</a>
            </li>
            <li>
              <a href="#">Buy Gift Cards</a>
            </li>
            <li>
              <a href="#">Cookie Preferences</a>
            </li>
            <li>
              <a href="#">Legal Notices</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
