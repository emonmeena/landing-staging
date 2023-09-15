import React from "react";
import Hero from "../../Components/Home/Hero";
import "./style.scss";
import Apps from "../../Components/Home/Apps";
import AppStore from "../../Components/Home/AppStore";
import DrugDiscovery from "../../Components/Home/DrugDiscovery";
import Biotune from "../../Components/Home/Biotune";
import ImageReconstruction from "../../Components/Home/ImageReconstruction";
import TherapyFacilities from "../../Components/Home/TherapyFacilities";
import Partners from "../../Components/Home/Partners";
import ContactUs from "../../Components/Home/ContactUs";
// import NavBar from "../../Components/Structural/NavBar";

const HomePage = () => {
	return (
		<>
			<div className="layout">
				<div className="hero-outter-container">
					<Hero />
				</div>
				<div className="apps-outter-container">
					<Apps />
				</div>
				<div id="appStore" className="appStore-outter-container">
					<AppStore />
				</div>
				<div id="mission" className="drugDiscovery-outter-container">
					<DrugDiscovery />
				</div>
				<div id="biotune" className="biotune-outter-container">
					<Biotune />
				</div>
				<div className="imageR-outter-container">
					<ImageReconstruction />
				</div>
				<div className="therapy-outter-container">
					<TherapyFacilities />
				</div>
				<div className="partners-outter-container">
					<Partners />
				</div>
				<div id="contact" className="contactUs-outter-container">
					<ContactUs />
				</div>
			</div>
		</>
	);
};
export default HomePage;
