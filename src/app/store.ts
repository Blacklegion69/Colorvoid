import { configureStore } from "@reduxjs/toolkit";
import colorsReducer from "@/features/colors/colorsSlice";
import gradientReducer from "@/features/gradient/gradientSlice";

const store = configureStore({
  reducer: {
    colorsReducer,
    gradientReducer,
  },
});

export default store;
