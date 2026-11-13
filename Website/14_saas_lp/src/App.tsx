import type { FC } from "react";
import Layout from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Brands } from "./components/sections/Brands";
import { Services } from "./components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs";
import { Pricing } from "./components/sections/Pricing";
import { CallToAction } from "./components/sections/CallToAction";

const App: FC = () => {
  return (
    <Layout title="EdgeAI">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <CallToAction />
    </Layout>
  );
};

export default App;
