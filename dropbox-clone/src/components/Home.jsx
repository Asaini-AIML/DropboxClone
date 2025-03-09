import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Home = ({ scrolled }) => {
  return (
    <section
      id="home"
      className={`w-full h-screen pt-28 transition-transform  duration-700 ease-in-out transform ${
        scrolled ? 'scale-90 bg-gray-700 opacity-60' : 'scale-100 bg-black opacity-100'
      }`}
    >
      <div className="container mx-auto flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-extrabold px-4 py-2  font-serif">
          Get to work, with a lot less work
        </h1>
        <p className="text-xl font-medium mt-4 font-serif px-2 py-1 max-w-2xl">
          Dropbox delivers tools that help you move your work forward faster, keep it safe, 
          and let you collaborate with ease.
        </p>
        <div className="mt-8 flex space-x-4 space-between">
          <div className="flex flex-col">
            <button className="bg-blue-600 text-white px-9 py-5 rounded-2xl text-lg font-semibold flex items-center gap-3 hover:gap-4 transition-all">
              Sign up for free <FaArrowRight className="mt-1" />
            </button>
            <p className="mt-4 text-sm">No credit card required.</p>
          </div>
          <button className="px-6 py-3 rounded-full text-lg font-semibold gap-1 underline flex hover:gap-2 transition-all text-white">
            Find your plan <FaArrowRight className="mt-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
