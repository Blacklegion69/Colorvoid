import { AlignJustify, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
// import Gradienttext from "@/components/custom/Gradienttext";
import React from "react";

const SHEET_SIDES = ["bottom"] as const;

type propsType = {
  className: string;
};
export default function Menu({ className }: propsType) {
  const menooption = [
    {
      title: "About me",
      path: "/home/aboutme",
    },
    {
      title: "Colors",
      path: "/home/colors",
    },
    {
      title: "Palette",
      path: "/home/palette",
    },
    {
      title: "Gradient Generators",
      path: "/home/gradientgenerators",
    },
    {
      title: "Converters",
      path: "/home/converters",
    },
    {
      title: "Home",
      path: "/",
    },
  ];

  return (
    <div className={cn("grid grid-cols-2 gap-2", className)}>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent className="pt-10" side={side}>
            {menooption.map((data, id) => {
              return (
                <React.Fragment key={id}>
                  <SheetClose asChild>
                    <Link
                      className="flex gap-x-2 justify-center rounded my-5 items-center"
                      to={data.path}
                    >
                      <Activity />
                      <div className="font-bold py-2 text-2xl text-transparent bg-clip-text bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500">
                        {data.title}
                      </div>
                    </Link>
                  </SheetClose>
                  <Separator />
                </React.Fragment>
              );
            })}
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
