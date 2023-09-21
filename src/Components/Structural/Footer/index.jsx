import React from "react";
import "./style.scss";
import Logo from "../../../Assets/Icons/prepaire-footer.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="footer-container">
				<div className="footer-content-container">
					<div className="footer-text-container">
						<div className="footer-logotext-container">
							<img className="footer-logo" src={Logo} />
							<p>
								14th floor, ONE JLT Building
								<br />
								Jumeriah Lake Towers Dubai,
								<br />
								Dubai,103805
								<br />
								U.A.E.
							</p>
						</div>
						<div className="footer-emails-container">
							<p>Sales@prepaire.com</p>
							<p>Developers@prepaire.com</p>
							<p>Investor@prepaire.com</p>
						</div>
					</div>
					<div className="footer-link-container">
						<a
							onClick={() =>
								document
									.querySelector("#appStore")
									.scrollIntoView({ behavior: "smooth", block: "center" })
							}
						>
							{" "}
							Appstore
						</a>
						<a> Developers</a>
						<a> Mission</a>
						<a
							onClick={() =>
								document
									.querySelector("#biotune")
									.scrollIntoView({ behavior: "smooth", block: "center" })
							}
						>
							{" "}
							Biotune
						</a>
						<a> Contact</a>
					</div>
				</div>
			</div>
			<div className="footer-bottom-container">
				<div className="terms-container">
					<Link to="https://app.termly.io/document/terms-of-service/fb3569e8-7a0f-4c89-8a4f-0a9bbbcde184">
						Terms of service
					</Link>
					<Link to="https://app.termly.io/document/privacy-policy/c26544c0-fecf-417b-9648-3aa50e9054e0">
						Privacy Policy
					</Link>
				</div>
				<p>Copyright © 2023 Prepaire Labs Inc. All rights reserved.</p>
			</div>
		</>
	);
};
export default Footer;
