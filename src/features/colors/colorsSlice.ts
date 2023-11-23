import { createSlice } from "@reduxjs/toolkit";
import useColors from "@/hooks/useColors";

type initialStatetype = {
  color: string[];
};
type stateType = {
  colorsReducer: {
    color: string[];
  };
};

const initialState: initialStatetype = {
  color: useColors(),
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    updateColor: (state) => {
      state.color = useColors();
    },
  },
});

const colorsSelector = (state: stateType) => {
  return state.colorsReducer.color;
};

const colorReducer = colorsSlice.reducer;
export default colorReducer;
export const { updateColor } = colorsSlice.actions;
export { colorsSelector };
