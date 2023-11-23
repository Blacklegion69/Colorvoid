import { createSlice } from "@reduxjs/toolkit";
import useHexadecimal from "@/hooks/useHexadecimal";

type initialStateType = {
  color: string;
  colors: string[];
  background: string;
  rotation: number;
  negativeRotation: boolean;
  repeating: boolean;
  repeatingLength: number;
  repeatingUnit: "px" | "percent";
};

type stateType = {
  gradientReducer: initialStateType;
};

const makeBackground = (state: initialStateType) => {
  const { colors, rotation, repeating, repeatingLength, repeatingUnit } = state;
  let bg = `-webkit-${
    repeating ? "repeating-" : ""
  }linear-gradient(${rotation}deg`;
  for (let i = 0; i < colors.length; i++) {
    bg += `,${colors[i]}`;
  }
  let final =
    bg +
    ` ${
      repeating
        ? repeatingUnit === "px"
          ? Math.abs(repeatingLength) + "px"
          : Math.abs(repeatingLength) + "%"
        : ""
    })`;
  return final;
};

const rotation = Math.floor(Math.random() * 360);
const c1 = useHexadecimal();
const c2 = useHexadecimal();
const initialState: initialStateType = {
  color: useHexadecimal(),
  colors: [c1, c2],
  background: `-webkit-linear-gradient(${rotation}deg,${c1},${c2})`,
  rotation,
  negativeRotation: false,
  repeating: false,
  repeatingLength: 10,
  repeatingUnit: "px",
};

const gradientSlice = createSlice({
  name: "gradient",
  initialState,
  reducers: {
    setRandomcolor: (state) => {
      state.color = useHexadecimal();
    },
    setColors: (state, action) => {
      state.colors = [...state.colors, action.payload];
      state.background = makeBackground(state);
    },
    setRotation: (state, action) => {
      state.rotation = action.payload.rotation;
      state.background = makeBackground(state);
    },
    setNegativeRotation: (state, action) => {
      state.negativeRotation = action.payload.negativeRotation;
      state.background = makeBackground(state);
      state.rotation = state.negativeRotation
        ? -Math.abs(state.rotation)
        : Math.abs(state.rotation);
    },
    setRepeating: (state, action) => {
      state.repeating = action.payload.repeating;
      state.background = makeBackground(state);
    },
    setRepeatingunit: (state, action) => {
      state.repeatingUnit = action.payload.repeatingUnit;
      state.background = makeBackground(state);
    },
    increaseRepeatingLength: (state) => {
      state.repeatingLength = state.repeatingLength + 1;
      state.background = makeBackground(state);
    },
    decreaseRepeatingLength: (state) => {
      state.repeatingLength = state.repeatingLength - 1;
      state.background = makeBackground(state);
    },
    increaseRepeatingLengthByCount: (state, action) => {
      state.repeatingLength = state.repeatingLength + action.payload.count;
      state.background = makeBackground(state);
    },
    decreaseRepeatingLengthByCount: (state, action) => {
      state.repeatingLength = state.repeatingLength - action.payload.count;
      state.background = makeBackground(state);
    },
    setBackground: (state, action) => {
      state.background = action.payload;
    },
    updateFull: (state) => {
      const c1 = useHexadecimal();
      const c2 = useHexadecimal();
      state.color = useHexadecimal();
      state.colors = [c1, c2];
      state.repeatingLength = Math.floor(Math.random() * 20);
      state.repeatingUnit = ["px", "percent"][Math.floor(Math.random() * 2)] as
        | "px"
        | "percent";
      state.repeating = [true, false][Math.floor(Math.random() * 2)];
      state.negativeRotation = [true, false][Math.floor(Math.random() * 2)];
      state.rotation = state.negativeRotation
        ? -Math.floor(Math.random() * 360)
        : Math.floor(Math.random() * 360);
      state.background = state.repeating
        ? `-webkit-repeating-linear-gradient(${state.rotation}deg,${c1},${c2} ${
            state.repeatingLength
          }${state.repeatingUnit === "percent" ? "%" : "px"})`
        : `-webkit-linear-gradient(${state.rotation}deg,${c1},${c2})`;
    },
  },
});

const gradientSelector = (state: stateType) => {
  return state.gradientReducer;
};

const gradientReducer = gradientSlice.reducer;
export default gradientReducer;

export const {
  setRandomcolor,
  setColors,
  setBackground,
  setRotation,
  setNegativeRotation,
  setRepeating,
  setRepeatingunit,
  increaseRepeatingLength,
  decreaseRepeatingLength,
  increaseRepeatingLengthByCount,
  decreaseRepeatingLengthByCount,
  updateFull,
} = gradientSlice.actions;
export { gradientSelector };
