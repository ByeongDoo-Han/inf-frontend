import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import axios from "axios";
import Home from "./pages/Home";
import English from "./pages/English";
import Header from "./pages/components/Header";

const App = () => {
	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/english" element={<English />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
