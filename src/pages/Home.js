import {useNavigate} from "react-router-dom";
import "../styles/Home.css";
import React from "react";

const Home = () => {
	const navigate = useNavigate();
	const navigateToEnglish = () => {
		navigate("/english");
	};
	return (
		<div className="main-page">
			<header className="main-header">
				<h1>나만의 영어 교수님 INF</h1>
			</header>
			<section className="main-content">
				<p>영어 단어를 순서대로 조합해 문장을 완성하세요!</p>
				<button className="start-button" onClick={navigateToEnglish}>
					게임 시작
				</button>
			</section>
			<footer className="main-footer">
				<p>© 2024 English Writing Game</p>
			</footer>
		</div>
	);
};

export default Home;
