import React, { useState } from "react";
import "./style.scss";
import Video from "../../../Assets/ContactUs/file.mp4";
import Icon from "../../../Assets/Icons/check-circle.svg";

const ContactUs = () => {
	const [inputNameSelected, setInputNameSelected] = useState("full-input");
	const [name, setName] = useState("");
	const [errorName, setErrorName] = useState("hidden");

	const [inputLNameSelected, setInputLNameSelected] = useState("full-input");
	const [Lname, setLname] = useState("");
	const [errorLname, setErrorLname] = useState("hidden");

	const [inputEmailSelected, setInputEmailSelected] = useState("full-input");
	const [email, setEmail] = useState("");
	const [errorEmail, setErrorEmail] = useState("hidden");

	const [inputCompanySelected, setInputCompanySelected] =
		useState("full-input");
	const [company, setCompany] = useState("");
	const [errorCompany, setErrorCompany] = useState("hidden");

	const [inputMessageSelected, setInputMessageSelected] =
		useState("full-input");
	const [message, setMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("hidden");

	const textAreaCount = message.length;
	// set input selected true
	function selectInputName(e) {
		setInputNameSelected("full-input-active");

		validateName(e);
	}

	function selectInputLname(e) {
		setInputLNameSelected("full-input-active");
		validateLname(e);
	}

	function selectInpuEmail(e) {
		setInputEmailSelected("full-input-active");
		validateEmail(e);
	}

	function selectInputCompany(e) {
		setInputCompanySelected("full-input-active");
		validateCompany(e);
	}

	function selectInputMessage(e) {
		setInputMessageSelected("full-textArea-active");
		validateMessage(e);
	}

	//validate fields and change style for each
	function validateName(e) {
		setName(e.target.value);
		if (name === "") {
			setInputNameSelected("full-input-error");
			setErrorName("error-Message");
		} else {
			setInputNameSelected("full-input-correct");
			setErrorName("hidden");
		}
	}

	function validateLname(e) {
		setLname(e.target.value);
		if (Lname === "") {
			setInputLNameSelected("full-input-error");
			setErrorLname("error-Message");
		} else {
			setInputLNameSelected("full-input-correct");
			setErrorLname("hidden");
		}
	}

	function validateEmail(e) {
		//eslint-disable-next-line
		const valid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		setEmail(e.target.value);
		if (!valid.test(email) || email === "") {
			setInputEmailSelected("full-input-error");
			setErrorEmail("error-Message");
		} else {
			setInputEmailSelected("full-input-correct");
			setErrorEmail("hidden");
		}
	}

	function validateCompany(e) {
		setCompany(e.target.value);
		if (company === "") {
			setInputCompanySelected("full-input-error");
			setErrorCompany("error-Message");
		} else {
			setInputCompanySelected("full-input-correct");
			setErrorCompany("hidden");
		}
	}

	function validateMessage(e) {
		setMessage(e.target.value);
		if (message === "") {
			setInputMessageSelected("full-textArea-error");
			setErrorMessage("error-Message");
		} else {
			setInputMessageSelected("full-textArea-correct");
			setErrorMessage("hidden");
		}
	}

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
							<div className={inputNameSelected}>
								<label>Name</label>
								<div className="contactUs-inputplace-container">
									<input
										value={name}
										onChange={validateName}
										onClick={selectInputName}
										className="small"
										placeholder="Name"
									></input>
									<img
										className="contactUs-correct-icon"
										src={Icon}
										alt="green-check"
									/>
									<a>John</a>
								</div>
							</div>
							<p className={errorName}>Field can not be empty!</p>
						</div>

						<div className="form-input-wrapper">
							<div className={inputLNameSelected}>
								<label>Last Name</label>
								<div className="contactUs-inputplace-container">
									<input
										value={Lname}
										onChange={validateLname}
										onClick={selectInputLname}
										className="small"
										placeholder="Last Name"
									></input>
									<img
										className="contactUs-correct-icon"
										src={Icon}
										alt="green-check"
									/>
									<a>Doe</a>
								</div>
							</div>
							<p className={errorLname}>Field can not be empty!</p>
						</div>
					</div>
					<div className="form-input-wrapper">
						<div className={inputEmailSelected}>
							<label>Email</label>
							<div className="contactUs-inputplace-container">
								<input
									value={email}
									onChange={validateEmail}
									onClick={selectInpuEmail}
									placeholder="Email"
								></input>
								<img
									className="contactUs-correct-icon"
									src={Icon}
									alt="green-check"
								/>
								<a>johndoe@email.com</a>
							</div>
						</div>
						<p className={errorEmail}>
							Field can not be empty, and email must be valid!
						</p>
					</div>
					<div className="form-input-wrapper">
						<div className={inputCompanySelected}>
							<label>Company</label>
							<div className="contactUs-inputplace-container">
								<input
									value={company}
									onChange={validateCompany}
									onClick={selectInputCompany}
									placeholder="Company"
								></input>
								<img
									className="contactUs-correct-icon"
									src={Icon}
									alt="green-check"
								/>
								<a>Glaxo Smith Kline</a>
							</div>
						</div>
						<p className={errorCompany}>Field can not be empty!</p>
					</div>
					<div className="form-input-wrapper">
						<div className={inputMessageSelected}>
							<label>Message</label>

							<div className="contactUs-inputplace-container">
								<textarea
									maxLength="200"
									value={message}
									onChange={validateMessage}
									onClick={selectInputMessage}
									placeholder="Add Message"
								></textarea>
								<img
									className="contactUs-correct-icon"
									src={Icon}
									alt="green-check"
								/>
								<a>{textAreaCount}/200</a>
							</div>
						</div>
						<p className={errorMessage}>Field can not be empty!</p>
					</div>

					<button className="button-primary">submit</button>
				</form>
			</div>
		</div>
	);
};
export default ContactUs;
