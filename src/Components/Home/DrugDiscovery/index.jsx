import React from "react";
import "./style.scss";
import "../../../Scss/main.scss";
import Img from "../../../Assets/DrugDiscovery/hailo-dashboard.png";
import Icon from "../../../Assets/Icons/Vector.svg";
const DrugDiscovery = () => {
	return (
		<div className="drugDiscovery-container">
			<div className="hero-title-wrapper">
				<h2>
					Advancing
					<span className="color-inlineVariation-blue">Drug Discovery</span>
					through AI <br /> and Chemical Integration
				</h2>
			</div>
			<div className="drugDiscovery-content-container">
				<img
					className="drugdiscovery-image-container"
					alt="hailo dashboard"
					src={Img}
				></img>
				<div className="drugDiscovery-list">
					<div className="drugDiscovery-list-item">
						<img src={Icon} className="drugDiscovery-list-icon "></img>
						<div className="drugDiscovery-list-text">
							<h3> Personalized Predictions</h3>
							<div className="drugDiscovery-p-wrapper">
								<p>
									Utilizing advanced machine learning algorithms, HAiLO tailors
									its drug interaction analyses to individual patient profiles,
									helping you zero in on the most effective and safest treatment
									options
								</p>
							</div>
						</div>
					</div>
					<div className="drugDiscovery-list-item">
						<img src={Icon} className="drugDiscovery-list-icon "></img>
						<div className="drugDiscovery-list-text">
							<h3> Comprehensive Database</h3>
							<div className="drugDiscovery-p-wrapper">
								<p>
									With an evergrowing database that covers thousands of drugs,
									nutrients, and herbal interactions, HAiLO provides an
									allencompassing look at potential synergies and conflicts to
									inform your decisions.
								</p>
							</div>
						</div>
					</div>
					<div className="drugDiscovery-list-item">
						<img src={Icon} className="drugDiscovery-list-icon "></img>
						<div className="drugDiscovery-list-text">
							<h3>AIDriven Insights</h3>
							<div className="drugDiscovery-p-wrapper">
								<p>
									HAiLO leverages state of the art artificial intelligence
									algorithms to analyze complex chemical structures and predict
									drug interactions. This enables faster, more accurate
									research, reducing the time and costs traditionally associated
									with drug discovery.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default DrugDiscovery;
