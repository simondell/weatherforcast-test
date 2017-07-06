import { Actions, TestReducer } from './test_reducer';

const ON_TEXT = 'The reducer is ON';
const OFF_TEXT = 'The reducer is OFF';

test('Defaults to OFF_TEXT', () => {
	expect(TestReducer( undefined, { type: 'undefined' })).toEqual(OFF_TEXT);
});

test('Can be set ON', () => {
	expect(TestReducer( undefined, Actions.setOn() )).toEqual(ON_TEXT);
});

test('Can be set OFF', () => {
	expect(TestReducer( undefined, Actions.setOff() )).toEqual(OFF_TEXT);
});