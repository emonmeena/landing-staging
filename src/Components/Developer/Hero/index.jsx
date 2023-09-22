import React from "react";
import "./style.scss";
import Img from "../../../Assets/Developers/HeroNav/heroDev-image.png";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
	return (
		<div className="heroDev-container">
			<div className="heroDev-text-container">
				<h3>Become a prepaire developer</h3>
				<h1>
					Develop with Purpose: Bring Your BioMed Apps to the
					<span className="color-inlineVariation-blue">Prepaire App Store</span>
				</h1>

				<HashLink className="button-primary" to={"/#contact"} smooth={true}>
					Become a developer
				</HashLink>
			</div>
			<div className="heroDev-image-wrapper">
				<img className="heroDev-image" src={Img} alt="apps-image" />
			</div>
		</div>
	);
};
export default Hero;
