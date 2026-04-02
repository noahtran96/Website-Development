import type { FC } from "react";
import { TESTIMONIAL_ITEMS, type TestimonialItem } from "../constants";

export const Testimonials: FC = () => {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      {/* testimonial outer box */}
      <div className="max-w-7xl mx-auto">
        {/* testimonial inner box */}
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* left side - header */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            {/* headline text */}
            <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              What developers are saying about us
            </h2>
            {/* description */}
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Everything you need to build, test, and deploy applications with
              AI-powered development tools.
            </p>
          </div>

          {/* right side - testimonial content */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-6 sm:space-y-8">
              {TESTIMONIAL_ITEMS.map(
                (testimonial: TestimonialItem, key: number) => (
                  <div
                    key={key}
                    className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl"
                  >
                    {/* testimonial block */}
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      {/* testimonial block - left side */}
                      <div className="flex-shrink-0">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                          "
                        </div>
                      </div>
                      {/* testimonial block - right side */}
                      <div className="flex-grow">
                        {/* content */}
                        <p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                          {testimonial.content}
                        </p>
                        {/* image, name and role */}
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          {/* image */}
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                          />
                          {/* name and role */}
                          <div>
                            {/* name */}
                            <h4 className="font-semibold text-white text-sm sm:text-base">
                              {testimonial.name}
                            </h4>
                            {/* role */}
                            <p className="test-xs sm:text-sm text-gray-400">
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
