import type { FC } from "react";
import Layout from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Brands } from "./components/sections/Brands";
import { Services } from "./components/sections/Services";

const App: FC = () => {
  return (
    <Layout title="EdgeAI">
      <Hero />
      <Brands />
      <Services />
    </Layout>
  );
};

export default App;
