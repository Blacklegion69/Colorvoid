import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dices, BadgePlus } from "lucide-react";

const Addslice = () => {
  return (
    <Card className="w-full p-2 flex justify-center items-center flex-col relative">
      <Card></Card>
      <Card className="w-full border-none bg-transparent gap-x-2 flex justify-between items-center relative">
        <Button className="w-4/5 font-bold text-xl">
          <Dices className="mx-2" />
          Random
        </Button>
        <Button className="w-2/5 font-bold text-xl">
          <BadgePlus className="mx-2" />
          Add
        </Button>
      </Card>
    </Card>
  );
};

export default Addslice;
