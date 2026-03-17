import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider/>
    </div>
  );
};

export default App;
