import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addResult, getResult } from "../redux/action";
import { Button, Input } from "../components";

const NewDataForm = ({ classData }) => {
	const [addName, setAddName] = useState("");
	const [addClass, setAddClass] = useState("");
	const [addScore, setAddScore] = useState("");

	const dispatch = useDispatch();

	return (
		<>
			<div
				style={{
					margin: "14px 0 12px 0",
					fontSize: "24px",
				}}
			>
				Add New Data
			</div>
			<div></div>
			<div>Full Name</div>
			<Input
				type="text"
				placeholder="Name"
				style={{
					margin: "9px 0 6px 0",
					width: "300px",
				}}
				value={addName}
				onChange={(e) => setAddName(e.target.value)}
			/>
			<div>Class</div>
			<select
				style={{
					margin: "9px 0 6px 0",
					width: "200px",
				}}
				onChange={(e) => setAddClass(e.target.value)}
			>
				<option value="">Select Class</option>;
				{classData.map((val) => {
					return <option value={val.id}>{val.name}</option>;
				})}
			</select>
			<div>Score</div>
			<Input
				type="number"
				placeholder="Score"
				min="0"
				max="100"
				style={{
					margin: "9px 0 6px 0",
					width: "80px",
				}}
				value={addScore}
				onChange={(e) => setAddScore(e.target.value)}
			/>
			<Button
				style={{
					margin: "18px 0 0 0",
					width: "50px",
				}}
				disabled={!(addName && addClass && addScore)}
				onClick={() => {
					if (addScore > 100) {
						return alert("Score range is only 0 - 100");
					}

					dispatch(
						addResult({
							student: addName,
							classId: addClass,
							score: addScore,
						})
					);

					setAddName("");
					setAddClass("");
					setAddScore("");

					// dispatch(getResult());
				}}
			>
				Add
			</Button>
		</>
	);
};

export default NewDataForm;
