import React from "react";
import "./style.scss";
import Video from "../../../Assets/ContactUs/file.mp4";

const ContactUs = () => {
	return (
		<div className="contactUs-container">
			<div className="contactUs-video-wrapper">
				<video className="contactUs-video" muted autoPlay={true} loop={true}>
					<source src={Video} type="video/mp4" />
				</video>
			</div>
			<div className="contactus-form-container">
				<div className="contactUs-tittle-container">
					<h2>Lets talk</h2>
					<p>Contact us regarding any concerns or inquiries.</p>
				</div>
				<form className="form">
					<div className="form-firstLast-container">
						<div className="form-input-wrapper">
							<input className="small"></input>
							<p className="hidden">Error prevention message here</p>
						</div>
						<div className="form-input-wrapper">
							<input className="small"></input>
							<p className="hidden">Error prevention message here</p>
						</div>
					</div>
					<div className="form-input-wrapper">
						<input></input>
						<p className="hidden">Error prevention message here</p>
					</div>

					<div className="form-input-wrapper">
						<textarea></textarea>
						<p className="hidden">Error prevention message here</p>
					</div>

					<button className="button-primary">submit</button>
				</form>
			</div>
		</div>
	);
};
export default ContactUs;
