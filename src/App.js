import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/Home";
import NavBar from "./Components/Structural/NavBar";
import Footer from "./Components/Structural/Footer";
import Developers from "./Pages/Developers";
import Mission from "./Pages/Mission";
import Biotune from "./Pages/Biotune";

function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/developers" element={<Developers />} />
				<Route exact path="/mission" element={<Mission />} />
				<Route exact path="/biotune" element={<Biotune />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
