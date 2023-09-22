import React from "react";
import "./style.scss";
import imageA from "../../../Assets/Developers/onboarding/img.svg";

const Onboarding = () => {
	return (
		<div className="onboardinDev-container">
			<div className="onboardingDev-text-container">
				<h2>
					Onboard with
					<span className="color-inlineVariation-blue">Ease</span>
				</h2>
				<p>
					<span className="p-bold">Got an existing app?</span> No problem! We
					offer streamlined onboarding processes and dedicated support to help
					you migrate your applications effortlessly. Our upcoming SDK will
					ensure seamless onboarding.
				</p>
			</div>
			<div className="aboutDev-pictures-container">
				<div className=" aboutDev-pictures-topContainer">
					<img src={imageA}></img>
				</div>
			</div>
		</div>
	);
};
export default Onboarding;
