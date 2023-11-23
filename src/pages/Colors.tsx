import Fullscreen from "@/components/custom/Fullscreen";
import Gradienttext from "@/components/custom/Gradienttext";
import { useSelector, useDispatch } from "react-redux";
import { updateColor, colorsSelector } from "@/features/colors/colorsSlice";
import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area"
import { Link } from "react-router-dom";
import useOpositeHexadecimal from "@/hooks/useOpositeHexadecimal";
import ScrollToTopButton from "@/components/section/ScrollToTopButton";

const Colors = () => {
  const something = useSelector(colorsSelector);
  const dispatch = useDispatch();

  return (
    <Fullscreen className="flex pt-20 justify-center items-center flex-col relative">
      <Gradienttext className="text-6xl aquino py-5 stroke">
        Colors
      </Gradienttext>
      <Button
        onClick={() => {
          dispatch(updateColor());
        }}
        className="font-bold p-1 px-10 bg-slate-800 aquino text-2xl"
      >
        <Gradienttext className=" font-bold text-2xl">Generate</Gradienttext>
      </Button>
      <div className="w-full my-4 px-2 gap-2 min-h-screen grid grid-cols-4 md:grid-cols-6 justify-center items-center flex-wrap">
        {something.map((d, id) => (
          <Link
            key={id}
            to={"/home/colors/" + d.replace("#", "")}
            className="flex rounded justify-center items-center flex-col relative"
            style={{
              backgroundColor: d,
              color: useOpositeHexadecimal(d),
            }}
          >
            <CardHeader className="text-center font-bold">{d}</CardHeader>
          </Link>
        ))}
      </div>
      <ScrollToTopButton className="px-6 my-5">
        <Gradienttext className="font-bold text-3xl"> Go to top </Gradienttext>
      </ScrollToTopButton>
    </Fullscreen>
  );
};

export default Colors;
