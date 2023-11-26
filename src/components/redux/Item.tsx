import shortener from "@/hooks/Meshparametershortener";
import { Card } from "@/components/ui/card";
import { Settings, Trash2 } from "lucide-react";

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

const Item = ({ each, handleDelete, handleSetting }: propsType) => {
  return (
    <Card className="w-full border-none p-2 [&>*]:m-2 [&>*]:border-transparent [&>div]:text-center [&>p]:w-[80px] [&>*]:uppercase grid grid-cols-9 justify-around items-center">
      <Card>{shortener(each.size)}</Card>
      <Card>{shortener(each.shape)}</Card>
      <Card>{each.positionX}</Card>
      <Card>{each.positionY}</Card>
      <p
        style={{ borderBottom: `4px solid ${each.color1}` }}
        className="w-full col-span-2 border-transparent"
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
};

export default Item;
