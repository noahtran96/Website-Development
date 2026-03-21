import type { FC } from "react";
import Layout from "./components/Layout";
import { Hero } from "./components/sections/Hero";

const App: FC = () => {
  return (
    <Layout title="EdgeAI">
      <Hero />
    </Layout>
  );
};

export default App;
