import React from "react";
import "./style.scss";
import "../../../Scss/main.scss";
import Video from "../../../Assets/Hero/HeroImage_placeHolder.png";
import Download from "../../../Assets/Icons/download.svg";
const Hero = () => {
	return (
		<div className="hero-container">
			<div className="hero-text-container">
				<div className="hero-title-wrapper">
					<h1>
						Building the future of{" "}
						<span className="color-variation-blue">medicine</span>{" "}
					</h1>
				</div>
				<div className="hero-p-wrapper">
					<p className="bigger-p">
						Unlock the Future of Medicine: Prepaire’s Universal App Store Your
						Gateway to Disease Modeling, Drug Discovery, Regenerative Therapies,
						and Beyond
					</p>
				</div>
				<div className="hero-buttons-container">
					<button className="button-primary">Contact us</button>
					<button className="button-secondary"> Become a developer</button>
				</div>
			</div>
			<img
				className="hero-video-wrapper"
				src={Video}
				alt="protein interaction"
			/>

			<button className="button-secondary-rotate">
				<img alt="download-icon" src={Download} />
				Download case study
			</button>
		</div>
	);
};
export default Hero;
