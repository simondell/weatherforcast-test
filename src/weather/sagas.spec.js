import {
	fetchWeather,
	watchGetWeather
} from './sagas';

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

