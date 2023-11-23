// import { Card } from "@/components/ui/card";
import Fullscreen from "@/components/custom/Fullscreen";
import Displayslice from "@/features/gradient/Displayslice";
import Counterslice from "@/features/gradient/Counterslice";

const Gradientgenerator = () => {
  return (
    <Fullscreen className="px-3 flex items-center flex-col relative">
      <Displayslice />
      <Counterslice />
    </Fullscreen>
  );
};

export default Gradientgenerator;
