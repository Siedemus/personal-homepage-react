import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    switchDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { switchDarkMode } = switchSlice.actions;

export const selectDarkMode = (state) => state.switch.darkMode;


export default switchSlice.reducer;
