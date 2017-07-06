import { takeEvery } from 'redux-saga/effects';

import {
	fetchWeather,
	watchGetWeather
} from './sagas';

import { Types } from './actions';

test('fetchWeather should create a generator', () => {
	const gen = fetchWeather();
	expect(gen.next).toBeDefined();
	expect(gen.next().done).toBeDefined();
});

test('watchGetWeather should create a generator', () => {
	const gen = watchGetWeather();
	expect(gen.next).toBeDefined();
	expect(gen.next().done).toBeDefined();
});

test('watchGetWeather should listen for actions', () => {
	const yielded = takeEvery(Types.GET_WEATHER, fetchWeather)
	const gen = watchGetWeather();
	
	expect(gen.next().value).toEqual(yielded);
});