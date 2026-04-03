import type { FC } from "react";
import { Paragraph } from "../shared/Paragraph";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Service: FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <div className="border-box-border bg-box-bg shadow-box-shadow relative overflow-hidden rounded-3xl border p-5 shadow-lg sm:p-6 lg:p-8">
      <div className="bg-body text-heading-1 relative w-max rounded-xl p-3">
        {icon}
      </div>
      <div className="relative mt-6 space-y-4">
        <h2 className="text-heading-2 text-lg font-semibold md:text-xl">
          {title}
        </h2>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
};
