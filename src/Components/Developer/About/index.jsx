import React from "react";
import "./style.scss";
import imageA from "../../../Assets/Developers/about/abouta.svg";
import imageB from "../../../Assets/Developers/about/aboutb.svg";
import imageC from "../../../Assets/Developers/about/aboutC.svg";
import imageD from "../../../Assets/Developers/about/aboutD.svg";
import imageE from "../../../Assets/Developers/about/aboutE.svg";
import { HashLink } from "react-router-hash-link";

const why = () => {
	return (
		<div className="aboutDev-container">
			<div className="aboutDev-pictures-container">
				<div className=" aboutDev-pictures-topContainer">
					<img src={imageA}></img>
					<img src={imageB}></img>
				</div>
				<div>
					<img src={imageC}></img>
				</div>
				<div className="aboutDev-pictures-bottomContainer">
					<img src={imageD}></img>
					<img src={imageE}></img>
				</div>
			</div>
			<div className="aboutDev-text-container">
				<h2>
					Why Develop with <br />
					<span className="color-variation-blue">Prepaire Labs</span>
				</h2>
				<p>
					You&apos;ve built incredible applications that are pushing the
					boundaries of what&apos;s possible in biomedical research and drug
					discovery. Now, take your innovations to the next level by becoming a
					part of the Prepaire App Store—a platform where cuttingedge science
					meets opensource ingenuity.
				</p>
				<HashLink className="button-secondary" to={"/#contact"} smooth={true}>
					Contact us
				</HashLink>
			</div>
		</div>
	);
};
export default why;
