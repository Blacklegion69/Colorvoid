import React from "react";
import { cn } from "@/lib/utils";

type propsType = {
  children: React.ReactNode;
  className?: string;
};

const Gradienttext = ({ children, className }: propsType) => {
  return (
    <div className={cn("font-bold z-10 gradient-text", className)}>
      {children}
    </div>
  );
};

export default Gradienttext;
