import react from "react";

const Input = ({ type, placeholder, style, onChange, min, max, value }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			value={value}
			style={{
				...style,
				height: "28px",
				padding: "0 8px",
				boxSizing: "border-box",
			}}
			min={min}
			max={max}
			onChange={onChange}
		/>
	);
};

export default Input;
