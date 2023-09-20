import React from "react";
import "./style.scss";
import "../../../Scss/main.scss";
import Video from "../../../Assets/Hero/Editor.mp4";
import Download from "../../../Assets/Icons/download.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Hero = () => {
	const navigate = useNavigate();
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
					<button
						className="button-secondary"
						onClick={() => navigate("/comingsoon")}
					>
						{" "}
						Become a developer
					</button>
				</div>
			</div>
			<video muted autoPlay={true} loop={true}>
				<source src={Video} type="video/mp4" />
			</video>

			<a
				className="button-secondary-rotate"
				href="https://firebasestorage.googleapis.com/v0/b/dicalmiami-49715.appspot.com/o/Misc%2FAntitoxine_Oxime%20copy.pdf?alt=media&token=5c71597e-b635-40c3-b198-0c7f172c5700"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img alt="download-icon" src={Download} />
				Download case study
			</a>
		</div>
	);
};
export default Hero;
