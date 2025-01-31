import styled from "styled-components";
import React from "react";
import "../../styles/newButton.css";

// function NewButton({label, size = "large", onClick}) {
// 	return (
// 		<NewButtonStyle size={size} onClick={onClick}>
// 			<p>{label}</p>
// 		</NewButtonStyle>
// 	);
// }

export const NewButton = ({label, size = "small", onClick}) => {
	return (
		<button className={["word-button", "word-button--primary"]}>
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
