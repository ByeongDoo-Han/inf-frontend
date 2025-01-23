import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import axios from "axios";
import Home from "./Home";
import English from "./English";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/english" element={<English />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
