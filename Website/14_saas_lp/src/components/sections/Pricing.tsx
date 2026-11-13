import type { FC } from "react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";
import { Paragraph } from "../shared/Paragraph";
import { PRICING_PLANS } from "../../constants";
import type { PricingPlan } from "../../constants";
import { Button } from "../shared/Button";

export const Pricing: FC = () => {
  return (
    <section id="pricing" className="py-5">
      <Container className="text-center">
        <Title>Pricing</Title>
        <Paragraph className="mt-4">
          Choose the plan that's right for your business.
        </Paragraph>
      </Container>
      <Container className="mt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PRICING_PLANS.map((plan: PricingPlan, index: number) => (
            <div key={index} className="group relative h-full">
              <div className="h-full rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 p-1">
                <div className="bg-box-bg border-box-border shadow-box-shadow relative flex h-full flex-col rounded-3xl border p-8 shadow-lg">
                  {plan.bestValue && (
                    <div className="bg-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase">
                      Best Value
                    </div>
                  )}
                  <h3 className="text-heading-1 text-2xl font-semibold">
                    {plan.title}
                  </h3>
                  <p className="text-heading-1 mt-4 text-4xl font-bold">
                    {plan.price}
                  </p>
                  <ul className="text-heading-3 mt-6 flex-1 space-y-3 text-left">
                    {plan.features.map(
                      (feature: string, indexFeatures: number) => (
                        <li
                          key={indexFeatures}
                          className="flex items-center gap-2"
                        >
                          <span className="text-primary">✅</span>
                          <span>{feature}</span>
                        </li>
                      ),
                    )}
                  </ul>
                  <div className="mt-8">
                    <Button className="w-full transform text-white transition-transform duration-300 hover:scale-105">
                      Choose Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
