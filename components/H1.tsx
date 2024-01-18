import React, { ReactNode } from "react";

const H1 = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
      {children}
    </h1>
  );
};

export default H1;