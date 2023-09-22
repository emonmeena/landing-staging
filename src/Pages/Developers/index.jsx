import React from "react";
import "./style.scss";

import Hero from "../../Components/Developer/Hero";
import Why from "../../Components/Developer/About";
import Benefits from "../../Components/Developer/Benefits";
import Features from "../../Components/Developer/Features";
import Onboarding from "../../Components/Developer/Onboarding";
import Join from "../../Components/Developer/Join";

const Developers = () => {
	return (
		<>
			<div className="heroDev-layout">
				<div className="heroDev-outter-container">
					<Hero />
				</div>
				<div className="aboutDev-outter-container">
					<Why />
				</div>

				<div className="benefitsDev-outter-container">
					<Benefits />
				</div>
				<div className="featuresDev-outter-container">
					<Features />
				</div>
				<div className="onboardingDev-outter-container">
					<Onboarding />
				</div>

				<div className="supprtDev-outter-container"></div>
				<div className="joinDev-outter-container">
					<Join />
				</div>
			</div>
		</>
	);
};
export default Developers;
