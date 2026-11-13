import type { FC } from "react";
import { Paragraph } from "../shared/Paragraph";

interface InfoProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const Info: FC<InfoProps> = ({ title, description, children }) => {
  return (
    <div className="border-box-border bg-box-bg shadow-box-shadow relative overflow-hidden rounded-3xl border p-5 shadow-lg sm:p-6 lg:p-8">
      <div className="bg:body text-heading-1 relative w-max rounded-xl p-3">
        {children}
      </div>
      <h2 className="text-heading-2 relative w-max font-semibold md:text-xl">
        {title}
      </h2>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};
