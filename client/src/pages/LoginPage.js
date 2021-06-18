import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action/authAction";
import { Redirect } from "react-router-dom";
import { Button, Input } from "../components";

const LoginPage = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const { isLogin } = useSelector((state) => state.authReducer);

	if (isLogin) {
		return <Redirect to="/dashboard" />;
	}

	return (
		<div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					style={{
						margin: "14px 0 10px 0",
						fontSize: "24px",
					}}
				>
					Login
				</div>
				<Input
					type="text"
					placeholder="Username"
					style={{
						margin: "9px 0 6px 0",
						width: "300px",
					}}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
				<Input
					type="password"
					placeholder="Password"
					style={{
						margin: "9px 0 6px 0",
						width: "300px",
					}}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
				<Button
					style={{
						margin: "18px 0 0 0",
					}}
					disabled={!(username && password)}
					onClick={() => dispatch(login({ username, password }))}
				>
					Login
				</Button>
			</div>
		</div>
	);
};

export default LoginPage;
