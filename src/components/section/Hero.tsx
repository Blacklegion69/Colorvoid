import Gradienttext from "@/components/custom/Gradienttext";

const Hero = () => {
  return (
    <div className="w-full px-2 rounded dark:shadow-md relative flex flex-col">
      <div className="w-full absolute dark:blur-md rounded"></div>
      <Gradienttext className="z-10 pt-3 text-6xl aquino">Explore</Gradienttext>
      <div className="flex justify-center flex-col items-center">
        <Gradienttext className="text-4xl pt-3 flex items-center aquino">
          the
        </Gradienttext>
        <Gradienttext className="z-10 pt-3 aquino text-4xl bg-gradient-to-tl from-blue-500 via-green-200 to-green-500">
          World of
        </Gradienttext>
      </div>
      <Gradienttext className="text-6xl aquino pt-3 text-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500">
        colors
      </Gradienttext>
      <Gradienttext className="z-10 text-center font-bold text-5xl">
        with us
      </Gradienttext>
      <Gradienttext className="z-10 text-center stroke text-2xl tracking-wide aquino bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100">
        until the
      </Gradienttext>
      <div className="flex justify-center items-center">
        <Gradienttext className="z-10 text-center stroke dark:stroke-dark text-8xl flex py-5 aquino bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r delay-50">
          void
        </Gradienttext>
        <Gradienttext className="z-10 text-8xl aquino">!</Gradienttext>
      </div>
    </div>
  );
};

export default Hero;
