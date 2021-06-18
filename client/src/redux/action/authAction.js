import axios from "axios";
import { API_URL } from "../../helpers/API_URL";

const login = (data) => {
	const { username, password } = data;
	return async (dispatch) => {
		try {
			dispatch({
				type: "AUTH_START",
			});

			const response = await axios.post(`${API_URL}/auth`, data);

			if (!response.data.status) {
				localStorage.setItem("username", username);
				localStorage.setItem("password", password);

				dispatch({
					type: "FILL_AUTH_DATA",
					payload: response.data,
				});
			}

			dispatch({
				type: "AUTH_FINISHED",
			});
		} catch (err) {
			console.log(err);
		}
	};
};

const keepLogin = (data) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "AUTH_START",
			});

			const username = localStorage.getItem("username");
			const password = localStorage.getItem("password");

			const response = await axios.post(`${API_URL}/auth`, {
				username,
				password,
			});

			if (!response.data.status) {
				dispatch({
					type: "FILL_AUTH_DATA",
					payload: response.data,
				});
			}

			dispatch({
				type: "AUTH_FINISHED",
			});
		} catch (err) {
			console.log(err);
		}
	};
};

const logout = (data) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: "AUTH_LOGOUT",
			});

			localStorage.removeItem("username");
			localStorage.removeItem("password");
		} catch (err) {
			console.log(err);
		}
	};
};

export { login, keepLogin, logout };
