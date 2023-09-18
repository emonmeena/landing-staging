import React from "react";
import "./style.scss";
import "../../../Scss/main.scss";
import BiotuneLab from "../../../Assets/Biotune/biotune.png";
import BiotuneLogo from "../../../Assets/Biotune/biotune-logo.png";

const Biotune = () => {
	return (
		<div className="biotune-container">
			<div className="biotune-text-container">
				<img className="biotune-logo" alt="biotune logo " src={BiotuneLogo} />
				<div className="hero-title-wrapper">
					<h2>
						Designing for the Future of Cell and Gene
						<span className="color-inlineVariation-blue">
							{" "}
							Therapy Facilities
						</span>
					</h2>
				</div>

				<p>
					Your personal sanctuary for cutting-edge wellness and life-enhancing
					therapies. We bring the future of regenerative medicine to Dubai.
				</p>
			</div>

			<img className="biotune-image" alt="biotune lab image" src={BiotuneLab} />
		</div>
	);
};
export default Biotune;
