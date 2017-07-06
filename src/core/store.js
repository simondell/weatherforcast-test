import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// reducers
import { Actions, TestReducer } from '../generic_module/test_reducer';

// sagas
import weatherSaga from '../weather/sagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	TestReducer,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(weatherSaga);

export {
	store
};
