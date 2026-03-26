import type { FC } from "react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { SERVICE_ITEMS } from "../../constants/servicesItems";
import type { ServiceItem } from "../../constants/servicesItems";

export const Services: FC = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Our AI Services</Title>
          <Paragraph>
            Unlock the potential of advanced machine learning, natural language
            processing, and predictive analytics. Our services include:
          </Paragraph>
        </div>
        <div>
          <SERVICE_ITEMS title={} description={} icon={} />
        </div>
      </Container>
    </section>
  );
};
