import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Slider from "./Components/Slider/Slider";
import ProfileSelection from "./Components/ProfileSelection/ProfileSelection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Slider />
      <ProfileSelection />
    </div>
  );
};

export default App;
