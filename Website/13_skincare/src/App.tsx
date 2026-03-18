import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Virtual from "./components/Virtual/Virtual";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
    </div>
  );
};

export default App;
