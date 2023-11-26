import { useSelector } from "react-redux";
import { meshSelector } from "@/features/mesh/meshSlice";
import Json from "@/components/redux/Json";

const Jsonslice = () => {
  const { background, single } = useSelector(meshSelector);
  const data = {
    backgroundColor: single,
    backgroundImage: background,
  };
  return <Json code={JSON.stringify(data)} />;
};

export default Jsonslice;
