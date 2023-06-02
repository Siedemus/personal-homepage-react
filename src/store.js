import { configureStore } from "@reduxjs/toolkit";
import switchReducer from "./Features/Hero/Switch/switchSlice";

export const store = configureStore({
  reducer: {
    switch: switchReducer,
  },
});
