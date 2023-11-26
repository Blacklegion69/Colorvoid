import { useSelector, useDispatch } from "react-redux";
import { gradientSelector } from "@/features/gradient/gradientSlice";
import { updateFull } from "@/features/gradient/gradientSlice";
import Display from "@/components/redux/Display";

const Displayslice = () => {
  const { background } = useSelector(gradientSelector);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(updateFull());
  };

  return (
    <Display handleClick={handleClick} background={background.toString()} />
  );
};

export default Displayslice;
