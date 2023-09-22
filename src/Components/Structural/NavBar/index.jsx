import React from "react";
import "./style.css";
import Logo from "../../../Assets/Icons/Frame 629711.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const navigate = useNavigate();
	// new function:
	const handleScroll = () => {
		// find current scroll position
		const currentScrollPos = window.pageYOffset;

		// set state based on location info (explained in more detail below)
		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 0) ||
				currentScrollPos < 10
		);

		// set state to new scroll position
		setPrevScrollPos(currentScrollPos);
	};

	// new useEffect:
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<div className="navBar-container" style={{ top: visible ? "0" : "-65px" }}>
			<div className="navBar-logo-wrapper">
				<img
					className="navBar-logo"
					src={Logo}
					alt="prepaire logo"
					onClick={() => {
						navigate("/");
					}}
				/>
			</div>
			<div className="navbar-action-container">
				<div className="navbar-links-container">
					<Link to="https://prepaire-staging.vercel.app/#/marketplace">
						Appstore
					</Link>
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
							navigate("/mission");
						}}
					>
						Mission
					</a>
					<a
						onClick={() => {
							navigate("/biotune");
						}}
					>
						Biotune
					</a>
					<HashLink to={"/#contact"} smooth={true}>
						Contact
					</HashLink>
				</div>
				<div className="navBar-button-containers">
					<Link
						className="button-secondary"
						to="https://app.prepaire.com:5067/#/login"
					>
						Log in
					</Link>
					<Link
						className="button-primary"
						to="https://app.prepaire.com:5067/#/signup"
					>
						Sign up
					</Link>
				</div>
			</div>
		</div>
	);
};
export default NavBar;
