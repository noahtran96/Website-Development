import { assets } from "@/assets/assets";

export const Companies = () => {
  return (
    <div className="pt-16">
      <p className="text-base text-gray-500">Trusted by learners from</p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-6 md:mt-10 md:gap-16">
        <img
          src={assets.microsoft_logo}
          alt="Microsoft logo"
          className="w-20 md:w-28"
        />
        <img
          src={assets.walmart_logo}
          alt="Walmart logo"
          className="w-20 md:w-28"
        />
        <img
          src={assets.accenture_logo}
          alt="accenture logo"
          className="w-20 md:w-28"
        />
        <img
          src={assets.adobe_logo}
          alt="Adobe logo"
          className="w-20 md:w-28"
        />
        <img
          src={assets.paypal_logo}
          alt="PayPal logo"
          className="w-20 md:w-28"
        />
      </div>
    </div>
  );
};
