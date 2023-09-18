import React from "react";
import "./style.scss";
import Video from "../../../Assets/Therapy/therapy-video.mp4";
import Download from "../../../Assets/Icons/download.svg";

const TherapyFacilities = () => {
	return (
		<div className="therapy-container">
			<div className="therapy-video-wrapper">
				<video className="therapy-video" muted autoPlay={true} loop={true}>
					<source src={Video} type="video/mp4" />
				</video>
			</div>
			<div className="therapy-text-container">
				<div className="hero-title-wrapper">
					<h2>
						Designing for the Future of Cell <br />
						and Gene
						<span className="color-inlineVariation-blue">
							Therapy Facilities
						</span>{" "}
					</h2>
				</div>
				<div className="therapy-p-wrapper">
					<p>
						Unlock the secrets of your DNA. Our genome sequencing services
						provide a comprehensive view of your genetic makeup, opening the
						doors to personalized therapies and interventions. Our
						state-of-the-art biobank is a secure repository for biological
						samples, aiding in efficient drug discovery and personalized
						medicine.
					</p>
				</div>
				<div className="therapy-buttons-wrapper">
					<button className="button-secondary">
						<img alt="download-icon" src={Download} />
						Download case study
					</button>
				</div>
			</div>
		</div>
	);
};
export default TherapyFacilities;
