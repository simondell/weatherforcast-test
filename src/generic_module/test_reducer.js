const Types = {
	ON: 'ON',
	OFF: 'OFF'
};

const Actions = {
	setOn: () => ({ type: Types.ON }),
	setOff: () => ({ type: Types.OFF })
};

const ON_TEXT = 'The reducer is ON';
const OFF_TEXT = 'The reducer is OFF';
const INITIAL_STATE = OFF_TEXT;

const TestReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case Types.ON: return ON_TEXT;
		case Types.OFF: return OFF_TEXT;
		default: return state;
	}
}

export {
	Actions,
	Types,
	TestReducer
};