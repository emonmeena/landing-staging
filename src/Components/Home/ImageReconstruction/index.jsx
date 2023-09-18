import React from "react";
import "./style.scss";
import Image from "../../../Assets/imageR/imageR_image.png";
import IconA from "../../../Assets/imageR/a_icon.png";
import IconB from "../../../Assets/imageR/a_icon.png";
import IconC from "../../../Assets/imageR/a_icon.png";
import IconD from "../../../Assets/imageR/a_icon.png";
import BiotuneLogo from "../../../Assets/Biotune/biotune-logo.png";

const ImageReconstruction = () => {
	return (
		<div className="imageR-container">
			<div className="biotune-logo-wrapper">
				<img className="biotune-logo" alt="biotune logo " src={BiotuneLogo} />{" "}
			</div>

			<div className="imageR-topContent-container">
				<div className="imageR-tittle-wrapper">
					<h2>
						Fast AI Data Processing for{" "}
						<span className="color-variation-blue">Image Reconstruction</span>
					</h2>
				</div>
				<img
					className="imageR-image"
					alt="image recontructionn machine"
					src={Image}
				/>
			</div>
			<div className="imageR-cards-container">
				<div className="imageR-card-wrapper">
					<img className="imageR-cardIcon" alt="icon" src={IconA} />
					<h3>
						lmproved Lesion <br />
						Detection
					</h3>
					<p>Improved lesion detection of tumor micro-metastases.</p>
				</div>
				<div className="imageR-card-wrapper">
					<img className="imageR-cardIcon" alt="icon" src={IconB} />
					<h3>
						lmproved Lesion <br />
						Detection
					</h3>
					<p>
						Efficacy evaluation of stem cell therapies and cancer
						immunotherapies*.
					</p>
				</div>
				<div className="imageR-card-wrapper">
					<img className="imageR-cardIcon" alt="icon" src={IconC} />
					<h3>
						New Pharmaceuticals <br />
						Dvelopment
					</h3>
					<p>
						Early-phase total-body bio-distribution, pharmacokinetics and
						low-dose evaluation*.
					</p>
				</div>
				<div className="imageR-card-wrapper">
					<img className="imageR-cardIcon" alt="icon" src={IconD} />
					<h3>
						Multisystem Disease
						<br />
						Research
					</h3>
					<p>
						Research of brain-body or multi-organ disease, such as brain-gut
						conditions, metabolic syndrome and endocrine homeostasis*.
					</p>
				</div>
			</div>
		</div>
	);
};
export default ImageReconstruction;
