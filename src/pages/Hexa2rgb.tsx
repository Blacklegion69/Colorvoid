import Fullscreen from "@/components/custom/Fullscreen";
import Gradienttext from "@/components/custom/Gradienttext";

const Hexa2rgb = () => {
  return (
    <Fullscreen className="flex justify-center items-center flex-col relative">
      <Gradienttext className="text-5xl leading-[70px] text-center aquino py-5 stroke">
        Hexa2rgb
      </Gradienttext>
    </Fullscreen>
  );
};

export default Hexa2rgb;
