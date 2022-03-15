/* eslint-disable camelcase */
import React from 'react';
import Image from 'next/image';
import MainImg from '../assets/MainImage.png';
import data from '../sampleData.json';
import ProductSection from './Products/ProductSection';

function HomePage(props) {
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
      {/* Categories here */}
      <div className="my-8">
        <div className="container mx-auto px-6">
          <div className="bg-1 h-64 rounded-md overflow-hidden bg-cover bg-center">
            <div className=" bg-opacity-50 flex items-center h-full">
              <div className="px-10 max-w-xl">
                <h2 className="text-2xl text-white font-semibold">
                  Bilassa Handlooms
                </h2>
                <button
                  type="button"
                  className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                >
                  <span>Shop Now</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex mt-8 md:-mx-4">
            <div className="bg-2 w-full  h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
              <div className=" bg-opacity-50 flex items-center h-full">
                <div className="px-10 max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">
                    Office Accessories
                  </h2>
                  <button
                    type="button"
                    className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
                  >
                    <span>Shop Now</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-3 w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
              <div className=" bg-opacity-50 flex items-center h-full">
                <div className=" px-10 max-w-xl">
                  <h2 className="text-2xl text-white font-semibold">
                    Handloom Fashion Bags
                  </h2>
                  <button
                    type="button"
                    className="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
                  >
                    <span>Shop Now</span>
                    <svg
                      className="h-5 w-5 mx-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Categories with products */}
      {data.top_products.map(product => (
        <ProductSection key={product.category_name} {...product} />
      ))}
    </div>
  );
}

export default HomePage;
