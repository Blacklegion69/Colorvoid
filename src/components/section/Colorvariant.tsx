import useOpositeHexadecimal from "@/hooks/useOpositeHexadecimal";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { block } from "million/react";

type propsType = {
  color: string;
};

const Colorvariant = block(({ color }: propsType) => {
  const replaceDigitAtPosition = (
    originalString: string,
    position: number,
    replacementDigit: string,
  ) => {
    if (position >= 0 && position < originalString.length) {
      const modifiedString =
        originalString.substring(0, position) +
        replacementDigit +
        originalString.substring(position + 1);
      return modifiedString;
    } else {
      console.log("Invalid position.");
      return originalString;
    }
  };
  const Eachvariant = (c: string, position: number) => {
    const code = c.replace("#", "");
    const hexacode = "0123456789abcdef".split("");
    const variant = [];
    for (let i = 0; i < hexacode.length; i++) {
      const slice = replaceDigitAtPosition(code, position, hexacode[i]);
      variant.push("#" + slice);
    }
    return variant;
  };
  const fullVariant = (color: string) => {
    const final = [];
    for (let i = 0; i < 6; i++) {
      final.push(Eachvariant(color, i));
    }
    return final;
  };

  const colors = [
    color.replace("#", ""),
    useOpositeHexadecimal(color).replace("#", ""),
  ];
  const variant = colors.map((d) => {
    return fullVariant(d);
  });
  const data = [...variant[0], ...variant[1]];

  return (
    <div className="w-full flex justify-center items-center flex-col mt-10 relative">
      <div className="text-4xl aquino">Colorvariant</div>
      <Separator className="my-4" />
      <div className="w-full grid grid-cols-3 p-3 gap-3 justify-between items-center">
        {data.map((each, id) => {
          return (
            <div
              key={id}
              className="w-full flex justify-center items-center flex-col relative"
            >
              {each.map((d, i) => {
                return (
                  <Link
                    to={"/home/colors/" + d.replace("#", "")}
                    style={{
                      backgroundColor: d,
                      color: useOpositeHexadecimal(d),
                    }}
                    key={i + d}
                    className={`w-full shadow-md ${
                      d === color ? "border-2 border-orange-500" : ""
                    } overflow-hidden p-2 mx-4 my-1 px-4 rounded text-center font-bold`}
                  >
                    {d}
                    <Separator
                      style={{ backgroundColor: useOpositeHexadecimal(d) }}
                    />
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Colorvariant;
