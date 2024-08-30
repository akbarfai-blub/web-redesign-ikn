import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Slider from "./Components/Slider/Slider";
import ProfileSelection from "./Components/ProfileSelection/ProfileSelection";
import AboutUs from "./Components/About Us/AboutUs";
import News from "./Components/News/News";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Slider />
      <ProfileSelection />
      <AboutUs />
      <News />
      <Footer />
    </div>
  );
};

export default App;
