import { useState } from "react";

import {
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
} from "../../utils/firebase/firebase";

import Button from "../button/Button";
import FormInput from "../formInput/FormInput";

import "./SignInFormStyles/SignInFormStyles.css";

const initialValues = {
	email: "",
	password: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(initialValues);
	const { email, password } = formFields;
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
		try {
			await signInAuthUserWithEmailAndPassword(
				email,
				password
			);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("Incorrect password for email");
					break;
				case "auth/user-not-found":
					alert("No user associated with this email");
					break;

				default:
					console.log(error);
			}
		}
	};
	const signInWithGoogle = async () => {
		await signInWithGooglePopup();
	};

	return (
		<div className="sign-up-container">
			<h2>Already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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
				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						buttonType="google-sign-in"
						onClick={signInWithGoogle}>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
