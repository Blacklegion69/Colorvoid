import Canvas from "@/components/custom/Canvas";
import Copy from "@/components/custom/Copy";
import Gradienttext from "@/components/custom/Gradienttext";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { Card } from "@/components/ui/card";
// @ts-expect-error: This is a temporary workaround until the issue is resolved.
import solarizedDarkAtom from "@/constant/solarized-dark-atom";

const Json = ({ code }: { code: string }) => {
  const json = JSON.stringify(JSON.parse(code), null, 2);
  return (
    <Card className="border-none bg-transparent w-full">
      <Card className="border-none bg-transparent w-full relative">
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
      </Card>
      <SyntaxHighlighter
        className="w-full rounded"
        language="json5"
        style={solarizedDarkAtom}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
      <Copy text={code} />
    </Card>
  );
};

export default Json;
