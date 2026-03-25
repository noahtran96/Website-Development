import type { FC } from "react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { BRAND_LOGOS } from "../../constants";
import type { BrandLogo } from "../../constants";

export const Brands: FC = () => {
  return (
    <section>
      <Container className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <Title>Trusted by Industry Leaders</Title>
        </div>
        <div>
          {BRAND_LOGOS.map((logo: BrandLogo) => (
            <div key={logo.id}>
              <img src={`assets/logos/${logo.name}.png`} alt={logo.alt} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
