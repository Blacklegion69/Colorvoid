import { Card } from "@/components/ui/card";
import { Pause, Palette, Ruler, Shapes } from "lucide-react";
import { cn } from "@/lib/utils";
import { block } from "million/react";

type propsType = {
  className?: string;
};

const Header = block(({ className }: propsType) => {
  return (
    <Card
      className={cn(
        "w-full p-2 [&>*]:m-2 border-none [&>*]:m-auto [&>*]:border-none grid grid-cols-9 justify-center items-center relative",
        className,
      )}
    >
      <Card>
        <Ruler />
      </Card>
      <Card>
        <Shapes />
      </Card>
      <Card className="font-bold text-xl">X</Card>
      <Card className="font-bold text-xl">Y</Card>
      <Card className="col-span-2">
        <Palette />
      </Card>
      <Card>
        <Pause />
      </Card>
    </Card>
  );
});

export default Header;
