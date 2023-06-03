import { configureStore } from "@reduxjs/toolkit";
import switchReducer from "./Features/Hero/Switch/switchSlice";
import projectsReducer from "./Features/Projects/projectsSlice";
import createSagaMiddleware from "redux-saga"
import { projectsSaga } from "./Features/Projects/projectsSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    switch: switchReducer,
    projects: projectsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(projectsSaga)