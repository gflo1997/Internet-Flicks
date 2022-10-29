import React from "react";

const Home = () => {
  return (
    <div>
      <header class="showcase">
        <div class="showcase-top">
          <img src="./Netflix logo.png" alt="" />
          <a href="#" class="btn btn-rounded no-show">
            Sign In
          </a>
        </div>
        <div class="showcase-content">
          <h1>See what's next</h1>
          <p>Watch anywhere. Cancel Anytime</p>
          <a href="#" class="btn btn-xl">
            Watch Free For 30 Days <i class="fas fa-chevron-right btn-icon"></i>
          </a>
        </div>
        <div className="SearchBar">
            <input className="input" type="text" placeholder="Titles, people, genres"/>
            <button className="searchButton"><img className="searchIcon" src="https://static.vecteezy.com/system/resources/previews/000/442/657/non_2x/vector-search-icon.jpg" alt="" /></button>
        </div>
      </header>
      <section class="tabs">
        <div class="container">
          <div id="tab-1" class="tab-item tab-border">
            <i class="fas fa-door-open fa-3x"></i>
            <p class="hide-sm">Cancel at any time</p>
          </div>
          <div id="tab-2" class="tab-item">
            <i class="fas fa-tablet-alt fa-3x"></i>
            <p class="hide-sm">Watch anywhere</p>
          </div>
          <div id="tab-3" class="tab-item">
            <i class="fas fa-tags fa-3x"></i>
            <p class="hide-sm">Pick your price</p>
          </div>
        </div>
      </section>
      <section class="tab-content">
        <div class="container">
          <div id="tab-1-content" class="tab-content-item show">
            <div class="tab-1-content-inner">
              <div>
                <p class="text-lg">
                  If you decide Internet Flicks isn't for you - no problem. No
                  commitment. Cancel online anytime.
                </p>
                <a href="#" class="btn btn-lg">
                  Watch Free For 30 Days
                </a>
              </div>
              <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
            </div>
          </div>
          <div id="tab-2-content" class="tab-content-item">
            <div class="tab-2-content-top">
              <p class="text-lg">
                Watch TV shows and movies anytime, anywhere — personalized for
                you.
              </p>
              <a href="#" class="btn btn-lg">
                Watch Free For 30 Days
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer">
        <p>Questions? Call 1-866-579-7172</p>
        <div class="footer-cols">
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
