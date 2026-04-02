import type { FC } from "react";
import { PRICING_PLANS, type PricingPlan } from "../constants";
import { Star } from "lucide-react";

export const Pricing: FC = () => {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* pricing headline */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day
            free trial.
          </p>
        </div>

        {/* pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
          {PRICING_PLANS.map((plan: PricingPlan, key: number) => (
            <div
              key={key}
              className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${plan.mostPopular ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105" : "border-slate-800 hover:border-slate-700"}`}
            >
              {/* most popular pricing plan decoration tag */}
              {/* most popular tag outer box */}
              {plan.mostPopular && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                  {/* most popular tag inner box */}
                  <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    {/* icon */}
                    <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-white" />
                    {/* text */}
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
