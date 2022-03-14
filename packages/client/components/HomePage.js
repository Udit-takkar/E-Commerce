import React from 'react';
import Image from 'next/image';
import MainImg from '../assets/MainImage.png';

function HomePage() {
  return (
    <div className="header-landing">
      <div className="container-hp">
        <div className="w-layout-grid homepage-grid">
          <div className="title-wrap-main-heading">
            <h1 className="main-heading">
              <strong>Create your own live commerce communities</strong>
            </h1>
            <p className="main-para">
              Stand out from the competition by delivering a groundbreaking
              customer experience with one-click video calls. Create an
              unparalleled digital experience no one else can match.
            </p>
            <div className="w-full">
              <button
                type="button"
                className="get-started-btn font-helvetica text-white  px-20 py-3  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md text-center "
              >
                Get Started
              </button>

              <button
                type="button"
                className="get-started-btn ml-5 font-helvetica   px-20 py-3  bg-gradient-to-r  hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50   font-medium rounded-lg text-md text-center "
              >
                How it works?
              </button>
            </div>
          </div>
          <Image className="main-img" src={MainImg} alt="Home Page" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
