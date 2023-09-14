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
							<h3> Tittle goes here</h3>
							<div className="drugDiscovery-p-wrapper">
								<p>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
									diam nonummy nibh euismod tincidunt ut{" "}
								</p>
							</div>
						</div>
					</div>
					<div className="drugDiscovery-list-item">
						<img src={Icon} className="drugDiscovery-list-icon "></img>
						<div className="drugDiscovery-list-text">
							<h3> Tittle goes here</h3>
							<div className="drugDiscovery-p-wrapper">
								<p>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
									diam nonummy nibh euismod tincidunt ut{" "}
								</p>
							</div>
						</div>
					</div>
					<div className="drugDiscovery-list-item">
						<img src={Icon} className="drugDiscovery-list-icon "></img>
						<div className="drugDiscovery-list-text">
							<h3> Tittle goes here</h3>
							<div className="drugDiscovery-p-wrapper">
								<p>
									Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
									diam nonummy nibh euismod tincidunt ut{" "}
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
