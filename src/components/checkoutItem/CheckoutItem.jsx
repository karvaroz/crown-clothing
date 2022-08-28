import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import currencyFormatter from "../../helpers/currencyFormatter";

import "./checkoutItemStyles/checkoutItemStyles.css";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const { clearItemFromCart, addItemToCart, removeItemToCart } =
		useContext(CartContext);

	const clearItem = (cartItem) => {
		clearItemFromCart(cartItem);
	};

	const addItem = (cartItem) => {
		addItemToCart(cartItem);
	};

	const removeItem = (cartItem) => {
		removeItemToCart(cartItem);
	};

	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img
					src={imageUrl}
					alt={name}
				/>
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div
					className="arrow"
					onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div
					className="arrow"
					onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{currencyFormatter(price)}</span>
			<span className="price">{currencyFormatter(quantity * price)}</span>
			<div
				className="remove-button"
				onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
