import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Virtual from "./components/Virtual/Virtual";
import Products from "./components/Products/Products";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
    </div>
  );
};

export default App;
