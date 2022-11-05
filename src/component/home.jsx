import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/crown-logo.png";
// import gidex from "../../img/gidex_dp.jpg";
import "../assets/home.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return(
    <>
      <Helmet prioritizeSeoTags>
        <title>GitHub Repository App | Home</title>
        <link rel="icon" type="image/svg+xml" href="../../public/favicon.ico" />
        <meta name="description" value="All Simon Gideon repositories page" />
        <link rel="canonical" href="https://www.tacobell.com" />
        <meta property="og:title" content="Repositories"/>
      </Helmet>
      <div className="github-container">
        <header className='github-header'>
          <div className="logo-box">
            <img src={logo} alt="crown logo" />
          </div>
        </header>
        <div className="text-box">
          <h1 className='main-heading'>
            <span className='main-heading--big'>Welcome to my Github</span>
            <span className='main-heading--small'> Portfolio Page</span>
          </h1>
          <Link to="/repo" className='github-btn'> See my GitHub Profile</Link>
        </div>
      </div>
    </>
  )
}

export default Home;

