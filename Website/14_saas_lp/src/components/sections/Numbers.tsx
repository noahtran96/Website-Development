import type { FC } from "react";
import { Container } from "../shared/Container";

export const Numbers: FC = () => {
  return (
    <section className="relative mt-12 md:mt-16">
      <Container className="align-center flex justify-center">
        <div className="bg-box-bg border-box-border shadow-box-shadow divide-box-border mx-auto grid max-w-5xl grid-cols-2 rounded-3xl p-5 shadow-lg sm:p-6 sm:py-8 md:grid-cols-4 md:divide-x lg:mx-0">
          <div className="px-5 text-center">
            <h2 className="text-heading-1 text-xl font-semibold sm:text-2xl md:text-4xl">
              100+
            </h2>
            <p className="text-heading-3 mt-2">AI Models Implemented</p>
          </div>
          <div className="px-5 text-center">
            <h2 className="text-heading-1 text-xl font-semibold sm:text-2xl md:text-4xl">
              250+
            </h2>
            <p className="text-heading-3 mt-2">Enterprise Clients</p>
          </div>
          <div className="px-5 text-center">
            <h2 className="text-heading-1 text-xl font-semibold sm:text-2xl md:text-4xl">
              99.9%
            </h2>
            <p className="text-heading-3 mt-2">Uptime Guarantee</p>
          </div>
          <div className="px-5 text-center">
            <h2 className="text-heading-1 text-xl font-semibold sm:text-2xl md:text-4xl">
              10+
            </h2>
            <p className="text-heading-3 mt-2">Years of Innovation</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
