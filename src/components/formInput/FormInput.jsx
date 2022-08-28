import React from "react";
import "./formInputStyles/formInputStyles.css";

const FormInput = ({ label, htmlFor, ...otherProps }) => {
	return (
		<div className="group">
			<input
				{...otherProps}
				className="form-input"
			/>

			{label && (
				<label
					className={`${
						otherProps?.value?.length ? "shrink" : ""
					} form-input-label`}
					htmlFor={htmlFor}>
					{label}
				</label>
			)}
		</div>
	);
};

export default FormInput;
