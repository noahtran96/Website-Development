import type { FC } from "react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { BRAND_LOGOS } from "../../constants";
import type { BrandLogo } from "../../constants";

export const Brands: FC = () => {
  return (
    <section>
      <Container className="space-y-8">
        <div className="mx-auto max-w-3xl text-center">
          <Title>Trusted by Industry Leaders</Title>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {BRAND_LOGOS.map((logo: BrandLogo) => (
            <div
              key={logo.id}
              className="bg-body border-box-border group rounded-xl border p-4 sm:p-5"
            >
              <img
                src={`assets/logos/${logo.name}.png`}
                alt={logo.alt}
                width="100"
                height="60"
                className="h-7 w-auto grayscale duration-300 ease-linear group-hover:scale-105 group-hover:!grayscale-0 sm:h-10"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
