import React from "react";
import "./style.scss";
import Logo from "../../../Assets/Icons/prepaire-footer.svg";
import { useNavigate } from "react-router-dom";

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
							<p>Sales@prepaire.com</p>
							<p>Developers@prepaire.com</p>
							<p>Investor@prepaire.com</p>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom-container">
				<div className="terms-container">
					<a to="https://app.termly.io/document/terms-of-service/fb3569e8-7a0f-4c89-8a4f-0a9bbbcde184">
						Terms of service
					</a>
					<p>|</p>
					<a to="https://app.termly.io/document/privacy-policy/c26544c0-fecf-417b-9648-3aa50e9054e0">
						Privacy Policy
					</a>
				</div>
				<p>Copyright © 2023 Prepaire Labs Inc. All rights reserved.</p>
			</div>
		</>
	);
};
export default Footer;
