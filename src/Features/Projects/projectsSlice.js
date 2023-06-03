import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  data: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchProjects: () => {},
    fetchProjectsError: (state) => {
      state.status = "error";
    },
    fetchProjectsSucces: (state, { payload: data }) => {
      state.data = data;
      state.status = "succes";
    },
  },
});

export const { fetchProjects, fetchProjectsError, fetchProjectsSucces } =
  projectsSlice.actions;

export const selectData = (state) => state.projects.data;
export const selectStatus = (state) => state.projects.status;

export default projectsSlice.reducer;
