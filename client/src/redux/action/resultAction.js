import axios from "axios";
import { API_URL } from "../../helpers/API_URL";

const getResult = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${API_URL}/exam`);

			dispatch({
				type: "FILL_RESULT_DATA",
				payload: response.data,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

const addResult = (data) => {
	return async (dispatch) => {
		try {
			await axios.post(`${API_URL}/exam`, data);

			dispatch(getResult());
		} catch (err) {
			console.log(err);
		}
	};
};

const deleteResult = (data) => {
	const { id } = data;

	return async (dispatch) => {
		try {
			await axios.delete(`${API_URL}/exam/${id}`);

			dispatch(getResult());
		} catch (err) {
			console.log(err);
		}
	};
};

const editResult = (data) => {
	const { id, editData } = data;

	return async (dispatch) => {
		try {
			await axios.put(`${API_URL}/exam/${id}`, editData);

			dispatch(getResult());
		} catch (err) {
			console.log(err);
		}
	};
};

export { getResult, addResult, deleteResult, editResult };
