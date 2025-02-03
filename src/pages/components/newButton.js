import styled from "styled-components";
import React from "react";
import "../../styles/newButton.css";

export const NewButton = ({
	primary = true,
	backgroundColor = null,
	label,
	size,
	onClick,
}) => {
	const mode = primary ? "word-button--primary" : "word-button--secondary";
	return (
		<button
			type="button"
			className={["word-button", `word-button--${size}`, mode].join(" ")}
			style={backgroundColor && {backgroundColor}}
		>
			{label}
		</button>
	);
};
// const NewButtonStyle = styled.button`
// 	background-color: red;
// 	color: whitesmoke;
// 	width: ${(props) => (props.size === "small" ? "75px" : "200px")};
// 	height: ${(props) => (props.size === "small" ? "75px" : "200px")};
// 	display: flex;
// 	flex-direction: row;
// 	align-items: center;
// 	justify-content: center;
// 	cursor: pointer; /* 버튼 스타일 추가 */
// 	border-radius: 5px; /* 둥근 모서리 */
// 	font-size: 16px;
// `;

export default NewButton;
