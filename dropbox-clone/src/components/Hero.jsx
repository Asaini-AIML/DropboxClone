import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
        Get to work, with a lot less work
        </h1>
        <p className="mt-4 text-gray-600">
        Dropbox delivers tools that help you move your work forward faster, keep it safe, and let you collaborate with ease.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700"
        >
          Sign Up for Free
        </a>
      </div>
    </section>
  );
};

export default Hero;
