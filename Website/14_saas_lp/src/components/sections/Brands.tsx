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
        <div className="flex justify-center flex-wrap gap-4">
          {BRAND_LOGOS.map((logo: BrandLogo) => (
            <div
              key={logo.id}
              className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
            >
              <img
                src={`assets/logos/${logo.name}.png`}
                alt={logo.alt}
                width="100"
                height="60"
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
