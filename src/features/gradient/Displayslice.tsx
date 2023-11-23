import { useSelector } from "react-redux";
import { gradientSelector } from "@/features/gradient/gradientSlice";
import Canvas from "@/components/custom/Canvas";
import Copy from "@/components/custom/Copy";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateFull } from "@/features/gradient/gradientSlice";
import { ScrollArea } from "@/components/ui/scroll-area";

const Displayslice = () => {
  const { background } = useSelector(gradientSelector);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex gap-y-3 py-3 justify-center flex-col items-center relative">
      <div className="w-full relative pb-3 shadow-md">
        <Canvas filename={JSON.stringify(background)}>
          <div
            style={{ background }}
            className="w-full h-[190px] rounded shadow-lg"
          ></div>
        </Canvas>
        <Button
          onClick={() => dispatch(updateFull())}
          className="font-bold mb-3 absolute right-0 bottom-0"
        >
          <Dices className="mx-1" /> Random
        </Button>
      </div>
      <Card className="w-full rounded my-2 p-2 flex justify-between items-center relative">
        <ScrollArea className="text-xs overflow-y-scroll max-h-[30px]">
          {background}
        </ScrollArea>
        <Copy text={JSON.stringify(background)} />
      </Card>
    </div>
  );
};

export default Displayslice;
