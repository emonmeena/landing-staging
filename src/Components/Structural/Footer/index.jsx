import React from "react";
import "./style.scss";
import Logo from "../../../Assets/Icons/prepaire-footer.svg";

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
							<p>info@prepaire.com</p>
							<p>media@prepaire.com</p>
							<p>investors@prepaire.com</p>
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
					<p>Terms of service</p>
					<p>Privacy policy</p>
				</div>
				<p>Copyright © 2023 Prepaire Labs Inc. All rights reserved.</p>
			</div>
		</>
	);
};
export default Footer;
