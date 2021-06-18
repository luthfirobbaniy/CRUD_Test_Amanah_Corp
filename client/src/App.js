import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { ExamResultPage, LoginPage } from "./pages";
import { keepLogin } from "./redux/action/authAction";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(keepLogin());
	}, []);

	return (
		<div>
			<Route path="/" component={LoginPage} exact />
			<Route path="/dashboard" component={ExamResultPage} />
		</div>
	);
};

export default App;
