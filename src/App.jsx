import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Slider from "./Components/Slider/Slider";
import ProfileSelection from "./Components/ProfileSelection/ProfileSelection";
import AboutUs from "./Components/About Us/AboutUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Slider />
      <ProfileSelection />
      <AboutUs />
    </div>
  );
};

export default App;
