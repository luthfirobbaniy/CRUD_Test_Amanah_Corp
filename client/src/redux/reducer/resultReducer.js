const INITIAL_STATE = {
	data: null,
};

export const resultReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "FILL_RESULT_DATA":
			return {
				data: action.payload,
			};
		default:
			return state;
	}
};
