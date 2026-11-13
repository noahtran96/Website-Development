import type { FC } from "react";
import { TESTIMONIAL_ITEMS, type TestimonialItem } from "../constants";

export const Testimonials: FC = () => {
  return (
    <section
      id="testimonials"
      className="relative px-10 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      {/* testimonial outer box */}
      <div className="mx-auto max-w-7xl">
        {/* testimonial inner box */}
        <div className="flex flex-col items-start gap-8 sm:gap-12 lg:flex-row lg:gap-16">
          {/* left side - header */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            {/* headline text */}
            <h2 className="mb-4 text-5xl font-bold sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              What developers are saying about us
            </h2>
            {/* description */}
            <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-lg">
              Everything you need to build, test, and deploy applications with
              AI-powered development tools.
            </p>
          </div>

          {/* right side - testimonial content */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 sm:space-y-8">
              {TESTIMONIAL_ITEMS.map(
                (testimonial: TestimonialItem, key: number) => (
                  <div
                    key={key}
                    className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm sm:rounded-2xl sm:p-6"
                  >
                    {/* testimonial block */}
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      {/* testimonial block - left side */}
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl lg:text-4xl">
                          "
                        </div>
                      </div>
                      {/* testimonial block - right side */}
                      <div className="flex-grow">
                        {/* content */}
                        <p className="mb-3 text-base leading-relaxed text-white sm:mb-4 sm:text-lg">
                          {testimonial.content}
                        </p>
                        {/* image, name and role */}
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          {/* image */}
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                          />
                          {/* name and role */}
                          <div>
                            {/* name */}
                            <h4 className="text-sm font-semibold text-white sm:text-base">
                              {testimonial.name}
                            </h4>
                            {/* role */}
                            <p className="test-xs text-gray-400 sm:text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
