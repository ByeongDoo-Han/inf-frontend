import "./Home.css";

function Home() {
	return (
		<div className="main-page">
			<header className="main-header">
				<h1>English Writing Game</h1>
			</header>
			<section className="main-content">
				<p>
					Welcome to the English Writing Game! Challenge yourself to
					write creatively and improve your skills.
				</p>
				<button className="start-button">Start Game</button>
			</section>
			<footer className="main-footer">
				<p>© 2024 English Writing Game</p>
			</footer>
		</div>
	);
}

export default Home;
