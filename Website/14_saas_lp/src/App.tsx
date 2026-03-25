import type { FC } from "react";
import Layout from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Brands } from "./components/sections/Brands";

const App: FC = () => {
  return (
    <Layout title="EdgeAI">
      <Hero />
      <Brands />
    </Layout>
  );
};

export default App;
