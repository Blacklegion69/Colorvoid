import { Button } from "@/components/ui/button";
// import Gradienttext from "@/components/custom/Gradienttext";
import { cn } from "@/lib/utils";
import { Copy as Cp } from "lucide-react";
import { useRef, useState, useEffect } from "react";

type propsType = {
  text?: string;
  className?: string;
  label?: string;
};
const Copy = ({ text, className, label }: propsType) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      console.log(textAreaRef.current);
      document.execCommand("copy");
      setIsCopied(true);
      // Optionally, you can show a notification or perform any other action after copying.
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  }, [isCopied]);

  return (
    <>
      <textarea
        ref={textAreaRef}
        value={text}
        readOnly
        style={{ position: "absolute", left: "-9999px" }}
      />
      <Button onClick={handleCopyClick} className={cn("", className)}>
        <div
          className={cn(
            "flex justify-center gap-1 items-center font-bold",
            label,
          )}
        >
          {isCopied ? (
            <div className="p-3 rounded rounded-full border-transparent border-2 border-l-slate-100 dark:border-l-slate-900 animate-spin"></div>
          ) : (
            <>
              <Cp style={{ color: "#c1c1c1" }} />
              Copy
            </>
          )}
        </div>
      </Button>
    </>
  );
};

export default Copy;
