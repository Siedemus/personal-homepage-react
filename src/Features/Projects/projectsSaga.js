import { call, delay, put, takeEvery } from "redux-saga/effects";
import {
  fetchProjects,
  fetchProjectsError,
  fetchProjectsSucces,
} from "./projectsSlice";
import { getProjects } from "./getProjects";

function* fetchProjectsHandler() {
  try {
    yield delay(2000);
    const projects = yield call(getProjects);
    yield put(fetchProjectsSucces(projects));
    yield console.log(projects);
  } catch {
    yield put(fetchProjectsError());
  }
}

export function* projectsSaga() {
  yield takeEvery(fetchProjects.type, fetchProjectsHandler);
}