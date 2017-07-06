import { createStore } from 'redux';
import { Actions, TestReducer } from '../generic_module/test_reducer';

let store = createStore(TestReducer);

export {
	store
};
