import React from "react";
import "./style.scss";
import ImageA from "../../../Assets/Developers/benefits/b_icon.svg";
import ImageB from "../../../Assets/Developers/benefits/b_icon-1.svg";
import ImageC from "../../../Assets/Developers/benefits/b_icon-2.svg";

const Benefits = () => {
	return (
		<div className="benefitsDev-container">
			<div className="benefitsDev-text-wrapper">
				<h2>
					What you&apos;ll{" "}
					<span className="color-inlineVariation-blue"> Gain</span>
				</h2>
			</div>
			<div className="benefitDev-cards-container">
				<div>
					<img src={ImageA} alt="reach audience icon"></img>
					<h3>Reach a Curated Audience</h3>
					<p>
						Your applications will be exposed to a focused, highvalue audience
						of Citizen Scientists, researchers, and professionals in the drug
						discovery and disease modeling sectors.
					</p>
				</div>

				<div>
					<img src={ImageB} alt="reach audience icon"></img>
					<h3>Revenue & Recognition</h3>
					<p>
						Our unique monetization models and inplatform rewards system give
						your work the financial backing and credibility it deserves.
					</p>
				</div>

				<div>
					<img src={ImageC} alt="reach audience icon"></img>
					<h3>Unmatched Flexibility</h3>
					<p>
						With our Lab Information Management (LIM) operating system at the
						core, the Prepaire App Store allows you to build and deploy
						applications with unparalleled ease and efficiency.
					</p>
				</div>
			</div>
		</div>
	);
};
export default Benefits;
