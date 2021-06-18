const INITIAL_STATE = {
	data: null,
};

export const classReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "FILL_CLASS_DATA":
			return {
				data: action.payload,
			};
		default:
			return state;
	}
};
