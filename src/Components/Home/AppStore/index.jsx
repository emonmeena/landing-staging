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
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
						volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
						ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
						consequat. Duis autem vel eum iriure
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
