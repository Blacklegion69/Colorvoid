import * as React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  meshSelector,
  deleteColor,
  selectItem,
} from "@/features/mesh/meshSlice";
import { useSelector, useDispatch } from "react-redux";
import { Expand } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/redux/Header";
import Item from "@/components/redux/Item";
import Controller from "@/features/mesh/Controller";

const Listslice = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSetting, setOpenSetting] = useState(false);
  const { colors } = useSelector(meshSelector);
  const dispatch = useDispatch();
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 150,
      behavior: "smooth",
    });
  };

  const handleSetting = (id: string) => {
    setOpenSetting(true);
    dispatch(selectItem({ selectedId: id }));
  };

  const handleDelete = (deletedId: string) => {
    dispatch(deleteColor({ deletedId }));
  };

  useEffect(() => {
    handleScrollToTop();
  }, []);

  return (
    <Card className="w-full min-h-[80dvh] bg-transparent border-none flex items-center flex-col relative">
      {openSetting && (
        <Card className="w-full backdrop-blur-lg rounded-none border-transparent bg-transparent z-30 overflow-hidden min-h-screen fixed top-0 flex justify-center items-center flex-col">
          <div className="w-full flex justify-center items-center flex-col relative">
            <Controller />
            <Button
              className="font-bold text-xl px-9 my-3"
              onClick={() => setOpenSetting(false)}
            >
              X
            </Button>
          </div>
        </Card>
      )}
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
          <Card className="w-full m-0 p-0 bg-transparent border-none flex justify-center items-center flex-col relative">
            {colors.map((each, id) => {
              return (
                <React.Fragment key={id}>
                  <Item
                    each={each}
                    handleDelete={handleDelete}
                    handleSetting={handleSetting}
                  />
                </React.Fragment>
              );
            })}
          </Card>
        </ScrollArea>
      </motion.div>
    </Card>
  );
};

export default Listslice;
