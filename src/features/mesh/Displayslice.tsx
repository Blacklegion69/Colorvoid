import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { meshSelector } from "@/features/mesh/meshSlice";
import { updateFull } from "@/features/mesh/meshSlice";
import Display from "@/components/redux/Display";

const Displayslice = () => {
  const { background, single } = useSelector(meshSelector);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateFull());
  };

  // const data = `background-color: ${single};background-image: ${background};`;
  return (
    <Display
      single={single}
      handleClick={handleClick}
      background={background.toString()}
    />
  );
};

export default Displayslice;
