import React from "react";
import "./style.scss";
import "../../../Scss/main.scss";
import Video from "../../../Assets/Apps/apps-video.mp4";

const Apps = () => {
	return (
		<div className="apps-container">
			<div className="apps-video-wrapper">
				<video className="apps-video" muted autoPlay={true} loop={true}>
					<source src={Video} type="video/mp4" />
				</video>
			</div>
			<div className="apps-title-wrapper">
				<h2>
					Different apps made for
					<br />
					<span className="color-inlineVariation-blue ">your research</span>
				</h2>
			</div>
		</div>
	);
};
export default Apps;
