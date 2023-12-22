import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useSelector, useDispatch } from "react-redux";
import { gradientSelector } from "@/features/gradient/gradientSlice";
import {
  setNegativeRotation,
  setRepeating,
  setRepeatingunit,
  increaseRepeatingLength,
  decreaseRepeatingLength,
  increaseRepeatingLengthByCount,
  decreaseRepeatingLengthByCount,
} from "@/features/gradient/gradientSlice";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
  BadgePercent,
  Repeat2,
  DatabaseBackup,
  MonitorSmartphone,
  Minimize2,
  Expand,
} from "lucide-react";
import { block } from "million/react";

const Counterslice = block(() => {
  const [expend, setExpend] = useState(false);
  const { repeating, negativeRotation, repeatingUnit, repeatingLength } =
    useSelector(gradientSelector);
  const dispatch = useDispatch();

  const data = [
    {
      checkboxid: "repeating",
      label: "Repeating",
      status: repeating,
      handleChange: () => {
        dispatch(setRepeating({ repeating: !repeating }));
      },
    },
    {
      checkboxid: "negativeRotation",
      label: "Negative rotation(-)",
      status: negativeRotation,
      handleChange: () => {
        dispatch(setNegativeRotation({ negativeRotation: !negativeRotation }));
      },
    },
  ];

  return (
    <Card className="border-none w-full p-2 flex flex-col justify-center shadow-lg items-center relative">
      {expend ? (
        <>
          <Card className="border-none w-full my-2 font-bold ">Logic :</Card>
          <Card className="border-none w-full  flex flex-col">
            {data.map((d, id) => {
              return (
                <Card
                  key={id}
                  className="border-none w-full  my-1 flex items-center"
                >
                  <Checkbox
                    checked={d.status}
                    defaultChecked={d.status}
                    onCheckedChange={d.handleChange}
                    onClick={d.handleChange}
                    className="border-none mx-2 "
                    id={d.checkboxid}
                  />
                  <Label
                    className="border-none text-xl flex  justify-center items-center"
                    htmlFor={d.checkboxid}
                  >
                    {d.checkboxid === "repeating" ? (
                      <Repeat2 />
                    ) : (
                      <DatabaseBackup />
                    )}
                    <Card className="border-none mx-2 ">{d.label}</Card>
                  </Label>
                </Card>
              );
            })}
          </Card>
          {repeating ? (
            <>
              <Separator className="border-none my-4" />
              <Card className="border-none w-full font-bold ">
                Repeating unit:
              </Card>
              <RadioGroup
                className="border-none w-full text-2xl ml-4 my-2 flex flex-col"
                defaultValue={repeatingUnit}
                value={repeatingUnit}
                onValueChange={(e: any) =>
                  dispatch(setRepeatingunit({ repeatingUnit: e }))
                }
              >
                <Card className="border-none flex items-center space-x-2">
                  <RadioGroupItem value="px" id="r1" />
                  <Label
                    className="border-none text-xl flex justify-center items-center"
                    htmlFor="r1"
                  >
                    <MonitorSmartphone className="border-none mx-2" />
                    Pixel
                  </Label>
                </Card>
                <Card className="border-none flex items-center space-x-2">
                  <RadioGroupItem value="percent" id="r2" />
                  <Label
                    className="border-none text-xl flex justify-center items-center"
                    htmlFor="r2"
                  >
                    <BadgePercent className="border-none mx-2" />
                    Percent
                  </Label>
                </Card>
              </RadioGroup>
              <Card className="border-none w-full my-2 grid grid-cols-5 gap-2 justify-center items-center relative">
                <Button
                  onClick={() =>
                    dispatch(decreaseRepeatingLengthByCount({ count: 5 }))
                  }
                  className="border-none font-bold text-2xl "
                >
                  -5
                </Button>
                <Button
                  onClick={() => dispatch(decreaseRepeatingLength())}
                  className="border-none font-bold text-2xl "
                >
                  -1
                </Button>
                <Card className="border-none text-center text-2xl">
                  {repeatingLength}
                  {repeatingUnit === "px" ? "px" : "%"}
                </Card>
                <Button
                  onClick={() => dispatch(increaseRepeatingLength())}
                  className="border-none font-bold text-2xl "
                >
                  +1
                </Button>
                <Button
                  onClick={() =>
                    dispatch(increaseRepeatingLengthByCount({ count: 5 }))
                  }
                  className="border-none font-bold text-2xl "
                >
                  +5
                </Button>
              </Card>
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
      <Card className="border-none w-full p-2 font-bold text-right flex justify-between items-center">
        {!expend ? (
          <RadioGroup
            className="border-none flex justify-center items-center"
            defaultValue={repeatingUnit}
            value={repeatingUnit}
            onValueChange={(e: any) =>
              dispatch(setRepeatingunit({ repeatingUnit: e }))
            }
          >
            <Card className="border-none border-2 border-transparent  flex justify-center items-center gap-1 border-l-slate-900 border-r-slate-900 dark:border-l-slate-100 dark:border-r-slate-100 px-1">
              <Checkbox
                checked={repeating}
                defaultChecked={repeating}
                onCheckedChange={data[0].handleChange}
                onClick={data[0].handleChange}
                id="repeating"
              />
              <Label htmlFor="repeating">
                <Repeat2 />
              </Label>
            </Card>
            <Card className="border-none border-2 border-transparent  flex justify-center items-center gap-1 border-l-slate-900 border-r-slate-900 dark:border-l-slate-100 dark:border-r-slate-100 px-1">
              <Checkbox
                checked={negativeRotation}
                defaultChecked={negativeRotation}
                onCheckedChange={data[1].handleChange}
                onClick={data[1].handleChange}
                id="negativeRotation"
              />
              <Label htmlFor="negativeRotation">
                <DatabaseBackup />
              </Label>
            </Card>
            {repeating ? (
              <>
                <Card className="border-none border-2 border-transparent  flex justify-center items-center gap-1 border-l-slate-900 border-r-slate-900 dark:border-l-slate-100 dark:border-r-slate-100 px-1">
                  <RadioGroupItem value="px" id="r1" />
                  <Label htmlFor="r1">
                    <MonitorSmartphone />
                  </Label>
                </Card>
                <Card className="border-none border-2 border-transparent  flex justify-center items-center gap-1 border-l-slate-900 border-r-slate-900 dark:border-l-slate-100 dark:border-r-slate-100 px-1">
                  <RadioGroupItem value="percent" id="r2" />
                  <Label htmlFor="r2">
                    <BadgePercent />
                  </Label>
                </Card>
              </>
            ) : (
              ""
            )}
          </RadioGroup>
        ) : (
          <Card></Card>
        )}
        <Button onClick={() => setExpend(!expend)}>
          {expend ? <Minimize2 /> : <Expand />}
          {expend && "Close"}
        </Button>
      </Card>
    </Card>
  );
});

export default Counterslice;
