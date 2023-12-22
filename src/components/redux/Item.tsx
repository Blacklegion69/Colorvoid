import shortener from "@/hooks/Meshparametershortener";
import { Card } from "@/components/ui/card";
import { Settings, Trash2 } from "lucide-react";
import { block } from "million/react";

type propsType = {
  each: {
    colorid: string;
    size: string;
    shape: string;
    positionX: number;
    positionY: number;
    color1: string;
    endingPoint: number;
  };
  handleDelete: (value: string) => void;
  handleSetting: (value: string) => void;
};

const Item = block(({ each, handleDelete, handleSetting }: propsType) => {
  return (
    <Card className="w-full rounded-none p-2 [&>*]:m-2 [&>*]:border-transparent [&>div]:text-center [&>p]:w-[80px] [&>*]:uppercase grid grid-cols-9 justify-around items-center">
      <Card>{shortener(each.size)}</Card>
      <Card>{shortener(each.shape)}</Card>
      <Card>{each.positionX}</Card>
      <Card>{each.positionY}</Card>
      <p
        style={{ border: `4px solid ${each.color1}` }}
        className="w-full rounded font-bold col-span-2 border-transparent"
      >
        {each.color1}
      </p>
      <Card>{each.endingPoint}</Card>
      <Settings
        onClick={() => handleSetting(each.colorid)}
        className="m-auto"
      />
      <Trash2
        onClick={() => handleDelete(each.colorid)}
        className="text-red-600"
      />
    </Card>
  );
});

export default Item;
