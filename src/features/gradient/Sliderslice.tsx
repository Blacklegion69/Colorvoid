import { Input } from "@/components/ui/input";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Minimize2, Dices, Expand, BadgePlus } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSelector, useDispatch } from "react-redux";
import { gradientSelector } from "@/features/gradient/gradientSlice";
import {
  setRandomcolor,
  setColor,
  setRotation,
} from "@/features/gradient/gradientSlice";

const Sliderslice = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { color, rotation } = useSelector(gradientSelector);
  const dispatch = useDispatch();
  console.log({ color, dispatch });
  return (
    <Card className="w-full p-2 rounded shadow-md">
      <Card className="w-full flex justify-between items-center">
        <Card></Card>
        <Card className="m-2">
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Minimize2 /> : <Expand className="text-2xl" />}
            {isOpen ? "Close" : ""}
          </Button>
        </Card>
      </Card>

      {isOpen ? (
        <>
          <Card className="w-full my-3">
            <ScrollArea className="w-full max-h-[100px]">
              <Card className="w-full gap-5 grid grid-cols-3 gap-2 justify-center items-center ">
                <div>#677765</div>
              </Card>
            </ScrollArea>
          </Card>

          <Card className="w-full my-2 grid grid-cols-2 gap-2">
            <Card>
              <Card className="pl-4 font-bold">Select color:</Card>
              <Input
                onChange={(e: any) =>
                  dispatch(setColor({ color: e.target.value }))
                }
                value={color}
                type="color"
              />
            </Card>
            <Card>
              <Card className="pl-4 font-bold">Type color:</Card>
              <Input
                value={color}
                onChange={(e: any) =>
                  dispatch(setColor({ color: e.target.value }))
                }
                className="font-bold"
                type="text"
              />
            </Card>
          </Card>
          <Card className="w-full my-2 gap-2 flex items-center">
            <Button
              onClick={() => dispatch(setRandomcolor())}
              className="w-4/5 font-bold text-xl"
            >
              <Dices className="mx-2" /> Random
            </Button>
            <Button className="w-2/5 font-bold text-xl">
              <BadgePlus className="mx-2" /> Add
            </Button>
          </Card>
          <Card className="w-full mt-6 flex justify-between items-center flex-col">
            <Card className="w-full font-bold text-2xl">Rotation :</Card>
            <Card className="w-full flex justify-between items-center">
              <CardHeader className="w-[90px] text-center">
                {rotation}
              </CardHeader>
              <Slider
                onChange={(e: any) =>
                  dispatch(setRotation({ rotation: e.tarval.value }))
                }
                value={[rotation]}
                defaultValue={[rotation]}
                min={0}
                max={360}
                step={0.01}
              />
            </Card>
          </Card>
        </>
      ) : (
        ""
      )}
    </Card>
  );
};

export default Sliderslice;
