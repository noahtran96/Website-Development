import type { FC } from "react";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Button } from "../shared/Button";

export const CallToAction: FC = () => {
  return (
    <section className="relative pb-20">
      <Container>
        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative z-10 mx-auto max-w-xl px-6 py-8 text-center md:max-w-2xl md:px-8 md:py-10">
            <h1 className="text-heading-1 text-3xl font-bold sm:text-4xl md:text-5xl">
              Quick Start your{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                own AI
              </span>{" "}
              Business
            </h1>
            <Paragraph className="pt-10">
              Leverage our AI-powered platform to revolutionize your digital
              marketing efforts. Get data-driven insights and automation at your
              fingertips.
            </Paragraph>
            <div className="mx-auto max-w-md pt-10 sm:max-w-xl dark:text-white">
              <Button>Get In Touch</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
