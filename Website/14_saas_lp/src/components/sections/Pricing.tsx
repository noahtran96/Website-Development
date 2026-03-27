import type { FC } from "react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";

export const Pricing: FC = () => {
  return (
    <section id="pricing" className="py-5">
      <Container className="text-center">
        <Title>Pricing</Title>
        <Paragraph className="mt-4">
          Choose the plan that's right for your business.
        </Paragraph>
      </Container>
    </section>
  );
};
