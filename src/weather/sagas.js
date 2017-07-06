import { Types } from './actions';
import { takeEvery } from 'redux-saga/effects';

export function getWeather() {
	// do some async stuff here
	return fetch(api.)
		.then((res)=> res.json())
		.then((jsondata)=> {
			const {dummyOutput} = jsondata.dummy
			return dummyOutput
		})
}

export function* getWeather(){
	yield call(getWeather);
}

export function* watchGetWeather() {
  yield takeEvery(Types.GET_WEATHER, getWeather);
}

export default function* weatherSagas() {
	yield all([watchGetWeather]);
}

