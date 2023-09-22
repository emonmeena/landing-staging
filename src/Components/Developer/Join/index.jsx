import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Join = () => {
	return (
		<div className="joinDev-container">
			<h2>
				Ready to Make a <br />
				Difference?
			</h2>
			<p>
				Your code has the potential to change lives. Let&apos;s turn your
				algorithms into therapies, your data into diagnoses, and your ideas into
				a better future.
			</p>
			<Link
				className="button-primary"
				to="https://app.prepaire.com:5067/#/signup"
			>
				Join us now
			</Link>
		</div>
	);
};
export default Join;
