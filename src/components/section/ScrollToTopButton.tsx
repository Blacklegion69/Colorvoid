import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Gradienttext from "@/components/custom/Gradienttext";

type propsType = {
  children: React.ReactNode;
  className?: string;
};

const ScrollToTopButton = ({ children, className }: propsType) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScrollToTop();
  }, [children]);

  return (
    <Button
      className={cn(
        "dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-700 dark:to-slate-900",
        className,
      )}
      onClick={handleScrollToTop}
    >
      <Gradienttext>{children || "Back to top"}</Gradienttext>
    </Button>
  );
};

export default ScrollToTopButton;
