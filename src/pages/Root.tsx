import Fullscreen from "@/components/custom/Fullscreen";
import Gradienttext from "@/components/custom/Gradienttext";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import Image from "@/components/custom/Image";
import Progressanimation from "@/components/section/Progressanimation";
import Hero from "@/components/section/Hero";
import ScrollToTopButton from "@/components/section/ScrollToTopButton";
import featureslist from "@/constant/featureslist";

const Herosection = () => {
  return (
    <Fullscreen className="flex pt-20 items-center flex-col">
      <div className="flex relative justify-between items-center">
        <Hero />
        <Image className="w-[450px] h-[450px] hidden md:block rounded-lg shadow-md" />
      </div>
      <Explore />
    </Fullscreen>
  );
};
const Explore = () => {
  return (
    <Link
      to="/Home"
      className="rounded-full mt-20 underline decoration-wavy animate-bounce text-3xl relative"
    >
      <Gradienttext className=" bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500">
        Explore More
        <Separator />
      </Gradienttext>
    </Link>
  );
};
const Onlymobile = () => {
  return (
    <Fullscreen className="hidden md:flex justify-center items-center flex-col relative">
      <Gradienttext className="text-5xl aquino py-5 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500">
        only
      </Gradienttext>
      <Gradienttext className="text-5xl aquino py-5 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500">
        mobile
      </Gradienttext>
      <Gradienttext className="text-5xl aquino py-5 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500">
        responsive
      </Gradienttext>
    </Fullscreen>
  );
};
const Welcome = () => {
  return (
    <Fullscreen className="flex justify-center items-center flex-col relative">
      <Gradienttext className="text-5xl aquino py-5 stroke">
        Welcome
      </Gradienttext>
    </Fullscreen>
  );
};
const Nothingtosay = () => {
  return (
    <Fullscreen className="flex justify-center items-center flex-col relative">
      <Gradienttext className="text-5xl">That's it. I have</Gradienttext>
      <Gradienttext className="font-bold py-4 text-6xl aquino">
        nothing
      </Gradienttext>
      <Gradienttext className="text-4xl">to say anymore.</Gradienttext>
      <Gradienttext className="text-4xl aquino">:)</Gradienttext>
    </Fullscreen>
  );
};
const Animation = () => {
  return (
    <Fullscreen className="flex justify-center items-center flex-col relative">
      <Progressanimation />
    </Fullscreen>
  );
};
const Enjoy = () => {
  return (
    <Fullscreen className="flex justify-center items-center flex-col relative">
      <Gradienttext className="text-6xl py-4 aquino">Enjoy!</Gradienttext>
      <ScrollToTopButton className="mt-[90%]">
        <Gradienttext>Back to top</Gradienttext>
      </ScrollToTopButton>
    </Fullscreen>
  );
};

const Root = () => {
  const Features = () => {
    return (
      <Fullscreen className=" flex justify-center flex-col relative">
        <Gradienttext className="aquino stroke mb-4 ml-8 text-2xl bg-gradient-to-r from-cyan-200 to-cyan-400">
          Features:
        </Gradienttext>
        <ul className="list-outside pl-12 list-disc font-bold">
          {featureslist.map((title, id) => {
            return (
              <li key={id}>
                <Gradienttext className="font-bold text-xl dark:bg-gradient-to-tl dark:from-blue-500 dark:via-green-200 dark:to-green-500 bg-gradient-to-tl from-gray-700 via-gray-900 to-black">
                  {title}.
                </Gradienttext>
                <Separator />
              </li>
            );
          })}
        </ul>
      </Fullscreen>
    );
  };

  return (
    <div className="overflow-hidden flex flex-col justify-center items-center">
      <Herosection />
      <Onlymobile />
      <Welcome />
      <Animation />
      <Features />
      <Nothingtosay />
      <Enjoy />
    </div>
  );
};
export default Root;
