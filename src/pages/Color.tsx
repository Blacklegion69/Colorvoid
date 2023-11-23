import Fullscreen from "@/components/custom/Fullscreen";
import Gradienttext from "@/components/custom/Gradienttext";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import useOpositeHexadecimal from "@/hooks/useOpositeHexadecimal";
import useHexaToRgb from "@/hooks/useHexaToRgb";
import useHexaToHsl from "@/hooks/useHexaToHsl";
import React from "react";
import Copy from "@/components/custom/Copy";
import Colorvariant from "@/components/section/Colorvariant";
import ScrollToTopButton from "@/components/section/ScrollToTopButton";
import featureslist from "@/constant/featureslist";
import Canvas from "@/components/custom/Canvas";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-ignore
import solarizedDarkAtom from "@/constant/solarized-dark-atom";

const Gradientbox = ({
  main,
  opposite,
}: {
  main: string;
  opposite: string;
}) => {
  const bg = `-webkit-linear-gradient(45deg,${main},${opposite})`;
  return (
    <div className="w-full p-2 bg-slate-900 rounded dark:bg-transparent">
      <div style={{ background: bg }} className="py-6 shadow-md rounded"></div>
      <Gradienttext className="flex mt-2">
        {bg}{" "}
        <Copy className="font-bold bg-slate-700 dark:bg-slate-100" text={bg} />
      </Gradienttext>
    </div>
  );
};

const Color = () => {
  const { id } = useParams();
  const colors = [
    {
      main: "#" + id,
      opposite: useOpositeHexadecimal("#" + id),
    },
    {
      main: useOpositeHexadecimal("#" + id),
      opposite: "#" + id,
    },
  ];
  const Duelcolor = () => {
    return (
      <Canvas className="w-full flex justify-center items-center ">
        {colors.map((d, i) => {
          return (
            <React.Fragment key={i}>
              <Card
                style={{ backgroundColor: d.main, color: d.opposite }}
                className="w-full rounded font-bold text-3xl py-14 text-center"
              >
                {d.main}
              </Card>
            </React.Fragment>
          );
        })}
      </Canvas>
    );
  };
  const Duelgradient = () => {
    return (
      <React.Fragment>
        {colors.map((color, i) => {
          return (
            <div className="my-2" key={i}>
              <Gradientbox main={color.main} opposite={color.opposite} />
            </div>
          );
        })}
      </React.Fragment>
    );
  };
  const TextShowcase = ({ c1 }: { c1: string }) => {
    return (
      <ul
        style={{ backgroundColor: c1, color: useOpositeHexadecimal(c1) }}
        className="w-full list-outside rounded pl-4 list-disc font-bold"
      >
        {featureslist.slice(0, 4).map((title, id) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    );
  };

  const c1 = colors[0].main;
  const c2 = colors[0].opposite;
  const data = {
    main: {
      hexadecimal: c1,
      rgb: useHexaToRgb(c1),
      hsl: useHexaToHsl(c1),
    },
    opposite: {
      hexadecimal: c2,
      rgb: useHexaToRgb(c2),
      hsl: useHexaToHsl(c2),
    },
  };
  const json = JSON.stringify(data, null, 2);
  return (
    <Fullscreen className="flex px-2 pt-20 items-center flex-col relative">
      <Gradienttext className="text-6xl aquino py-5">Color</Gradienttext>
      <Duelcolor />
      <Duelgradient />
      <div className="w-full relative">
        <Gradienttext className="text-5xl aquino py-5 text-center my-4">
          Json code
        </Gradienttext>
        <Canvas>
          <SyntaxHighlighter
            className="w-full rounded"
            language="json5"
            style={solarizedDarkAtom}
            showLineNumbers
          >
            {json}
          </SyntaxHighlighter>
        </Canvas>
        <Copy className="absolute bottom-0 right-0" text={json} />
      </div>
      <Colorvariant color={colors[0].main} />
      <Gradienttext className="text-5xl aquino py-5 text-center">
        Text visibility
      </Gradienttext>
      <div className="w-full flex justify-between items-center flex-col">
        <TextShowcase c1={colors[0].main} />
        <TextShowcase c1={colors[0].opposite} />
      </div>
      <ScrollToTopButton className="my-6">Back to top</ScrollToTopButton>
    </Fullscreen>
  );
};

export default Color;
