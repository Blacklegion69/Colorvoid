import Fullscreen from "@/components/custom/Fullscreen";
import Colorvariant from "@/components/section/Colorvariant";
import Gradienttext from "@/components/custom/Gradienttext";
import useHexadecimal from "@/hooks/useHexadecimal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hexa2rgb = () => {
  const [code, setCode] = useState(useHexadecimal());

  const handleChange = (e: any) => {
    setCode(e.target.value);
  };

  return (
    <Fullscreen className="flex px-2 pt-20 items-center flex-col relative">
      <Gradienttext className="text-5xl leading-[70px] text-center aquino py-5 stroke">
        Hexa2rgb
      </Gradienttext>
      <div className="w-full gap-x-2 flex justify-between items-center">
        <Input
          type="text"
          value={[code]}
          defaultValue={[code]}
          onChange={handleChange}
        />
        <Button>Search</Button>
      </div>
      <Colorvariant color={code} />
    </Fullscreen>
  );
};

export default Hexa2rgb;
