import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { meshSelector, deleteColor } from "@/features/mesh/meshSlice";
import { useSelector, useDispatch } from "react-redux";
import { Settings, Trash2, Expand } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import shortener from "@/hooks/Meshparametershortener";
import Header from "@/components/redux/Header";

const Listslice = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { colors } = useSelector(meshSelector);
  const dispatch = useDispatch();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 150,
      behavior: "smooth",
    });
  };

  const handleDelete = (deletedId: string) => {
    dispatch(deleteColor({ deletedId }));
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <Card className="w-full min-h-[80dvh] bg-transparent border-none flex items-center flex-col relative">
      <Card className="w-full bg-transparent border-none flex justify-between items-center relative">
        <Card></Card>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="font-bold m-2 text-xl"
        >
          {isOpen ? "Close" : <Expand />}
        </Button>
      </Card>
      <motion.div
        initial={{
          height: "500px",
          opacity: 1,
        }}
        animate={{
          height: isOpen ? "500px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
        className="w-full overflow-y-scroll"
      >
        <Header />
        <ScrollArea className="w-full m-0 p-0 gridbg dark:gridbg-dark max-h-[500px] overflow-y-scroll">
          <Card className="w-full m-0 p-0 bg-transparent border-none flex justify-center gap-y-2 items-center flex-col relative p-2">
            {colors.map((each, id) => {
              return (
                <Card
                  key={id}
                  className="w-full border-none p-2 [&>*]:m-2 [&>*]:border-transparent [&>div]:text-center [&>p]:w-[80px] [&>*]:uppercase grid grid-cols-9 justify-around items-center"
                >
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
                  <Settings className="m-auto" />
                  <Trash2
                    onClick={() => handleDelete(each.colorid)}
                    className="text-red-600"
                  />
                </Card>
              );
            })}
          </Card>
        </ScrollArea>
      </motion.div>
    </Card>
  );
};

export default Listslice;
