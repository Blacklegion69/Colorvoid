import Fullscreen from "@/components/custom/Fullscreen";
import Gradienttext from "@/components/custom/Gradienttext";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

const Gradientgenerators = () => {
  const data = [
    {
      title: "Generate gradient color",
      description:
        "Generate awesome looking gradient background with premium quality tool",
      path: "/home/gradientgenerators/gradient",
    },
    {
      title: "Generate mesh color",
      description:
        "Generate awesome looking mesh gradient with premium quality user first tool",
      path: "/home/gradientgenerators/mesh",
    },
  ];
  return (
    <Fullscreen className="flex justify-center items-center flex-col relative">
      <Gradienttext className="text-5xl text-center my-2 aquino py-5 stroke">
        Gradient Generators
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

export default Gradientgenerators;
