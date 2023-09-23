import React from "react";
import "./style.scss";
import Logo from "../../../Assets/Icons/prepaire-footer.svg";
import { useNavigate } from "react-router-dom";

import xlogo from "../../../Assets/ContactUs/x logo 1.png";
import instagram from "../../../Assets/ContactUs/Instagram.png";
import linkedIn from "../../../Assets/ContactUs/Linkedin.png";

const Footer = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="footer-container">
				<img className="footer-logo" src={Logo} />
				<div className="footer-content-container">
					<div className="footer-text-container">
						<div className="footer-logotext-container">
							<span className="footer-p-tittle">Address</span>
							<p>14th floor, ONE JLT Building </p>
							<p>Jumeriah Lake Towers</p>
							<p>Dubai, 103805</p>
							<p>U.A.E.</p>
						</div>
						<div className="footer-link-container">
							<span className="footer-p-tittle">Company</span>

							<a
								onClick={() => {
									navigate("/developers");
								}}
							>
								{" "}
								Developers
							</a>
							<a
								onClick={() => {
									navigate("/Mission");
								}}
							>
								{" "}
								Mission
							</a>
							<a
								onClick={() => {
									navigate("/biotune");
								}}
							>
								{" "}
								Biotune
							</a>
						</div>
						<div className="footer-emails-container">
							<span className="footer-p-tittle">Contact</span>
							<a
								onClick={() => (window.location = "mailto:sales@prepaire.com")}
							>
								Sales@prepaire.com
							</a>
							<a
								onClick={() =>
									(window.location = "mailto:developers@prepaire.com")
								}
							>
								Developers@prepaire.com
							</a>
							<a
								onClick={() =>
									(window.location = "mailto:investor@prepaire.com")
								}
							>
								Investor@prepaire.com
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom-container">
				<div className="terms-social-container">
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
				<p>Copyright © 2023 Prepaire Labs Inc. All rights reserved.</p>
				<div className="terms-container">
					<a
						href="https://app.termly.io/document/terms-of-service/fb3569e8-7a0f-4c89-8a4f-0a9bbbcde184"
						target="_blank"
						rel="noopener noreferrer"
					>
						Terms of service
					</a>
					<p>|</p>
					<a
						href="https://app.termly.io/document/privacy-policy/c26544c0-fecf-417b-9648-3aa50e9054e0"
						target="_blank"
						rel="noopener noreferrer"
					>
						Privacy Policy
					</a>
				</div>
			</div>
		</>
	);
};
export default Footer;
