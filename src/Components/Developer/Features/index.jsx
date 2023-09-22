import React from "react";
import "./style.scss";
import Imga from "../../../Assets/Developers/Features/b_icon.svg";
import Imgb from "../../../Assets/Developers/Features/b_icon-1.svg";
import Imgc from "../../../Assets/Developers/Features/b_icon-2.svg";
import Computer from "../../../Assets/Developers/Features/Media/Devices.png";

const Features = () => {
	return (
		<div className="featuresDev-container">
			<div className="featuresDev-text-container">
				<h2>Features that Empower</h2>
				<div className="featuresDev-cards-container">
					<img src={Imga}></img>
					<div className="featuresDev-card-container ">
						<h3>MultiOmics API:</h3>
						<p>
							Seamlessly integrate with a wide variety of data types and
							bioinformatics tools.
						</p>
					</div>
				</div>

				<div className="featuresDev-cards-container">
					<img src={Imgb}></img>
					<div className="featuresDev-card-container ">
						<h3>WhiteBox Philosophy</h3>
						<p>
							Gain complete transparency and control over your app&apos;s data
							and architecture, ensuring you always know how your software
							impacts endusers.
						</p>
					</div>
				</div>

				<div className="featuresDev-cards-container">
					<img src={Imgc}></img>
					<div className="featuresDev-card-container ">
						<h3>Backend Support</h3>
						<p>
							From iPSC reprogramming to genome sequencing, our BLS 3 lab
							provides an end-to-end solution for advanced biomedical
							applications.
						</p>
					</div>
				</div>
			</div>
			<div className="featureDev-image-wrapper">
				<img className="featuresDev-image" src={Computer}></img>
			</div>
		</div>
	);
};
export default Features;
