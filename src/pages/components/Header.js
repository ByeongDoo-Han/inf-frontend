import React from "react";
import {Link} from "react-router-dom";
import "../../styles/Header.css";
function Header() {
	return (
		<header className="inf-header">
			<h1>INF</h1>
			<nav>
				<ul className="nav-links">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

// const styles = {
// 	header: {
// 		backgroundColor: "#333",
// 		color: "white",
// 		padding: "15px",
// 		textAlign: "center",
// 	},
// 	navList: {
// 		listStyle: "none",
// 		padding: 0,
// 		display: "flex",
// 		justifyContent: "center",
// 		gap: "20px",
// 	},
// };

export default Header;
