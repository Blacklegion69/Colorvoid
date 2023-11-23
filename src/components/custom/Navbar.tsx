import Gradienttext from "./Gradienttext";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import Menu from "@/components/section/Menu";

const Navbar = () => {
  return (
    <nav className="w-full pl-5 py-3 bg-slate-200 dark:bg-cyan-900 z-30 flex justify-between items-center text-2xl fixed top-0 left-0 shadow-md">
      <Link className="flex justify-center items-center text-3xl" to="/">
        <Gradienttext className="aquino font-bold flex justify-center items-center">
          Color
        </Gradienttext>
        <Gradienttext className="bg-gradient-to-bl from-sky-400 via-rose-400 to-lime-400 font-bold aquino">
          void
        </Gradienttext>
      </Link>

      <div className="flex">
        <ModeToggle />
        <Menu className="ml-6" />
      </div>
    </nav>
  );
};

export default Navbar;
