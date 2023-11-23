import Fullscreen from "@/components/custom/Fullscreen";
import Gradienttext from "@/components/custom/Gradienttext";

const Notfound = () => {
  return (
    <Fullscreen className="flex justify-center items-center flex-col relative">
      <Gradienttext className="text-5xl leading-[70px] text-center aquino py-5 stroke">
        Notfound
      </Gradienttext>
    </Fullscreen>
  );
};

export default Notfound;
