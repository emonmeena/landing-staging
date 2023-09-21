import React from "react";
import "./style.scss";
import Video from "../../../Assets/Therapy/therapy-video.mp4";
// import Download from "../../../Assets/Icons/download.svg";

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
						doors to personalized therapies and interventions. <br />
						Our state-of-the-art biobank is a secure repository for biological
						samples, aiding in efficient drug discovery and personalized
						medicine.
					</p>
				</div>
				<div className="therapy-buttons-wrapper">
					{/* <a
						className="button-secondary"
						href="https://firebasestorage.googleapis.com/v0/b/dicalmiami-49715.appspot.com/o/Misc%2FAntitoxine_Oxime%20copy.pdf?alt=media&token=5c71597e-b635-40c3-b198-0c7f172c5700"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img alt="download-icon" src={Download} />
						Download case study
					</a> */}
				</div>
			</div>
		</div>
	);
};
export default TherapyFacilities;
