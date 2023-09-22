import React from "react";
import "./style.scss";
import ImgA from "../../../Assets/Developers/support/message-question-square.svg";
import ImgB from "../../../Assets/Developers/support/file-code-01.svg";
import ImgC from "../../../Assets/Developers/support/users-01.svg";

const Support = () => {
	return (
		<div className="support-container">
			<h2>Developer Support</h2>
			<div className="supportDev-cards-container">
				<div className="supportDev-cardContainer">
					<div className="supportdev-card">
						<img src={ImgA} alt="technical support icon" />
						<h3>Technical Support</h3>
						<p>
							Reach out to our expert team for technical assistance and code
							reviews.
						</p>
					</div>
					<div className="supportdev-card">
						<img src={ImgB} alt="documentation icon" />
						<h3>Documentation</h3>
						<p>
							Access a rich library of tutorials, API documentation, and best
							practices to kickstart your development process.
						</p>
					</div>
				</div>
				<div className="supportDev-cardContainer">
					<div className="supportdev-card">
						<img src={ImgC} alt="comunity icon" />
						<h3>Community</h3>
						<p>
							Join forums, webinars, and hackathons to network with likeminded
							developers and scientists.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Support;
