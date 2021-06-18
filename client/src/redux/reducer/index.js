import { combineReducers } from "redux";

import { resultReducer } from "./resultReducer";
import { classReducer } from "./classReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
	resultReducer,
	classReducer,
	authReducer,
});
