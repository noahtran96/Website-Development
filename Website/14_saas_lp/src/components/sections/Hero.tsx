import type { FC } from "react";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Button } from "../shared/Button";
import { Numbers } from "./Numbers";

export const Hero: FC = () => {
  return (
    <section className="relative pt-32 lg:pt-36">
      <Container className="flex flex-col gap-10 lg:flex-row lg:gap-12">
        {/* Glow */}
        <div className="absolute inset-y-0 w-full lg:right-0 lg:w-1/2">
          <span className="absolute top-24 -left-6 hidden h-24 w-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 opacity-60 blur-xl md:left-4 lg:top-28 lg:block lg:opacity-95"></span>
          <span className="bg-primary absolute right-4 bottom-12 h-24 w-24 rounded-3xl opacity-80 blur-xl"></span>
        </div>
        {/* Headline and Form */}
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:w-1/2 lg:max-w-none lg:flex-1 lg:items-start lg:py-8 lg:text-left">
          <h1 className="text-heading-1 text-3xl font-bold sm:text-4xl md:text-5xl xl:text-6xl">
            Empower Your Business{" "}
            <span className="ml-2 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              with AI
            </span>
          </h1>
          <Paragraph className="mt-8">
            Our AI SaaS platform seamlessly integrates with your existing
            workflows to deliver real-time insights, intelligent automation, and
            data-driven decision-making. Experience a future where your business
            runs smarter, faster, and more efficiently.
          </Paragraph>
          <div className="mx-auto mt-10 flex w-full max-w-md lg:mx-0">
            <div className="flex w-full flex-col gap-5 sm:flex-row">
              <form
                action="#"
                className="text-heading-3 shadow-box-shadow border-box-border bg-box-bg focus-within:bg-body focus-within:border-primary flex w-full items-center gap-3 rounded-full border py-1 pr-1 pl-6 shadow-lg ease-linear"
              >
                <span className="border-box-border min-w-max border-r pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  placeholder="johndoe@gmail.com"
                  className="background-transparent w-full py-3 outline-none"
                />
                <Button className="min-w-max text-white">
                  <span className="relative z-[5]">Get Started</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="relative mx-auto flex max-w-3xl flex-1 lg:mx-0 lg:h-auto lg:w-1/2 lg:max-w-none">
          <img
            src="https://images.pexels.com/photos/7773731/pexels-photo-7773731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero Image"
            width={2350}
            height={2359}
            className="max-h-96 rounded-3xl object-cover lg:absolute lg:h-full lg:max-h-none lg:w-full"
          />
        </div>
      </Container>
      {/* Stats */}
      <Numbers />
    </section>
  );
};
