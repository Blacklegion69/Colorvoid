import Displayslice from "@/features/mesh/Displayslice";
import Addslice from "@/features/mesh/Addslice";
import Listslice from "@/features/mesh/Listslice";
import { Card } from "@/components/ui/card";

const Meshgenerator = () => {
  return (
    <Card className="w-full my-10 gap-y-2 border-none bg-transparent flex justify-center items-center flex-col relative px-2">
      <Displayslice />
      <Addslice />
      <Listslice />
    </Card>
  );
};

export default Meshgenerator;
