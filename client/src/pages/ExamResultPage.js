import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClass } from "../redux/action/classAction";
import {
	addResult,
	deleteResult,
	editResult,
	getResult,
} from "../redux/action";
import { Redirect } from "react-router-dom";
import { logout } from "../redux/action/authAction";
import { Header, NewDataForm, Table } from "../components";

const ExamResultPage = () => {
	const [addName, setAddName] = useState("");
	const [addClass, setAddClass] = useState("");
	const [addScore, setAddScore] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getResult());
		dispatch(getClass());
	}, []);

	const examData = useSelector((state) => state.resultReducer.data);
	const classData = useSelector((state) => state.classReducer.data);
	const { data, isLogin, isLoadingAuth } = useSelector(
		(state) => state.authReducer
	);

	if (!isLoadingAuth) {
		if (!isLogin) {
			return <Redirect to="/" />;
		}
	}

	if (!examData || !classData || !data) {
		return <div>Loading</div>;
	}

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<Header username={data.username} margin={"24px 0 24px 0"} />
				<Table examData={examData} margin={"0 0 12px 0"} />
				<NewDataForm classData={classData} />
			</div>
		</div>
	);
};

export default ExamResultPage;
