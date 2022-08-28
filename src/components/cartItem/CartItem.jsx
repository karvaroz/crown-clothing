import React from "react";
import currencyFormatter from "../../helpers/currencyFormatter";

import "./cartItemStyles/cartItemStyles.css";

const CartItem = ({ cartItem }) => {
	const { name, quantity, imageUrl, price } = cartItem;
	return (
		<div className="cart-item-container">
			<img
				src={imageUrl}
				alt={name}
			/>
			<div className="item-details">
				<span className="name">{name} </span>
				<span className="price">
					{quantity} x {currencyFormatter(price)} ={" "}
					{currencyFormatter(quantity * price)}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
