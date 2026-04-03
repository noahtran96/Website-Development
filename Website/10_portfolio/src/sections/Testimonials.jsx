import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Pedro is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Pedro was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Pedro's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Not only is Pedro technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  const previous = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };
  return (
    <section id="testimonials" className="relative overflow-hidden py-32">
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
                "{testimonials[activeIndex].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="ring-primary/20 h-14 w-14 rounded-full object-cover ring-2"
                />
                <div className="flex items-center gap-4">
                  <div className="font-semibold">
                    {testimonials[activeIndex].author}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {testimonials[activeIndex].role}
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
                {testimonials.map((_, index) => (
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
