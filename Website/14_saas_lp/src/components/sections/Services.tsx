import type { FC } from "react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { SERVICE_ITEMS } from "../../constants";
import type { ServiceItem } from "../../constants";
import { Service } from "../cards/Service";

export const Services: FC = () => {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <Title>Our AI Services</Title>
          <Paragraph>
            Unlock the potential of advanced machine learning, natural language
            processing, and predictive analytics. Our services include:
          </Paragraph>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SERVICE_ITEMS.map((service: ServiceItem, index: number) => (
            <Service
              title={service.title}
              description={service.description}
              icon={service.icon}
              key={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
