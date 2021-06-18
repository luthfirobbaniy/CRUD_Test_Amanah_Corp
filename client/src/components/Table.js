import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClass } from "../redux/action/classAction";
import { deleteResult, editResult, getResult } from "../redux/action";
import { Button, Input } from "../components";

const Table = ({ examData, margin }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [indexEdit, setIndexEdit] = useState(null);

	const [editId, setEditId] = useState("");
	const [editName, setEditName] = useState("");
	const [editClass, setEditClass] = useState("");
	const [editScore, setEditScore] = useState("");
	const [editStatus, setEditStatus] = useState("");

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getResult());
		dispatch(getClass());
	}, []);

	const classData = useSelector((state) => state.classReducer.data);

	return (
		<div
			style={{
				margin,
			}}
		>
			<div
				style={{
					margin: "0px 0 14px 0",
					fontSize: "24px",
				}}
			>
				{isEdit ? "Edit" : ""} Exam Result Data
			</div>
			<table>
				<thead>
					<tr>
						<th id="col-no">No</th>
						<th id="col-name">Name</th>
						<th id="col-class">Class</th>
						<th id="col-score">Score</th>
						<th id="col-status">Status</th>
						<th id="col-status" colSpan="2">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{!isEdit ? (
						examData.map((val, i) => {
							return (
								<tr>
									<td>{i + 1}</td>
									<td>{val.student}</td>
									<td>{val.class}</td>
									<td>{val.score}</td>
									<td>{val.status}</td>
									<td>
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<Button
												onClick={() => {
													setIndexEdit(i);
													setIsEdit(!isEdit);
													setEditId(val.id);
													setEditName(val.student);
													setEditClass(val.classId);
													setEditScore(val.score);
													setEditStatus(val.status);
												}}
											>
												Edit
											</Button>
										</div>
									</td>
									<td>
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<Button
												onClick={() =>
													dispatch(
														deleteResult({
															id: val.id,
														})
													)
												}
											>
												Delete
											</Button>
										</div>
									</td>
								</tr>
							);
						})
					) : (
						<tr>
							<td>{indexEdit + 1}</td>
							<td>
								<Input
									value={editName}
									placeholder="Name"
									onChange={(e) => setEditName(e.target.value)}
								/>
							</td>
							<td>
								<select onChange={(e) => setEditClass(e.target.value)}>
									{classData.map((val) => {
										return (
											<option selected={val.id == editClass} value={val.id}>
												{val.name}
											</option>
										);
									})}
								</select>
							</td>
							<td>
								<Input
									value={editScore}
									type="number"
									placeholder="Score"
									min="0"
									max="100"
									onChange={(e) => setEditScore(e.target.value)}
								/>
							</td>
							<td>{editStatus}</td>
							<td>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Button
										onClick={() => {
											setIndexEdit(null);
											setIsEdit(!isEdit);
										}}
									>
										Cancel
									</Button>
								</div>
							</td>
							<td>
								<div
									style={{
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Button
										disabled={!(editName && editClass && editScore)}
										onClick={() => {
											if (editScore > 100) {
												return alert("Score range is only 0 - 100");
											}

											dispatch(
												editResult({
													id: editId,
													editData: {
														student: editName,
														classId: editClass,
														score: editScore,
													},
												})
											);

											setIsEdit(!isEdit);
										}}
									>
										Save
									</Button>
								</div>
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
