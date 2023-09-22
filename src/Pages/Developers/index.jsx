import React from "react";
import "./style.scss";
import DNA from "../../Assets/ComingSoon/DNA.png";
import { useNavigate } from "react-router-dom";

const Developers = () => {
	const navigate = useNavigate();
	return (
		<div className="comingSoon-container">
			<div className="comingSoon-content-container">
				<h1>
					Coming soon! We’re getting ready for the
					<span className="color-inlineVariation-blue">
						revolution of drug discovery
					</span>
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat.{" "}
				</p>
				<button
					className="button-primary"
					onClick={() => {
						navigate("/");
					}}
				>
					Back to homepage
				</button>
			</div>
			<div className="comingSoon-image-wrapper">
				<img src={DNA}></img>
			</div>
		</div>
	);
};
export default Developers;
