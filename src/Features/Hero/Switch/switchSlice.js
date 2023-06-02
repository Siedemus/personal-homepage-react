import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
};

const switchSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    switchDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { switchDarkMode } = switchSlice.actions;

export const selectIsDarkMode = (state) => state.switch.darkMode;

export default switchSlice.reducer;
