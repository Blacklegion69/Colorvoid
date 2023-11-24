import { Card } from "@/components/ui/card";
import { meshSelector } from "@/features/mesh/meshSlice";
import { useSelector } from "react-redux";
import {
  X,
  Pause,
  Settings,
  Palette,
  Ruler,
  Shapes,
  Move3D,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Listslice = () => {
  const { colors } = useSelector(meshSelector);

  const shortener = (data: string): string => {
    // closest-side || closest-corner || farthest-side || farthest-corner
    switch (data) {
      case "closest-side":
        return "cs";
      case "closest-corner":
        return "cc";
      case "farthest-side":
        return "fs";
      case "circle":
        return "ci";
      case "ellipse":
        return "el";
      default:
        return "fc";
    }
  };

  return (
    <Card className="w-full bg-transparent border-none flex justify-center items-center flex-col relative">
      <ScrollArea className="w-full max-h-[200px overflow-y-scroll]">
        <Card className="w-full bg-transparent border-none flex justify-center gap-y-2 items-center flex-col relative p-2">
          {colors.map((each) => {
            return (
              <Card>
                <Card className="w-full p-2 [&>*]:m-2 border-none [&>*]:m-auto [&>*]:border-none grid grid-cols-9 justify-center items-center relative">
                  <Card>
                    <Ruler />
                  </Card>
                  <Card>
                    <Shapes />
                  </Card>
                  <Card>
                    <X />
                  </Card>
                  <Card>
                    <Move3D />
                  </Card>
                  <Card className="col-span-2">
                    <Palette style={{ color: each.data.color1 }} />
                  </Card>
                  <Card>
                    <Pause />
                  </Card>
                </Card>
                <Card
                  key={each.colorid}
                  className="w-full border-none p-2 [&>*]:m-2 [&>*]:border-transparent [&>div]:text-center [&>p]:w-[80px] [&>*]:uppercase grid grid-cols-9 justify-around items-center"
                >
                  <Card>{shortener(each.data.size)}</Card>
                  <Card>{shortener(each.data.shape)}</Card>
                  <Card>{each.data.positionX}%</Card>
                  <Card>{each.data.positionY}%</Card>
                  <p className="col-span-2">{each.data.color1}</p>
                  <Card>{each.data.endingPoint}%</Card>
                  <Settings className="m-auto" />
                  <X className="m-auto" />
                </Card>
              </Card>
            );
          })}
        </Card>
      </ScrollArea>
    </Card>
  );
};

export default Listslice;
