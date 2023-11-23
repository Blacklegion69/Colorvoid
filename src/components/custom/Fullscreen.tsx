import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type propsType = {
  children: React.ReactNode;
  className?: string;
};

const Fullscreen = ({ children, className }: propsType) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.7,
          ease: [0.6, -0.05, 0.01, 0.99],
        },
      }}
      className={cn(
        "mesh dark:mesh-dark overflow-hidden top-0 w-full min-h-screen relative",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export default Fullscreen;
