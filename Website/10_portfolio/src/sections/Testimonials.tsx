import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { TESTIMONIAL_ITEMS } from "../constants/testimonialItems";

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIAL_ITEMS.length);
  };
  const previous = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + TESTIMONIAL_ITEMS.length) % TESTIMONIAL_ITEMS.length,
    );
  };
  return (
    <section id="TESTIMONIAL_ITEMS" className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="bg-primary/5 absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-secondary-foreground animate-fade-in text-sm font-medium tracking-wider uppercase">
            What People Say
          </span>
          <h2 className="animate-fade-in animation-delay-100 text-secondary-foreground mt-4 mb-6 text-4xl font-bold md:text-5xl">
            Kind words from{" "}
            <span className="font-serif font-normal text-white italic">
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="mx-auto max-w-4xl">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass glow-border animate-fade-in animation-delay-200 rounded-3xl p-8 md:p-12">
              <div className="bg-primary absolute -top-4 left-8 flex h-12 w-12 items-center justify-center rounded-full">
                <Quote className="text-primary-foreground h-6 w-6" />
              </div>
              <blockquote className="mb-8 pt-4 text-xl leading-relaxed font-medium md:text-2xl">
                "{TESTIMONIAL_ITEMS[activeIndex].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={TESTIMONIAL_ITEMS[activeIndex].avatar}
                  alt={TESTIMONIAL_ITEMS[activeIndex].author}
                  className="ring-primary/20 h-14 w-14 rounded-full object-cover ring-2"
                />
                <div className="flex items-center gap-4">
                  <div className="font-semibold">
                    {TESTIMONIAL_ITEMS[activeIndex].author}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {TESTIMONIAL_ITEMS[activeIndex].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={previous}
                className="glass hover:bg-primary/10 hover:text-primary rounded-full p-3 transition-all"
              >
                <ChevronLeft />
              </button>
              <div className="flex gap-2">
                {TESTIMONIAL_ITEMS.map((_, index: number) => (
                  <button
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="glass hover:bg-primary/10 hover:text-primary rounded-full p-3 transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
