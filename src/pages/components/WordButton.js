import styled from "styled-components";
import React, {useRef, useState, useEffect} from "react";
import "../../styles/WordButton.css";

export const WordButton = ({value, label, onClick, size = "medium"}) => {
	const [isActive, setIsActive] = useState(true);
	const mode = isActive ? "word-button--primary" : "word-button--secondary";
	const toggle = () => {
		setIsActive(!isActive);
	};
	return (
		<button
			type="button"
			className={
				isActive
					? ["word-button", `word-button--${size}`, mode].join(" ")
					: ["word-button", `word-button--${size}`, mode].join(" ")
			}
			onClick={() => {
				onClick(value);
				toggle();
			}}
		>
			{label}
		</button>
	);
};

export default WordButton;
