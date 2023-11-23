import { Progress } from "@/components/ui/progress";
import React, { useState, useEffect } from "react";
import Gradienttext from "@/components/custom/Gradienttext";
import { Settings } from "lucide-react";

type propsType = {
  index: number;
};

const Progressbars = ({ index }: propsType) => {
  const [fill, setFill] = useState(Math.floor(Math.random() * 100));

  useEffect(() => {
    const interval = setInterval(() => {
      setFill(Math.floor(Math.random() * 100));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Progress
      className={`w-4/5 ${
        index % 2 === 0 ? "rotate-180" : ""
      } dark:bg-gradient-to-tl dark:from-blue-500 dark:via-green-200 dark:to-green-500 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500`}
      value={fill}
    />
  );
};

const Progressanimation = () => {
  const count = "x".repeat(30).split("");
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full blur-lg flex gap-y-1 justify-center flex-col items-center">
        {count.map((d, id) => {
          return (
            <React.Fragment key={id + d}>
              <Progressbars index={id} />
            </React.Fragment>
          );
        })}
      </div>
      <div className="absolute z-10 text-4xl gap-y-4  flex justify-center items-center flex-col">
        <Gradienttext className="aquino stroke">Built with</Gradienttext>
        <Gradienttext className="aquino stroke">Advance</Gradienttext>
        <Gradienttext className="aquino stroke">Mechanism</Gradienttext>
        <Settings className="text-4xl" />
      </div>
    </div>
  );
};
export default Progressanimation;
