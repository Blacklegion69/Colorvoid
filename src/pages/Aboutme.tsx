import Fullscreen from "@/components/custom/Fullscreen";
import Gradienttext from "@/components/custom/Gradienttext";

const Aboutme = () => {
  return (
    <Fullscreen className="flex justify-center items-center flex-col relative">
      <Gradienttext className="text-6xl aquino py-5 stroke">
        About me
      </Gradienttext>
    </Fullscreen>
  );
};

export default Aboutme;
