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
				<p>
					Welcome to the English Writing Game! Challenge yourself to
					write creatively and improve your skills.
				</p>
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
