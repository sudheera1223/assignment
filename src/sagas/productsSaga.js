import { call, put, takeLatest } from "redux-saga/effects";
import { REQUEST_API } from '../constants'
import {  updateProducts } from "../actions/apiActions";
import { getProductsFromAPI } from '../api/getProducts'

function* getData() {
  try {
    const productsData = yield call(getProductsFromAPI);
    yield put(updateProducts(productsData));
  } catch (e) {
    console.log("Something went wrong",e);
  }
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_API, getData);
}
