import type { FC } from "react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

const logos = [""];

export const Brands: FC = () => {
  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>Trusted by Industry Leaders</Title>
        </div>
        <div></div>
      </Container>
    </section>
  );
};
