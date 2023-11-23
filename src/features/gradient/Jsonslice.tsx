import Canvas from "@/components/custom/Canvas";
import Copy from "@/components/custom/Copy";
import Gradienttext from "@/components/custom/Gradienttext";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { useSelector } from "react-redux";
import { gradientSelector } from "@/features/gradient/gradientSlice";

// @ts-ignore
import solarizedDarkAtom from "@/constant/solarized-dark-atom";

const Jsonslice = () => {
  const initialState = useSelector(gradientSelector);
  const json = JSON.stringify(initialState, null, 2);
  const inline = JSON.stringify(initialState);
  return (
    <div className="w-full my-4 px-4">
      <div className="w-full relative">
        <Gradienttext className="text-5xl aquino py-5 text-center">
          Json code
        </Gradienttext>
        <Canvas>
          <SyntaxHighlighter
            className="w-full rounded"
            language="json5"
            style={solarizedDarkAtom}
            showLineNumbers
            wrapLongLines
          >
            {json}
          </SyntaxHighlighter>
        </Canvas>
        <Copy className="absolute bottom-0 right-0" text={json} />
      </div>
      <SyntaxHighlighter
        className="w-full rounded"
        language="json5"
        style={solarizedDarkAtom}
        showLineNumbers
      >
        {inline}
      </SyntaxHighlighter>
      <Copy text={inline} />
    </div>
  );
};

export default Jsonslice;
