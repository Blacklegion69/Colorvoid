import Fullscreen from "@/components/custom/Fullscreen";
import Gradienttext from "@/components/custom/Gradienttext";
import Meshgenerator from "@/components/custom/Meshgenerator";
import Jsonslice from "@/features/mesh/Jsonslice";

const Mesh = () => {
  return (
    <Fullscreen className="flex pt-20 justify-between items-center flex-col relative">
      <Gradienttext className="text-5xl leading-[70px] text-center aquino py-5 stroke">
        Mesh
      </Gradienttext>
      <Meshgenerator />
      <Jsonslice />
    </Fullscreen>
  );
};

export default Mesh;
