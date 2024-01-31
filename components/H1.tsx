import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const H1 = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={twMerge(
        "text-3xl lg:text-6xl font-bold tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
