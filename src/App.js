import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home";
import NavBar from "./Components/Structural/NavBar";
import Footer from "./Components/Structural/Footer";

function App() {
	return (
		<Router>
			<NavBar />

			<Routes>
				<Route exact path="/" element={<HomePage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
