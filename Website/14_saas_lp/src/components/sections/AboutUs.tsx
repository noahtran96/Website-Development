import type { FC } from "react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { Info } from "../cards/Info";

export const AboutUs: FC = () => {
  return (
    <section id="about-us">
      <Container className="flex flex-col items-center gap-10 md:flex-row lg:gap-12">
        {/* Left Section */}
        <div className="w-full md:w-5/12 lg:w-1/2">
          <div className="relative h-80 w-full sm:h-96">
            <img
              src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="About Our Mission"
              className="relative z-10 h-full w-full rounded-3xl object-cover shadow-lg"
            />
          </div>
        </div>
        {/* Right Section */}
        <div className="flex w-full flex-col md:w-7/12 lg:w-1/2">
          <Title>About Our AI Solution</Title>
          <Paragraph>
            We are on a mission to empower businesses with transformative AI
            technology. Our team of experts combines industry-leading research
            with innovative algorithms to deliver a platform that adopts to your
            unique needs. Join us and lead the digital revolution in your
            industry.
          </Paragraph>
          <div className="grid max-w-3xl grid-cols-1 gap-4 pt-8 sm:grid-cols-2">
            <Info
              title="Mission"
              description="Our mission is to use AI for the good of humanity and the planet."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 sm:h-5 sm:w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
            <Info
              title="Vision"
              description="Our vision is to drive business innovation and growth."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 sm:h-5 sm:w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </Info>
          </div>
        </div>
      </Container>
    </section>
  );
};
