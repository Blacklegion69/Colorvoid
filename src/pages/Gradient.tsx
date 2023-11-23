import Fullscreen from "@/components/custom/Fullscreen";
import Gradienttext from "@/components/custom/Gradienttext";
import Gradientgenerator from "@/components/custom/Gradientgenerator";
import Jsonslice from "@/features/gradient/Jsonslice";

const Gradient = () => {
  return (
    <Fullscreen className="flex pt-20 items-center flex-col relative">
      <Gradienttext className="text-5xl text-center aquino py-5 stroke">
        Gradient
      </Gradienttext>
      <Gradientgenerator />
      <Jsonslice />
    </Fullscreen>
  );
};

export default Gradient;
