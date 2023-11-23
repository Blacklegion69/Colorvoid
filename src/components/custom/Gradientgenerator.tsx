// import { Card } from "@/components/ui/card";
import Fullscreen from "@/components/custom/Fullscreen";
import Displayslice from "@/features/gradient/Displayslice";
import Counterslice from "@/features/gradient/Counterslice";
import Sliderslice from "@/features/gradient/Sliderslice";

const Gradientgenerator = () => {
  return (
    <Fullscreen className="px-3 flex items-center flex-col relative">
      <Displayslice />
      <Counterslice />
      <Sliderslice />
    </Fullscreen>
  );
};

export default Gradientgenerator;
