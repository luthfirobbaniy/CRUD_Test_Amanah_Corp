import axios from "axios";
import { API_URL } from "../../helpers/API_URL";

const getClass = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`${API_URL}/class`);

			dispatch({
				type: "FILL_CLASS_DATA",
				payload: response.data,
			});
		} catch (err) {
			console.log(err);
		}
	};
};

export { getClass };
