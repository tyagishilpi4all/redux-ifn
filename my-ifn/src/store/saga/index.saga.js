import { takeLatest, all } from "redux-saga/effects";

import {
    ADD_DATA,
} from "../action.type";

import { onaddData } from "./addData.saga";
function* sagas() {
    yield all([takeLatest(ADD_DATA, onaddData)]);
}

export default sagas;
