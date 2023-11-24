import { configureStore } from "@reduxjs/toolkit";
import colorsReducer from "@/features/colors/colorsSlice";
import gradientReducer from "@/features/gradient/gradientSlice";
import meshReducer from "@/features/mesh/meshSlice";

const store = configureStore({
  reducer: {
    colorsReducer,
    gradientReducer,
    meshReducer,
  },
});

export default store;
