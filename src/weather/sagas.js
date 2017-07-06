import { takeEvery } from 'redux-saga/effects';

export function* fetchWeather() {
	// do some async stuff here
}

export function* watchGetWeather() {
  yield takeEvery('GET_WEATHER', fetchWeather)
}

export default function* weatherSagas() {
	console.log('the weather saga');
	yield all([watchGetWeather]);
}

