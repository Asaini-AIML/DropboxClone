import React from "react";
import Navbar from "./components/Navbar";
import { useState,useEffect } from "react";
import Features from "./components/Features";
import Home from "./components/Home";
import Hero1 from "./components/Hero1";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // If user scrolls down half of the window height, apply the effect.
      if (scrollPosition > windowHeight / 4) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App flex flex-col scroll-smooth">
      <Navbar />
      <Home />
  <Hero1/>
      <Features />
    </div>
  );
}

export default App;
