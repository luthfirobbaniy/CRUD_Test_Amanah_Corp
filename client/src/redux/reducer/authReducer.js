const INITIAL_STATE = {
	data: null,
	isLogin: false,
	isLoadingAuth: false,
};

export const authReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "AUTH_START":
			return {
				...state,
				isLoadingAuth: true,
			};
		case "FILL_AUTH_DATA":
			return {
				...state,
				data: action.payload,
				isLogin: true,
			};
		case "AUTH_FINISHED":
			return {
				...state,
				isLoadingAuth: false,
			};
		case "AUTH_LOGOUT":
			return INITIAL_STATE;
		default:
			return state;
	}
};
