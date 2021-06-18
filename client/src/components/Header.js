import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action/authAction";
import { Button } from "../components";

const Header = ({ username, margin }) => {
	const dispatch = useDispatch();

	const a = "a";

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				margin,
			}}
		>
			<div
				style={{
					margin: "0px 0 0px 0",
					fontSize: "24px",
				}}
			>
				Welcome, {username}
			</div>
			<Button
				onClick={() => {
					dispatch(logout());
					window.document.location.reload();
				}}
			>
				Logout
			</Button>
		</div>
	);
};

export default Header;
