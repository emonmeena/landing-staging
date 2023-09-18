import React from "react";
import "./style.scss";
import "../../../Scss/main.scss";
// import Video from "../../../Assets/Hero/HeroImage_placeHolder.png";
const AppStore = () => {
	return (
		<div className="appStore-container">
			<div className="appStore-text-container">
				<div className="hero-title-wrapper">
					<h2>
						Featuring our new
						<br />
						<span className="color-variation-blue">app store</span>{" "}
					</h2>
				</div>
				<div className="appStore-p-wrapper">
					<p>
						Introducing our MultiOmnis App Store, the ultimate marketplace for
						scientific innovation in gene editing and disease modeling. This
						centralized hub gathers the most cutting edge applications you need
						for your research, all in one convenient, easy to navigate platform.
						No more juggling multiple subscriptions or scouring disparate
						sources. From CRISPR to predictive algorithms, our app store is
						curated to offer the best tools to fast-track your journey towards
						personalized medicine. Make your research smarter, not harder, with
						the MultiOmnis App Store
					</p>
				</div>
				<div className="hero-buttons-container">
					<button className="button-secondary"> Become a developer</button>
				</div>
			</div>
			<div className="appStore-mockup-container">
				<div className="appStore-mockup" />
			</div>
		</div>
	);
};
export default AppStore;
