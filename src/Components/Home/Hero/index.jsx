import React from "react";
import "./style.scss";
import "../../../Scss/main.scss";
import Video from "../../../Assets/Hero/HeroImage_placeHolder.png";
import Download from "../../../Assets/Icons/download.svg";
import { Link } from "react-router-dom";
const Hero = () => {
	return (
		<div className="hero-container">
			<div className="hero-text-container">
				<div className="hero-title-wrapper">
					<h1>
						Transforming Drug Discovery through
						<br />
						<span className="color-variation-blue ">Open Collaboration</span>
					</h1>
				</div>
				<div className="hero-p-wrapper">
					<p className="bigger-p">
						At Prepaire Labs, we champion personalized medicine, harmonizing
						treatments with unique genetics. Our open platform spurs
						collaboration, propelling innovation. With our streamlined white box
						model, we accelerate drug discovery and disease modeling for faster
						therapeutic breakthroughs.
					</p>
				</div>
				<div className="hero-buttons-container">
					<Link
						className="button-primary"
						to="https://prepaire-staging.vercel.app/#/signup"
					>
						Get started
					</Link>
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
