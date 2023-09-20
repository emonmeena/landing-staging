import React from "react";
import "./style.scss";
import image from "../../Assets/Icons/Coming-soon.png";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
	const navigate = useNavigate();
	return (
		<div className="comingSoon-outter-container">
			<div>
				<img src={image} alt="dna image" />
				<h2>
					Coming soon! We’re getting ready for the{" "}
					<span className="color-inlineVariation-blue ">
						revolution of drug discovery
					</span>
				</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat.{" "}
				</p>
				<button
					className="button-primary"
					onClick={() => {
						navigate("/home");
					}}
				>
					{" "}
					Go back to homepage
				</button>
			</div>
		</div>
	);
};

export default ComingSoon;
