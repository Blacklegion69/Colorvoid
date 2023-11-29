import Combo from "@/components/redux/Combo";
import { Card } from "@/components/ui/card";
import { useSelector, useDispatch } from "react-redux";
import { meshSelector, updatePositionX } from "@/features/mesh/meshSlice";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { shapeData, sizeData } from "@/constant/controllerData";

const Controller = () => {
  const { single, colors, selectedItem } = useSelector(meshSelector);
  const dispatch = useDispatch();

  const find = colors.filter((each) => {
    return each.colorid === selectedItem;
  });

  const { shape, size, color1, positionX, colorid, bg } = find[0];

  const handleBackground = () => {};
  const handleColor = () => {};
  const getShape = (value: string) => {
    console.log({ shape: value });
  };
  const getSize = (value: string) => {
    console.log({ value });
  };

  const handleX = (e: any) => {
    // console.log(e)

    dispatch(updatePositionX({ valuex: e }));
  };

  return (
    <Card className="w-full gap-y-2 px-2 py-4 flex justify-center items-center flex-col relative">
      <Card className="w-full text-center">
        {" "}
        This controller is too complicated so I will complete this in a separate
        project 😤
      </Card>
      <Card className="w-full p-2">ID:{colorid}</Card>
      <Card
        style={{
          backgroundColor: single,
          backgroundImage: bg,
        }}
        className="w-full h-[200px]"
      ></Card>
      <Card className="w-full border-transparent my-4 gap-x-2 p-2 flex justify-center items-center">
        <Card className="w-full border-none flex justify-center flex-col relative">
          <Card className="border-none font-bold bg-transparent p-2">
            Shape:
          </Card>
          <Combo
            handleChange={getShape}
            defaultValue={shape}
            data={shapeData}
          />
          <Card className="border-none font-bold bg-transparent p-2">
            Size:
          </Card>
          <Combo handleChange={getSize} defaultValue={size} data={sizeData} />
        </Card>
        <Card className="w-full border-none flex justify-center flex-col relative">
          <Card className="border-none font-bold bg-transparent p-2">
            Background:
          </Card>
          <Input type="color" onChange={handleBackground} value={single} />
          <Card className="border-none font-bold bg-transparent p-2">
            Color:
          </Card>
          <Input type="color" onChange={handleColor} value={color1} />
        </Card>
      </Card>

      <Card className="w-full border-none flex justify-center flex-col">
        <Slider
          className="mb-2"
          onValueChange={handleX}
          value={[positionX]}
          min={0}
          max={100}
          step={0.25}
        />
        {/*
          <Card
            key={id}
            className="w-full border-transparent flex justify-center items-center"
          >
            <Card className="w-full border-transparent">
              <Card className="border-none font-bold mt-2 text-xl">
                {each.label} :
              </Card>
              <Slider
                className="mb-2"
                onChange={(e:any) =>
                  each.action(e)
                }
                value={[each.value]}
                min={0}
                max={100}
                step={0.25}
              />
            </Card>
            <Card className="w-[100px] h-full text-center border-transparent">
              {each.value}
            </Card>
          </Card>
      */}
      </Card>
    </Card>
  );
};

export default Controller;
