import { Input } from "@/components/ui/input";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Minimize2, Dices, Expand, BadgePlus, XCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSelector, useDispatch } from "react-redux";
import { gradientSelector } from "@/features/gradient/gradientSlice";
import {
  setRandomcolor,
  setColor,
  setRotation,
  setColors,
  filterColors,
} from "@/features/gradient/gradientSlice";

const Sliderslice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { color, rotation, colors } = useSelector(gradientSelector);
  const dispatch = useDispatch();

  return (
    <Card className="w-full p-2 rounded shadow-md">
      {isOpen ? (
        <div className="w-full border-none flex justify-center items-center flex-col">
          <Card className="w-full border-none flex justify-between items-center flex-col">
            <Card className="w-full border-none font-bold text-2xl">
              Rotation :
            </Card>
            <Card className="w-full border-none flex justify-between items-center">
              <CardHeader className="w-[90px] text-center">
                {Math.abs(rotation)}
              </CardHeader>
              <Slider
                onValueChange={(e: any) =>
                  dispatch(setRotation({ rotation: e }))
                }
                value={[Math.abs(rotation)]}
                defaultValue={[Math.abs(rotation)]}
                min={0}
                max={360}
                step={0.25}
              />
            </Card>
          </Card>
          <Card className="w-full my-1">
            <Card className="font-bold m-2 text-xl border-none">Colors:</Card>
            <ScrollArea className="w-full my-1 overflow-y-scroll max-h-[80px]">
              <Card className="w-full border-none grid p-2 grid-cols-3 gap-2 justify-center items-center ">
                {colors.map((each) => {
                  return (
                    <Card
                      className="w-full flex p-1 justify-between items-center"
                      key={each.colorid}
                    >
                      <Card
                        style={{ borderLeft: `14px solid ${each.color}` }}
                        className="w-full rounded text-center border-none"
                      >
                        {each.color}
                      </Card>
                      <XCircle
                        onClick={() =>
                          dispatch(filterColors({ deleteid: each.colorid }))
                        }
                      />
                    </Card>
                  );
                })}
              </Card>
            </ScrollArea>
          </Card>
          <Card className="w-full my-1 border-none grid grid-cols-2 gap-2">
            <Card>
              <Card className="pl-4 font-bold border-none">Select color:</Card>
              <Input
                onChange={(e: any) =>
                  dispatch(setColor({ color: e.target.value }))
                }
                value={color}
                type="color"
              />
            </Card>
            <Card>
              <Card className="pl-4 border-none font-bold">Type color:</Card>
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
          <Card className="w-full gap-2 flex items-center">
            <Button
              onClick={() => dispatch(setRandomcolor())}
              className="w-4/5 font-bold text-xl"
            >
              <Dices className="mx-2" /> Random
            </Button>
            <Button
              onClick={() =>
                dispatch(
                  setColors({
                    newColor: { colorid: crypto.randomUUID(), color },
                  }),
                )
              }
              className="w-2/5 font-bold text-xl"
            >
              <BadgePlus className="mx-2" /> Add
            </Button>
          </Card>
        </div>
      ) : (
        ""
      )}
      <Card className="w-full flex justify-between items-center">
        {!isOpen ? (
          <Card className="w-full border-none">
            <Card className="w-full border-none flex justify-between items-center">
              <CardHeader className="min-w-[90px] text-center">
                {Math.abs(rotation)}
              </CardHeader>
              <Slider
                onValueChange={(e: any) =>
                  dispatch(setRotation({ rotation: e }))
                }
                value={[Math.abs(rotation)]}
                defaultValue={[Math.abs(rotation)]}
                min={0}
                max={360}
                step={0.25}
              />
            </Card>
          </Card>
        ) : (
          <Card></Card>
        )}
        <Card className="m-2">
          <Button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Minimize2 /> : <Expand className="text-2xl" />}
            {isOpen ? "Close" : ""}
          </Button>
        </Card>
      </Card>
    </Card>
  );
};

export default Sliderslice;
