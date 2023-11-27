import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { shapeData, sizeData } from "@/constant/controllerData";

type propsType = {
  defaultValue: string;
  data: {
    value: string;
    label: string;
  }[];
  handleChange: (value: string) => void;
};

const Combo = ({ defaultValue, data, handleChange }: propsType) => {
  // console.log({ defaultValue, shapeData, sizeData });
  return (
    <RadioGroup
      // defaultValue={defaultValue}
      value={defaultValue}
      onValueChange={(e: any) => handleChange(e)}
      className="w-full grid grid-cols-2"
    >
      {data.map((d, id) => {
        return (
          <div key={id} className="flex items-center space-x-2">
            <RadioGroupItem value={d.value} id={d.value} />
            <Label htmlFor={d.value}>{d.label}</Label>
          </div>
        );
      })}
    </RadioGroup>
  );
};

export default Combo;
