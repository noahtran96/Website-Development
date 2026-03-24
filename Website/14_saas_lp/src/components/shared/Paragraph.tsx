import type { FC } from "react";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export const Paragraph: FC<ParagraphProps> = ({ children, className = "" }) => {
  return <p className={`text-heading-3 md:text-lg ${className}`}>{children}</p>;
};
