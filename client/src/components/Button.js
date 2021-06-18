import React from "react";

const Button = ({ style, disabled, onClick, children }) => {
	return (
		<button
			style={{ ...style, height: "36px", padding: "0 12px" }}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
