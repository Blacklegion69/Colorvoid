import Combo from "@/components/redux/Combo";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const Controller = ({ id }: { id: string }) => {
  const shape = [
    {
      value: "circle",
      label: "Circle",
    },
    {
      value: "ellipse",
      label: "Ellipse",
    },
  ];
  const size = [
    {
      value: "farthest-side",
      label: "farthest-side",
    },
    {
      value: "closest-corner",
      label: "closest-corner",
    },
    {
      value: "closest-side",
      label: "closest-side",
    },
    {
      value: "farthest-corner",
      label: "farthest-corner",
    },
  ];

  return (
    <Card className="w-full px-2 py-4 flex justify-center items-center flex-col relative">
      <Card>ID:{id}</Card>
      <Card className="w-full my-4 gap-x-2 p-2 flex justify-center items-center">
        <Card className="w-full border-none flex justify-center flex-col relative">
          <Card className="border-none font-bold bg-transparent p-2">
            Shape:
          </Card>
          <Combo data={shape} />
          <Card className="border-none font-bold bg-transparent p-2">
            Size:
          </Card>
          <Combo data={size} />
        </Card>
        <Card className="w-full border-none flex justify-center flex-col relative">
          <Card className="border-none font-bold bg-transparent p-2">
            Background:
          </Card>
          <Input type="color" value="#ff00ff" />
          <Card className="border-none font-bold bg-transparent p-2">
            Color:
          </Card>
          <Input type="color" value="#f0f0f0" />
        </Card>
      </Card>

      <Card className="w-full border-none flex justify-center flex-col">
        <Card className="border-none font-bold mt-2 text-xl">PosotionX :</Card>
        <Slider className="mb-2" value={[50]} min={0} max={100} step={0.25} />
        <Card className="border-none font-bold mt-2 text-xl">PositionY :</Card>
        <Slider className="mb-2" value={[50]} min={0} max={100} step={0.25} />
        <Card className="border-none font-bold mt-2 text-xl">
          Endingpoint :
        </Card>
        <Slider className="mb-2" value={[50]} min={0} max={100} step={0.25} />
      </Card>
    </Card>
  );
};

export default Controller;
