import React from "react";
import "./style.scss";
// import Bg from "../../../Assets/ContactUs/backgound.svg";
import ImgA from "../../../Assets/ContactUs/announcement-03.svg";
import ImgB from "../../../Assets/ContactUs/code-browser.svg";
import ImgC from "../../../Assets/ContactUs/building-03.svg";
//import ArrowL from "../../../Assets/ContactUs/arrow-right.svg";
// import ArrowU from "../../../Assets/ContactUs/arrow-up-right.svg";

import xlogo from "../../../Assets/ContactUs/x logo 1.png";
import instagram from "../../../Assets/ContactUs/Instagram.png";
import linkedIn from "../../../Assets/ContactUs/Linkedin.png";

const Contact = () => {
	return (
		<div className="contact-container">
			<div className="contact-text-container">
				<h2>Contact us</h2>
				<p> Get in touch let us know how we can help</p>
				<div className="contact-social-container">
					<a
						href="https://twitter.com/prepaire_labs?lang=en "
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						<img src={xlogo} />
					</a>
					<a
						href="https://www.instagram.com/prepaire_labs/ "
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						<img src={instagram} />
					</a>

					<a
						href="https://ie.linkedin.com/company/prepaire-labs"
						target="_blank"
						rel="noopener noreferrer"
					>
						{" "}
						<img src={linkedIn} />
					</a>
				</div>
			</div>
			<div className="contact-cards-container">
				<div className="contact-card">
					<div className="contact-cardContent-container">
						<div className="contact-image-wrapper">
							<img alt="sales image" src={ImgA}></img>
						</div>

						<h3>Sales</h3>
						<p>
							Interested in our platform? Reach out to our Sales team to learn
							how we can elevate your research.
						</p>

						{/* <button className="contact-button-reveal">sales@prepaire.com</button> */}
					</div>
					<button className="contact-regular-button">
						Contact
						<svg
							className="contact-button-svg"
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
						>
							<path d="M9.0406 0.292893C8.65008 -0.0976311 8.01691 -0.0976311 7.62639 0.292893C7.23587 0.683417 7.23587 1.31658 7.62639 1.70711L12.9193 7H1.3335C0.781211 7 0.333496 7.44772 0.333496 8C0.333496 8.55229 0.781211 9 1.3335 9H12.9193L7.62639 14.2929C7.23587 14.6834 7.23587 15.3166 7.62639 15.7071C8.01691 16.0976 8.65008 16.0976 9.0406 15.7071L16.0406 8.70711C16.4311 8.31658 16.4311 7.68342 16.0406 7.29289L9.0406 0.292893Z" />
						</svg>
						{/* <svg src={ArrowL} className="contact-button-svg"></svg> */}
					</button>
				</div>

				<div className="contact-card">
					<div className="contact-cardContent-container">
						<div className="contact-image-wrapper">
							<img alt="sales image" src={ImgB}></img>
						</div>

						<h3>Developer support</h3>
						<p>
							Developers, join us in shaping the future of personalized
							medicine. Contact us to explore opportunities.
						</p>

						{/* <button className="contact-button-reveal">sales@prepaire.com</button> */}
					</div>
					<button className="contact-regular-button">
						Contact
						<svg
							className="contact-button-svg"
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
						>
							<path d="M9.0406 0.292893C8.65008 -0.0976311 8.01691 -0.0976311 7.62639 0.292893C7.23587 0.683417 7.23587 1.31658 7.62639 1.70711L12.9193 7H1.3335C0.781211 7 0.333496 7.44772 0.333496 8C0.333496 8.55229 0.781211 9 1.3335 9H12.9193L7.62639 14.2929C7.23587 14.6834 7.23587 15.3166 7.62639 15.7071C8.01691 16.0976 8.65008 16.0976 9.0406 15.7071L16.0406 8.70711C16.4311 8.31658 16.4311 7.68342 16.0406 7.29289L9.0406 0.292893Z" />
						</svg>
						{/* <svg src={ArrowL} className="contact-button-svg"></svg> */}
					</button>
				</div>

				<div className="contact-card">
					<div className="contact-cardContent-container">
						<div className="contact-image-wrapper">
							<img alt="sales image" src={ImgC}></img>
						</div>

						<h3>Media & investors</h3>
						<p>
							Media and investors, contact us for insights into our
							groundbreaking work in personalized medicine.
						</p>

						{/* <button className="contact-button-reveal">sales@prepaire.com</button> */}
					</div>
					<button className="contact-regular-button">
						Contact
						<svg
							className="contact-button-svg"
							xmlns="http://www.w3.org/2000/svg"
							width="17"
							height="16"
							viewBox="0 0 17 16"
							fill="none"
						>
							<path d="M9.0406 0.292893C8.65008 -0.0976311 8.01691 -0.0976311 7.62639 0.292893C7.23587 0.683417 7.23587 1.31658 7.62639 1.70711L12.9193 7H1.3335C0.781211 7 0.333496 7.44772 0.333496 8C0.333496 8.55229 0.781211 9 1.3335 9H12.9193L7.62639 14.2929C7.23587 14.6834 7.23587 15.3166 7.62639 15.7071C8.01691 16.0976 8.65008 16.0976 9.0406 15.7071L16.0406 8.70711C16.4311 8.31658 16.4311 7.68342 16.0406 7.29289L9.0406 0.292893Z" />
						</svg>
					</button>

					{/* <button className="absolute-button">
						sales@prepaire.com
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="13"
							height="12"
							viewBox="0 0 13 12"
							fill="none"
						>
							<path d="M1.5 0C0.947715 0 0.5 0.447715 0.5 1C0.5 1.55228 0.947715 2 1.5 2H9.08579L0.792893 10.2929C0.402369 10.6834 0.402369 11.3166 0.792893 11.7071C1.18342 12.0976 1.81658 12.0976 2.20711 11.7071L10.5 3.41421V11C10.5 11.5523 10.9477 12 11.5 12C12.0523 12 12.5 11.5523 12.5 11V1C12.5 0.447715 12.0523 0 11.5 0H1.5Z" />
						</svg>
						
					</button> */}
				</div>
			</div>
		</div>
	);
};
export default Contact;
