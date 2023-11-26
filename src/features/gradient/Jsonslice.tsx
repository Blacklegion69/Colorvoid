import { useSelector } from "react-redux";
import { gradientSelector } from "@/features/gradient/gradientSlice";
import Json from "@/components/redux/Json";

const Jsonslice = () => {
  const initialState = useSelector(gradientSelector);
  return <Json code={JSON.stringify(initialState)} />;
};

export default Jsonslice;
