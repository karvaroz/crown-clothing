import React, { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import Button from "../button/Button";
import FormInput from "../formInput/FormInput";

import "./signUpFormStyles/signUpFormStyles.css";

const initialValues = {
	name: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(initialValues);
	const { name, email, password, confirmPassword } = formFields;
	const resetFormFields = () => setFormFields(initialValues);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({
			...formFields,
			[name]: value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("passwords do not match");
			return;
		}
		try {
			const { user } = await createAuthUserWithEmailAndPassword(
				email,
				password
			);
			await createUserDocumentFromAuth(user, { name });
			resetFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use");
			} else {
				console.log(error);
			}
		}
	};

	return (
		<div className="sign-up-container">
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Name"
					htmlFor="name"
					type="text"
					required
					onChange={handleChange}
					name="name"
					id="name"
					value={name}
				/>
				<FormInput
					label="Email"
					htmlFor="email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					id="email"
					value={email}
				/>
				<FormInput
					label="Password"
					htmlFor="password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					id="password"
					value={password}
				/>
				<FormInput
					label="Confirm Password"
					htmlFor="confirmPassword"
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					id="confirmPassword"
					value={confirmPassword}
				/>

				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;
