import React from "react";
import "./style.scss";
import DNA from "../../Assets/ComingSoon/DNA.png";
import { useNavigate } from "react-router-dom";

const Mission = () => {
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
					Prepaire Labs is on a mission to reshape the landscape of medicine,
					making personalized treatments that harmonize with individual genetics
					accessible to all. Our vision is simple yet powerful: an open platform
					that thrives on collaboration and innovation across the scientific
					community. With our revolutionary white box model and the imminent
					launch of our advanced BSL3 lab, we&apos;re bringing groundbreaking
					therapies closer to researchers and patients, revolutionizing and
					democratizing drug discovery.
				</p>

				<p>
					<span className="p-bold">Join us</span> as we embark on this journey
					to make medicine more inclusive and effective than ever before.
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
export default Mission;
