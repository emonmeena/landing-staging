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
						Glass doors and floor-to-ceiling windows stream natural light into
						the new Dubai Biotune Center, creating a positive energy in the
						space.
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
