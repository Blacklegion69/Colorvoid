import { useSelector } from "react-redux";
import { meshSelector } from "@/features/mesh/meshSlice";
import Canvas from "@/components/custom/Canvas";
import Copy from "@/components/custom/Copy";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dices } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateFull } from "@/features/mesh/meshSlice";
import { ScrollArea } from "@/components/ui/scroll-area";

const Displayslice = () => {
  const { background } = useSelector(meshSelector);
  const dispatch = useDispatch();

  return (
    <Card className="w-full border-none bg-transparent flex justify-center flex-col items-center relative">
      <Card className="w-full bg-transparent border-none relative pb-3">
        <Canvas filename="Colorvoid-gradient">
          <Card
            style={{ backgroundImage: background }}
            className="w-full h-[190px] rounded shadow-lg"
          ></Card>
        </Canvas>
        <Button
          onClick={() => dispatch(updateFull())}
          className="font-bold mb-3 absolute right-0 bottom-0"
        >
          <Dices className="mx-1" /> Random
        </Button>
      </Card>
      <Card className="w-full rounded my-2 p-2 flex justify-between items-center relative">
        <ScrollArea className="text-xs overflow-y-scroll max-h-[30px]">
          {background}
        </ScrollArea>
        <Copy text={JSON.stringify(background)} />
      </Card>
    </Card>
  );
};

export default Displayslice;
