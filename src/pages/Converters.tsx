import Fullscreen from "@/components/custom/Fullscreen";
import Gradienttext from "@/components/custom/Gradienttext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Converters = () => {
  const data = [
    {
      title: "Hexadecimal to rgb",
      description:
        "Convert hexadecimal color code into a rgb color code only one step!",
      path: "/home/converters/hexa2rgb",
    },
    {
      title: "RGB to hexadecimal",
      description:
        "Convert RGB color code into a hexadecimal color code only one step!",
      path: "/home/converters/rgb2hexa",
    },
  ];
  return (
    <Fullscreen className="flex justify-center items-center flex-col relative">
      <Gradienttext className="text-5xl aquino py-5 stroke">
        Converters
      </Gradienttext>
      <div className="w-full flex justify-center p-2 gap-2 px-4 items-center flex-col">
        {data.map((card, id) => {
          return (
            <Link to={card.path}>
              <Card className="" key={id}>
                <CardHeader>
                  <CardTitle>{card.title}</CardTitle>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </Fullscreen>
  );
};

export default Converters;
