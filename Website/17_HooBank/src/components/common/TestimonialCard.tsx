import { quotes } from "../../assets";
import type { Testimonial } from "../../constants";

export const TestimonialCard = ({ content, name, title, img }: Testimonial) => {
  return (
    <div className="feedback-card my-5 mr-0 flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-12 sm:mr-5 md:mr-10">
      {/* quote icon */}
      <img
        src={quotes}
        alt="Double quotes icon"
        className="h-[27px] w-[42px] object-contain"
      />
      {/* testimonial content */}
      <p className="my-10 text-[18px] leading-[32px] font-normal text-white">
        {content}
      </p>
      {/* testimonial details - image + name + role */}
      <div className="flex flex-row">
        {/* image */}
        <img src={img} alt={name} className="h-[48px] w-[48px] rounded-full" />
        {/* name + role container */}
        <div className="ml-4 flex flex-col">
          {/* name */}
          <h4 className="text-[20px] leading-[32px] font-semibold text-white">
            {name}
          </h4>
          {/* role */}
          <p className="text-dimWhite text-[16px] leading-[24px] font-normal">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
